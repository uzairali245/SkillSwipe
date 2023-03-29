/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import NavBar from '@/components/NavBar'
import {
  Box,
  Button,
  chakra,
  Container,
  Divider,
  Flex,
  Grid,
  HStack,
  Link,
  Spacer,
  Stack,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import router from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getMyApplications } from './api/api'
import jobListing from './jobListing/[id]'
interface Application {
  id: number
  name: string
  email: string
  phone: string
  job: {
    id: number
    jobTitle: string
    companyName: string
    location: string
    jobDescription: string
    salary: string
    jobType: string
    startDate: string
    coverLetter: boolean
    transcript: boolean
    created_at: string
    updated_at: string
  }
  created_at: string
  cv: null
  coverLetter: null
}
const MyApplications = () => {
  const [applications, setApplications] = useState<Application[]>([])

  useEffect(() => {
    const fetchApplications = async () => {
      const token = localStorage.getItem('jwt')

      try {
        // Call API function to get open jobs

        const response = await getMyApplications(token)

        // Update state with fetched data
        setApplications(response.data)
      } catch (error) {
        console.error(error)
        toast.error('Error getting jobs')
      }
    }

    fetchApplications()
  }, [])

  return (
    // <>
    //   <NavBar />
    //   <Container maxW="xl" centerContent>
    //     <Text fontSize="2xl" fontWeight="bold" my={6}>
    //       My Job Applications
    //     </Text>

    //     <List spacing={3}>
    //       {applications.map((application) => (
    //         <ListItem key={application.id}>
    //           <Text fontWeight="bold">
    //             {application.application.jobTitle} @ {application.application.companyName}
    //           </Text>
    //           <Text>{application.application.jobDescription}</Text>
    //           <Text>Name: {application.name}</Text>
    //           <Text>Email: {application.email}</Text>
    //           <Text>Phone: {application.phone}</Text>
    //         </ListItem>
    //       ))}
    //     </List>
    //   </Container>
    // </>
    <>
      <Layout>
        <NavBar />
        <Container maxW="5xl" p={{ base: 10, md: 0 }}>
          <Flex justify="left" mb={3}>
            <HStack
              style={{
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              {/* a profile picture image here */}
              {/* <img
                src={
                  Pic.profilePic
                    ? `data:image/jpeg;base64,${Pic.profilePic}`
                    : profile.image
                }
                alt="Segun Adebayo"
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginRight: '1em',
                }}
              /> */}
              <chakra.h3
                fontSize="4xl"
                fontWeight="bold"
                textAlign="center"
                paddingBottom={'0.2em'}
              >
                My Job Applications
              </chakra.h3>
              <Spacer />
              {/* <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<Icon as={BsFilter} w={8} h={8} />}
                  variant="outline"
                  padding={'1.5em'}
                  rounded={'full'}
                >
                  Filter List
                </MenuButton>
                <MenuList borderRadius={'20px'} marginTop={1}>
                  <MenuItem onClick={() => handleFilter('option1')}>
                    Sort by Starting Date
                  </MenuItem>
                  <MenuItem onClick={() => handleFilter('option2')}>
                    Sort by Highest Salary
                  </MenuItem>

                  <Checkbox
                    paddingTop={1}
                    pl={3}
                    paddingBottom={1}
                    isChecked={allChecked}
                    isIndeterminate={isIndeterminate}
                    onChange={(e) =>
                      setCheckedItems([
                        e.target.checked,
                        e.target.checked,
                        e.target.checked,
                        e.target.checked,
                      ])
                    }
                  >
                    View All
                  </Checkbox>
                  <Stack pl={7} mt={1} spacing={1}>
                    <Checkbox
                      isChecked={checkedItems[0]}
                      onChange={(e) =>
                        setCheckedItems([
                          e.target.checked,
                          checkedItems[1],
                          checkedItems[2],
                          checkedItems[3],
                        ])
                      }
                    >
                      Full Time
                    </Checkbox>
                    <Checkbox
                      isChecked={checkedItems[1]}
                      onChange={(e) =>
                        setCheckedItems([
                          checkedItems[0],
                          e.target.checked,
                          checkedItems[2],
                          checkedItems[3],
                        ])
                      }
                    >
                      Part Time
                    </Checkbox>
                    <Checkbox
                      isChecked={checkedItems[2]}
                      onChange={(e) =>
                        setCheckedItems([
                          checkedItems[0],
                          checkedItems[1],
                          e.target.checked,
                          checkedItems[3],
                        ])
                      }
                    >
                      Internship
                    </Checkbox>
                    <Checkbox
                      isChecked={checkedItems[3]}
                      onChange={(e) =>
                        setCheckedItems([
                          checkedItems[0],
                          checkedItems[1],
                          checkedItems[2],
                          e.target.checked,
                        ])
                      }
                    >
                      Other
                    </Checkbox>
                  </Stack>
                </MenuList>
              </Menu> */}
            </HStack>
          </Flex>
          <VStack
            shadow={{ base: 'none', md: 'md' }}
            border="1px solid"
            borderColor="gray.400"
            rounded="15px"
            overflow="hidden"
            spacing={0}
            marginBottom={'5em'}
          >
            {applications.map((application, index) => (
              <Fragment key={index}>
                <Grid
                  templateRows={{ base: 'auto auto', md: 'auto' }}
                  w="100%"
                  templateColumns={{ base: 'unset', md: '4fr 3fr 2fr' }}
                  p={{ base: 2, sm: 4 }}
                  gap={3}
                  alignItems="center"
                  _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
                >
                  <Box gridColumnEnd={{ base: 'span 2', md: 'unset' }}>
                    <HStack spacing={3}>
                      <img
                        src={`http://www.${application.job.companyName.toLowerCase()}.com/favicon.ico`}
                        width="20px"
                        height="20px"
                        alt="logo"
                        onError={(e) => {
                          // show a default image if the company logo is not found
                          e.currentTarget.src =
                            'https://img.icons8.com/3d-fluency/512/hard-working.png'
                        }}
                      />

                      <chakra.h2 fontWeight="bold" fontSize="lg">
                        {application.job.companyName}
                      </chakra.h2>
                    </HStack>

                    <chakra.h3
                      as={Link}
                      isExternal
                      fontWeight="extrabold"
                      fontSize="2xl"
                      onClick={() => {
                        router.push(`/jobListing/${application.id}`)
                      }}
                    >
                      {application.job.jobTitle}
                    </chakra.h3>
                    <div
                      style={{
                        paddingTop: '0.5em',
                      }}
                    ></div>

                    <chakra.p
                      fontWeight="bold"
                      fontSize="sm"
                      color={useColorModeValue('gray.600', 'gray.300')}
                    >
                      📍 {application.job.location}
                    </chakra.p>
                    <chakra.p
                      fontWeight="normal"
                      fontSize="sm"
                      color={useColorModeValue('gray.600', 'gray.300')}
                    >
                      💼 ‎
                      {application.job.jobType.charAt(0).toUpperCase() +
                        application.job.jobType.slice(1)}
                    </chakra.p>
                  </Box>
                  <VStack
                    spacing={{ base: 0, sm: 3 }}
                    alignItems="start"
                    fontWeight="light"
                    fontSize={{ base: 'xs', sm: 'sm' }}
                    color={useColorModeValue('gray.600', 'gray.300')}
                  >
                    {/* By the way, the ‎ is an invisible space character */}
                    <chakra.p>
                      {/* format the starting date to be only year month and date */}
                      📅 ‎ ‎ Starting Date: {application.job.startDate.split('T')[0]}
                    </chakra.p>
                    <chakra.p>🤑 ‎ ‎ Salary: ${application.job.salary}/hr</chakra.p>
                    <chakra.p>
                      💼 ‎ ‎ Job Posted: {application.job.created_at.split('T')[0]}
                    </chakra.p>
                    <chakra.p>
                      ⏳ ‎ ‎ Job Updated: {application.job.updated_at.split('T')[0]}
                    </chakra.p>
                  </VStack>
                  <Stack
                    spacing={6}
                    direction="row"
                    fontSize={{ base: 'sm', sm: 'md' }}
                    justifySelf="flex-end"
                    alignItems="center"
                  >
                    {/* <Button
                      as={Link}
                      _hover={{ bg: useColorModeValue('gray.400', 'gray.600') }}
                      p={5}
                      rounded="100px"
                      colorScheme={'blue'}
                      outline={'solid 1px'}
                      outlineColor={useColorModeValue('gray.400', 'gray.600')}
                      onClick={() => {
                        router.push(`/jobListing/${application.id}`)
                      }}
                    >
                      Edit Listing
                    </Button> */}
                    <Button
                      as={Link}
                      _hover={{ bg: useColorModeValue('gray.400', 'gray.600') }}
                      p={5}
                      colorScheme="red"
                      rounded="100px"
                      outline={'solid 1px'}
                      outlineColor={useColorModeValue('gray.400', 'gray.600')}
                      onClick={() => {
                        router.push(`/application/${application.id}`)
                      }}
                    >
                      Withdraw Application
                    </Button>
                  </Stack>
                </Grid>
                {jobListing.length - 1 !== index && <Divider m={0} />}
              </Fragment>
            ))}
          </VStack>
        </Container>
      </Layout>
    </>
  )
}

export default MyApplications
