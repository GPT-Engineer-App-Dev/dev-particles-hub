import { Box, Text, Image, Button, VStack, Heading, SimpleGrid, Icon } from '@chakra-ui/react';
import { FaNodeJs, FaReact, FaDotCircle, FaJsSquare, FaGofore } from 'react-icons/fa';

const Index = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <VStack spacing={8}>
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <Heading fontSize="3xl" mb={4}>Welcome to Particles</Heading>
          <Text fontSize="xl">
            Connecting businesses with top-tier software developers skilled in modern web technologies.
          </Text>
        </Box>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="https://via.placeholder.com/150"
          alt="Tech Image"
          m="auto"
        />
        <Text fontSize="lg" p={5}>
          Explore our network of professionals skilled in React, Node.js, .NET, Go, and JavaScript to boost your project's success.
        </Text>
        <SimpleGrid columns={5} spacing={10}>
          <Icon as={FaReact} w={10} h={10} />
          <Icon as={FaNodeJs} w={10} h={10} />
          <Icon as={FaDotCircle} w={10} h={10} />
          <Icon as={FaJsSquare} w={10} h={10} />
          <Icon as={FaGofore} w={10} h={10} />
        </SimpleGrid>
        <Button colorScheme="blue" size="lg">
          Get Started
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;