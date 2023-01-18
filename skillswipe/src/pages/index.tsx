import { Flex, Heading, Input, Button, useColorMode, useColorModeValue} from '@chakra-ui/react'
import Link from 'next/link';

const IndexPage = () => {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")
  const placeholderBackground = useColorModeValue("gray.200", "gray.600")
    const toggleTheme = useColorModeValue("🌙", "💡")

return (
<Flex height="100vh" alignItems="center" justifyContent="center">
  <Flex direction="column" background={formBackground} p={12} rounded={25} >
    <Heading mb={6}>SkillSwipe 🚀</Heading>
    <Input placeholder="Email" variant="filled" mb={3} type="email" background={placeholderBackground} />
    <Input placeholder="*******" variant="filled" mb={6} type="password" background={placeholderBackground}/>
    <Button colorScheme="blue" mb={4}>
      <Link href="/home">Sign In</Link>
      </Button>
    <Button colorScheme="green" mb={6}>Register</Button>
    <Button onClick={toggleColorMode}>{toggleTheme}</Button>
  </Flex>
</Flex>
)

  

}
export default IndexPage