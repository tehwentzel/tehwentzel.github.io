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
import {EducationEntry, education} from '../data/education'

export default function Experience() {
  const blockColor = useColorModeValue('gray.100', 'gray.700')

  function makeHonors(j: EducationEntry): JSX.Element {
    if(j.honors.length < 1){
      return (<></>)
    } else{
      return (<>
      <Divider style={{'marginTop':'.5em'}}/>
      <Text style={{'margin':'0px','fontWeight':'bold'}}>{'Honors:'}</Text>
      </>)
    }
  }

  return (
    <>
      <VStack
        spacing={4}
        w={'100%'}
        fontSize={['.8rem','1rem']}
      >
        {education.map((job, index) => (
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
              <HStack>
              <Text
              >
                {job.employer}
              </Text>
              <Text
                color={'gray.500'}
                lineHeight={1}
                mt={'0.2rem'}
              >
                {job.location} &mdash; {job.date}
              </Text>
              </HStack>
              
              <Text
                fontWeight={'bold'}
                lineHeight={1.1}
                mt={'0.1rem'}
              >
                {job.title}
              </Text>
              
              <Text
                color={'gray.600'}
                lineHeight={1}
                mt={'0.2rem'}
              >{'GPA: ' + job.gpa}</Text>
            {makeHonors(job)}
            <UnorderedList
              pt={'0.1rem'}
              pl={'1rem'}
            >
              {job.honors.map((resp, index) => (
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
            </Box>
          </VStack>
        ))}
      </VStack>
    </>
  )
}