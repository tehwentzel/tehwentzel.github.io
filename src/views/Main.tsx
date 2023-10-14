import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack, Link,
  Spacer,
  Text,
  useColorModeValue,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react'
import info from '../data/information'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { SiGooglescholar, AiOutlineGithub, MdEmail } from 'react-icons/all'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Demos from '../components/Demos';
import Education from '../components/Education';
import Publications from '../components/Publications';
import * as React from 'react'
import { MdWork} from 'react-icons/all';
import {FaLaptopCode,FaUserGraduate,FaBook} from 'react-icons/fa';

export function Main() {
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const titleColor = useColorModeValue('gray.600', 'gray.500')
  const blockColor = useColorModeValue('gray.100', 'gray.700')
  const [isScreen] = useMediaQuery('screen')

  function makeIntro(): JSX.Element{
    return (<Grid
      id={'header'}
      templateColumns={{base: '1fr', md: '1fr auto'}}
      gap={4}
    >
      <GridItem>
        <Flex
          alignItems={'start'}
          direction={'column'}
          h={'100%'}
        >
          <Text
            fontSize={'1.5rem'}
            textTransform={'uppercase'}
            fontWeight={'bold'}
          >
            {info.full_name}
          </Text>
          <Text
            color={titleColor}
            mt={0}
            lineHeight={1.33}
          >
            {info.title}
          </Text>
          <Spacer/>

        </Flex>
      </GridItem>
      <GridItem>
        <VStack
          alignItems={'start'}
          fontSize={{base: '1.0rem', md: '1.1rem'}}
          spacing={{base: 0, md: 1}}
          pr={{base: 0, sm: 8, lg: 0}}
        >
          {<HStack>
              <MdEmail/>
              <Text>{info.email}</Text>
          </HStack>}
          {<HStack>
              <AiOutlineGithub/>
              <Link href={`https://github.com/${info.github}`} isExternal>github.com/{info.github}</Link>
          </HStack>}
          {<HStack>
            <SiGooglescholar/>
              <Link href={info.googleScholar} isExternal>Google Scholar</Link>
            </HStack>}
        </VStack>
      </GridItem>
    </Grid>
    )
  }

  function makeSummary(): JSX.Element{
    return (
      <Text whiteSpace={'pre-wrap'}>
        {info.summary}
      </Text>
    )
  }

  function makeExperience(): JSX.Element{
    return (
      <Grid
        id={'experience'}
        templateColumns='1fr 12em'
        gap={6}
        mt={4}
        style={{'height':'50vh','minHeight': '600px','maxHeight': '900px'}}
      >
        <GridItem>
          <VStack
            w={'100%'}
            alignItems={'start'}
          >
            <Experience/>
          </VStack>
        </GridItem>
        <GridItem
          style={{'overflowY':'scroll','height':'100%'}}
          id={'skills'}
        >
          <Skills/>
        </GridItem>
      </Grid>
    )
  }

  function makeProjects(): JSX.Element {
    return (<VStack>
      <Projects/>
    </VStack>)
  }

  function makeDemos(): JSX.Element{
    return (<VStack>
      <Demos/>
    </VStack>)
  }
  return <Box
    maxW="90em"
    mx="auto"
    color={textColor}
    p={{base: isScreen ? 3 : 0, lg: '1rem 0'}}
  >
    <Box
      as={'header'}
    >
      {makeIntro()}
      
      <Tabs>
        <TabList>
          <Tab><MdWork/> Experience</Tab>
          <Tab><FaUserGraduate/>Education</Tab>
          <Tab>Publications</Tab>
          <Tab><FaBook/>Research</Tab>
          <Tab><FaLaptopCode/>Example Projects</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <VStack
        mt={4}
        lineHeight={1.33}
        p={2}
        bg={blockColor}
        rounded={'md'}
      >
        {makeSummary()}
      </VStack>
          {makeExperience()}
          </TabPanel>
          <TabPanel>
            <Education/>
          </TabPanel>
          <TabPanel>
            <Publications/>
          </TabPanel>
          <TabPanel>
            {makeProjects()}
          </TabPanel>
          <TabPanel>
            {makeDemos()}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  </Box>
}