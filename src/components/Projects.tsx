import { HStack, VStack, Text, Divider, Grid, GridItem, useColorModeValue, useMediaQuery,UnorderedList,ListItem } from '@chakra-ui/react'
import projects from '../data/projects'

export default function Projects() {
  const projectEvenBgColor = useColorModeValue('gray.100', 'gray.700')
  const projectOddBgColor = useColorModeValue('gray.50', 'gray.800')
  const roleColor = useColorModeValue('gray.600', 'gray.400')
  const [isScreen] = useMediaQuery('screen')

  return (
    <>
      <Grid
        id={'projects'}
        templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' }}
        w={'100%'}
        gap={3}
      >
        {projects.map((project, index) => (
          <GridItem
            key={index}
            p={3}
            fontSize={'0.9rem'}
            bg={{
              base: isScreen ?
                (index % 2 === 0 ? projectEvenBgColor : projectOddBgColor) :
                index % 3 === 0 || index % 4 === 0 ? projectEvenBgColor : projectOddBgColor,
              md: index % 3 === 0 || index % 4 === 0 ? projectEvenBgColor : projectOddBgColor
            }}
            rounded={'md'}
          >
            <VStack
              alignItems={'start'}
              spacing={1}
            >
              <Text
                fontWeight={'bold'}
              >
                {project.name}
              </Text>
              <Text
                color={'gray.500'}
                lineHeight={0.5}
                fontSize={'0.8rem'}
              >
                {project.date}
              </Text>
              <Text
                pt={1.5}
                lineHeight={1.33}
                
              >
                {project.description}
              </Text>
              <Text
              pt={1}
              pl={0}
              fontWeight={'bold'}
              >{'Publications:'}</Text>
              <UnorderedList
                pt={'0'}
                pl={'1rem'}
              
              >
                {project.papers.map((resp, index) => (
                  <ListItem
                    key={index}
                    w={'100%'}
                    lineHeight={1.33}
                    mb={'0.5rem'}
                  >
                    {resp}
                  </ListItem>
                ))}
              </UnorderedList>
              <Text
                color={roleColor}
                fontWeight={'bold'}
                lineHeight={1.33}
              >
                <b>Role: </b>{project.role}
              </Text>
              <Text
                color={'gray.500'}
                lineHeight={1.33}
              >
                <b>Technologies: </b>{project.technologies.join(', ')}
              </Text>
              
              
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </>
  )
}