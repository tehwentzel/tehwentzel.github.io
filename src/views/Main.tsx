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
  Image,
  AbsoluteCenter,
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
import {FaLaptopCode,FaUserGraduate,FaBook,FaInstagram} from 'react-icons/fa';

export function Main() {
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const titleColor = useColorModeValue('gray.600', 'gray.500')
  const blockColor = useColorModeValue('gray.100', 'gray.700')
  const [isScreen] = useMediaQuery('screen')

  function makeIntro(): JSX.Element{
    return (<Grid
      id={'header'}
      templateColumns={{base: '1fr', md: '1fr auto auto'}}
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
        </VStack>
      </GridItem>
      <GridItem>
        <VStack
          alignItems={'start'}
          fontSize={{base: '1.0rem', md: '1.1rem'}}
          spacing={{base: 0, md: 1}}
          pr={{base: 0, sm: 8, lg: 0}}
        >
          {<HStack>
            <SiGooglescholar/>
              <Link href={info.googleScholar} isExternal>Google Scholar</Link>
            </HStack>}
            {<HStack><FaInstagram/><Link href={info.instagram} isExternal>Cat Pictures</Link></HStack>}
        </VStack>
      </GridItem>
    </Grid>
    )
  }

  function makeSummary(): JSX.Element{
    return (
      <Text fontSize={{base: 12, sm: '1em'}} whiteSpace={'pre-wrap'}>
        {info.summary}
      </Text>
    )
  }

  function makeExperience(): JSX.Element{
    return (
      <Grid
        id={'experience'}
        templateColumns={{base: '1fr', sm: '1fr 12em'}}
        templateRows={{base: '1fr auto', sm: '1fr'}}
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
          style={{'overflowY':'scroll','height': '50vh','minHeight': '600px'}}
          id={'skills'}
        >
          <Skills/>
        </GridItem>
      </Grid>
    )
  }

  const tabSizes: object = {base: '.7rem', sm: '1rem'}
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
        <TabList maxWidth='95vw' overflowY='hidden' overflowX={'auto'}>
          <Tab  p={{base: 1,sm: 2, md: 3}} fontSize={tabSizes}><MdWork/>Experience</Tab>
          <Tab  p={{base: 1,sm: 2, md: 3}} fontSize={tabSizes}><FaUserGraduate/>Education</Tab>
          <Tab  p={{base: 1,sm: 2, md: 3}} fontSize={tabSizes}><SiGooglescholar/>Publications</Tab>
          <Tab  p={{base: 1,sm: 2, md: 3}} fontSize={tabSizes}><FaLaptopCode/>Projects</Tab>
          <Tab  p={{base: 1,sm: 2, md: 3}} fontSize={tabSizes}><FaBook/>Research</Tab>
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
        <Grid
          templateRows={{base:'auto 1fr auto', sm: 'auto 1fr'}}
          templateColumns={'repeat(3,fr)'}
        >
      <GridItem rowSpan={1} colSpan={3} p={{base: .1, sm: 2}}>
        <Image src={'./banner.PNG'} maxHeight='8em'></Image>
      </GridItem>
      <GridItem rowSpan={{base: 1, sm: 2}} colSpan={{base: 3, sm: 2}} p={{base: .1, sm: 2}}>
        {makeSummary()}
      </GridItem>
      <GridItem rowSpan={{base: 1, sm: 2}} colSpan={{base: 3, sm: 1}} p={{base: .1, sm: 2}} display={'flex'} justifyContent={'center'}>
        <Image display={'inline-flex'} height={{base: '5em', sm: '5em', md: "7em"}} src={'./face.png'}/>
      </GridItem>
      </Grid>
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
          <Demos/>
          </TabPanel>
          <TabPanel>
            <Projects/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  </Box>
}