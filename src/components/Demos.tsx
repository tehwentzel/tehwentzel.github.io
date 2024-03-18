import { Box, Image, VStack, Text, Divider, Grid, GridItem, useColorModeValue, useMediaQuery,Link,Button } from '@chakra-ui/react'
import {DemoEntry, demos, DemoLink} from '../data/demos'

export default function Demos() {
  const projectEvenBgColor = useColorModeValue('gray.100', 'gray.700')
  const projectOddBgColor = useColorModeValue('gray.50', 'gray.800')
  const [isScreen] = useMediaQuery('screen')

  function makeImage(project: DemoEntry): JSX.Element{
    if(project.image === undefined){
      return (<></>)
    } else{
      return (<Box maxWidth='95%'>
        <img src={process.env.PUBLIC_URL + '/' + project.image}/>
      </Box>)
    }
  }

  function createLinks(project: DemoEntry)  {
    return (project.links.map( (link: DemoLink) => {
      return (<Link key={link.title}style={{'color':'navy','fontWeight':'bold'}} href={link.url} target="_blank">
          <Button 
            p={{base: 0, sm: 2}} 
            mt={1}
            fontWeight={'bold'}
            fontSize={{base: '.8em', sm: '1em'}} 
            variant='outline' 
            colorScheme='blackAlpha'
          >
            {link.title}</Button>
        </Link>)
    }))
  }

  return (
    <>
      <Grid
        templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' }}
        w={'100%'}
        gap={3}
      >
        <GridItem colSpan={{base: 1, sm: 2}}>
          {"This is a list of papers and projects I've worked on, focusing on frontend and visualization projects."}
        </GridItem>
        {demos.map((project, index) => (
          <GridItem
            key={index}
            p={{base: 2, sm: 3}}
            m={0}
            width={{base: '90%', sm: '100%'}}
            fontSize={'0.9rem'}
            bg={'teal.50'}
            rounded={'md'}
          >
            <VStack
              width={'100%'}
              alignItems={'start'}
              spacing={1}
            >
              <Text
                width={'100%'}
                fontWeight={'bold'}
              >
                {project.name}
              </Text>
              <Text
                // pt={1.5}
                lineHeight={1.33}
                
              >
                {project.description}
              </Text>
              {makeImage(project)}
            </VStack>
            {createLinks(project)}
          </GridItem>
        ))}
      </Grid>
    </>
  )
}