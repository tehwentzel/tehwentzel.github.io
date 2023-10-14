import { Box, Image, VStack, Text, Divider, Grid, GridItem, useColorModeValue, useMediaQuery,Link } from '@chakra-ui/react'
import {DemoEntry, demos} from '../data/demos'

export default function Demos() {
  const projectEvenBgColor = useColorModeValue('gray.100', 'gray.700')
  const projectOddBgColor = useColorModeValue('gray.50', 'gray.800')
  const [isScreen] = useMediaQuery('screen')

  function makeImage(project: DemoEntry): JSX.Element{
    if(project.image === undefined){
      return (<></>)
    } else{
      return (<Box>
        <img src={process.env.PUBLIC_URL + '/' + project.image}/>
      </Box>)
    }
  }
  return (
    <>
      <Grid
        id={'demos'}
        templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' }}
        w={'100%'}
        gap={3}
      >
        <GridItem colSpan={2}>
          {"This is a list of sharable web interfaces I've built and hosted on github, mainly focused on UI/Frontend work that doesn't require a server for the backend."}
        </GridItem>
        {demos.map((project, index) => (
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
                pt={1.5}
                lineHeight={1.33}
                
              >
                {project.description}
              </Text>
              <Link style={{'color':'navy','fontWeight':'bold'}} href={project.link}>{project.link}</Link>
              {makeImage(project)}
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </>
  )
}