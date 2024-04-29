import { Box, Text, VStack, Heading, Tag, SimpleGrid, Input, Select, Stack } from '@chakra-ui/react';
import { useState } from 'react';

const [searchTerm, setSearchTerm] = useState('');
const [filterTech, setFilterTech] = useState('');
const developers = [
  { name: 'John Doe', location: 'New York, USA', technologies: ['React', 'Node.js'] },
  { name: 'Jane Smith', location: 'Berlin, Germany', technologies: ['Go', 'Python'] },
  { name: 'Carlos Ruiz', location: 'Madrid, Spain', technologies: ['Java', 'Spring Boot'] }
];

const filteredDevelopers = developers.filter(dev => {
  return (
    (dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     dev.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
     dev.technologies.join(', ').toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterTech === '' || dev.technologies.includes(filterTech))
  );
});

const DevelopersList = () => {
  return (
    <Box textAlign="center" fontSize="xl" p={5}>
      <VStack spacing={8}>
        <Heading fontSize="3xl" mb={4}>Developers Marketplace</Heading>
        <Stack spacing={4} direction="row" mb={4}>
          <Input
            placeholder="Search by name, location, or technology"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select placeholder="Filter by technology" value={filterTech} onChange={(e) => setFilterTech(e.target.value)}>
            <option value="React">React</option>
            <option value="Node.js">Node.js</option>
            <option value="Go">Go</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="Spring Boot">Spring Boot</option>
          </Select>
        </Stack>
        <SimpleGrid columns={1} spacing={10}>
          {filteredDevelopers.map(dev => (
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