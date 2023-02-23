import { checkLogin } from '@/pages/api/api'

import { Box } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/spinner'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from '../Redux/index'

const Layout = ({ children }: any) => {
  const [Loading, setLoading] = useState(true)
  const router = useRouter()
  const dispatch = useDispatch()
  const actions = bindActionCreators(actionCreator, dispatch)
  const user = useSelector((state) => state)
  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if (token) {
      checkLogin(token)
        .then((response) => {
          if (router.asPath == '/register' || router.asPath == '/') {
            actions.setUser(response.data)
            router.push('/home')
            setTimeout(() => {
              setLoading(false)
            }, 100)
          } else {
            actions.setUser(response.data)
            setTimeout(() => {
              setLoading(false)
            })
          }
        })
        .catch((error) => {
          router.push('/')
          setTimeout(() => {
            setLoading(false)
          }, 100)
          localStorage.removeItem('jwt')
        })
    } else {
      if (router.asPath != '/register') {
        router.push('/')
        setTimeout(() => {
          setLoading(false)
        }, 100)
      } else {
        setTimeout(() => {
          setLoading(false)
        }, 100)
      }
    }
  }, [])
  return (
    <>
      <main>
        {Loading ? (
          <Box alignContent={'center'}>
            <Spinner />
          </Box>
        ) : (
          children
        )}
      </main>
    </>
  )
}
export default Layout
