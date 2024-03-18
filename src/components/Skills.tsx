import {
  chakra,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  useColorModeValue,
  useMediaQuery,
  VStack
} from '@chakra-ui/react'
import skills from '../data/skills'
import { AiFillStar} from 'react-icons/all'
import {FaTerminal} from 'react-icons/fa';
import React from 'react'

const Star = chakra(AiFillStar)

interface SkillProps {
  name: string;
  level: number;
  lastUsed: number;
}

function Skill(props: SkillProps) {
  const starActiveColor = useColorModeValue('gray.500', 'gray.400')
  const starInactiveColor = useColorModeValue('gray.200', 'gray.700')
  const [isScreen] = useMediaQuery('screen')

  return (
    <Flex
      direction={'column'}
      alignItems={'start'}
      w={'100%'}
    >
      <Text
        fontWeight={'bold'}
        fontSize={{ base: isScreen ? '.8rem' : '.9rem', md: '.9rem' }}
      >
        {props.name}
      </Text>
      <HStack
        spacing={{ base: isScreen ? 0 : 1, md: 1 }}
        m={'0.1rem 0 0.1rem'}
      >
        {[...Array(5)].map((_, i) => (
          <Star
            color={i < props.level ? starActiveColor : starInactiveColor}
            fontSize={{ base: isScreen ? '1rem' : '1.25rem', md: '1.25rem' }}
            key={i}
          />
        ))}
      </HStack>
    </Flex>
  )
}

interface SkillsProps {
  skills?: string[];
}

export default function Skills(props: SkillsProps) {
  const [isScreen] = useMediaQuery('screen')

  const display: SkillProps[] = []

  if (props.skills) {
    props.skills.forEach((skill) => {
      display.push(skills[skill as keyof typeof skills] as SkillProps)
    })
  } else {
    Object.keys(skills).forEach((skill) => {
      display.push(skills[skill as keyof typeof skills] as SkillProps)
    })
  }

  display.sort((a, b) => b.level - a.level);
  return (
    <VStack
      alignItems={'start'}
    >
      <HStack
        fontSize={'1.2rem'}
        fontWeight={'bold'}
        textTransform={'uppercase'}
        pl={'0.5rem'}
      >
        <FaTerminal />
        <Text>Skills</Text>
      </HStack>
      <Divider />
      <Grid
        w={'100%'}
        mt={2}
        pl={'0.5rem'}
        pr={{ base: isScreen ? '0' : '2rem', md: '2rem' }}
        gap={{ base: isScreen ? 1 : 2, md: 2 }}
        templateColumns={{ base: isScreen ? 'repeat(3, 1fr)' : '1fr', sm: 'repeat(4, 1fr)', md: '1fr' }}
      >
        {display.map((skill, i) => (
          <GridItem key={skill.name} className={i === 9 ? 'page-break' : ''}>
            <Skill {...skill}/>
          </GridItem>
        ))}
      </Grid>
    </VStack>
  )
}