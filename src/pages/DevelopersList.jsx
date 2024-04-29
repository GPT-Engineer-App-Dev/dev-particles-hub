import { Box, Text, VStack, Heading, Tag, SimpleGrid } from '@chakra-ui/react';

const developers = [
  { name: 'John Doe', location: 'New York, USA', technologies: ['React', 'Node.js'] },
  { name: 'Jane Smith', location: 'Berlin, Germany', technologies: ['Go', 'Python'] },
  { name: 'Carlos Ruiz', location: 'Madrid, Spain', technologies: ['Java', 'Spring Boot'] }
];

const DevelopersList = () => {
  return (
    <Box textAlign="center" fontSize="xl" p={5}>
      <VStack spacing={8}>
        <Heading fontSize="3xl" mb={4}>Developers Marketplace</Heading>
        <SimpleGrid columns={1} spacing={10}>
          {developers.map(dev => (
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Text fontSize="2xl" fontWeight="bold">{dev.name}</Text>
              <Text fontSize="lg">{dev.location}</Text>
              <Box mt={2}>
                {dev.technologies.map(tech => (
                  <Tag size="lg" colorScheme="blue" mr={2} mb={2}>{tech}</Tag>
                ))}
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default DevelopersList;