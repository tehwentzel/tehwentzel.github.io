import {
  Box,
  Divider,
  HStack,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
  useMediaQuery,
  VStack
} from '@chakra-ui/react'
import { MdWork } from 'react-icons/all'
import {ExperienceEntry, experience} from '../data/experience'

export default function Experience() {
  const blockColor = useColorModeValue('gray.100', 'gray.700')

  return (
    <>
      <VStack
        spacing={4}
        w={'100%'}
        fontSize={['.8rem','1rem']}
      >
        {experience.map((job: ExperienceEntry, index: number) => (
          <VStack
            key={index}
            spacing={1}
            alignItems={'start'}
            w={'100%'}
          >
            <Box
              bg={blockColor}
              rounded={'md'}
              px={4}
              py={2}
              w={'100%'}
            >
              <Text
                fontWeight={'bold'}
                lineHeight={1.1}
                mt={'0.33rem'}
              >
                {job.title}
              </Text>
              <Text
                color={'gray.500'}
                lineHeight={1}
                mt={'0.2rem'}
              >
                {job.date}. {job.employer} &mdash; {job.location}
              </Text>
            </Box>
            <UnorderedList
              pt={'0.5rem'}
              pl={'1.5rem'}
            >
              {job.responsibilities.map((resp, index) => (
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
          </VStack>
        ))}
      </VStack>
    </>
  )
}