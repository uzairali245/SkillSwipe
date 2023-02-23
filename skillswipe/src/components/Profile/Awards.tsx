import { Button, Stack } from '@chakra-ui/react'
import React from 'react'

import 'react-toastify/dist/ReactToastify.css'
import ProfileStyle from '../../styles/profilestyle'

const Awards = ({ awards }: any) => {
  // call API to get education history

  return (
    awards && (
      <div data-testid="awards">
        <>
          <style jsx>{ProfileStyle}</style>
          <div>
            <div>
              <h1
                style={{
                  fontWeight: 600,
                  fontSize: '1.5rem',
                  paddingTop: '2rem',
                  paddingBottom: '2rem',
                  textAlign: 'center',
                }}
              >
                <text>🏅 Awards</text>
              </h1>
            </div>
            <Stack
              spacing={0}
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'center',
                paddingRight: '3rem',
                paddingLeft: '3rem',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}
            >
              {awards.map((awards: any) => (
                <Button
                  className="skill"
                  style={{
                    backgroundColor: 'transparent',
                    borderWidth: '2px',
                    textShadow: '0px 0px 0px #000000CA',
                    fontWeight: 600,
                    marginRight: '1em',
                    borderRadius: '100px',
                    marginBottom: '1em',
                  }}
                >
                  {`${awards.title} - ${awards.description}`}
                </Button>
              ))}
            </Stack>
          </div>
        </>
      </div>
    )
  )
}
export default Awards
