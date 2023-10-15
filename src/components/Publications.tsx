import {
  Box,
  Divider,
  HStack,
  Flex, 
  List,ListItem,
  useColorModeValue,
  VStack,
  Center, AbsoluteCenter,
  Card,CardBody,
  Text,
  Button,Link
} from '@chakra-ui/react'
import {PublicationEntry, publications, MiscItem} from '../data/publications'

const colorScheme: any = {
  'Paper': 'teal',
  'Open Access': 'blue',
  'Github': 'black',
  'Vis': 'teal',
  'Clinical': 'green',
  'Other': 'grey',
}
export default function Publications() {

  const fontSizes: object = {base: '.8rem', sm: '1rem'}
  function makeButton(link: string | null, text: string): JSX.Element{
    if(link == null){ return (<></>)}
    return (
      <Link display={'flex'} href={link} target="_blank" >
      <Button
          fontSize={fontSizes}
          mt={{base: 1, sm: 0}}
          p={{base: 1, sm: 1}}
          style={{'display':'inline','height':'auto'}}
          variant="outline"
          colorScheme={colorScheme[text]? (colorScheme[text] as string): 'blackAlpha'}
        >{text}
      </Button>
      </Link>
      )
  }

  function makePublication(entry: PublicationEntry): JSX.Element{
    return (
      <Center width='90%' stroke={colorScheme[entry.paperType]? '2px '+colorScheme[entry.paperType]: '2px blue'}>
      <Box 
        display='inline-flex' 
        maxWidth='70vw' width='100%' mt="2" padding="2" 
        borderColor='black' style={{'border':'1px solid','borderColor': colorScheme[entry.paperType]? colorScheme[entry.paperType]: 'blue'}} 
        rounded={'md'} p={{base: 1, sm: 2, md: 3}}
      >
      <VStack >
          <Text fontSize={fontSizes} width={'100%'} align={'start'} display='inline-block'>{entry.authorList.map((d: string): JSX.Element => d.includes('Wentzel')? (<strong>{d + ', '}</strong>): (<>{d + ', '}</>))}
          <em>{'  ' + entry.title + '. '}</em>
          {entry.journal + ', ' + entry.date + '.'}
          </Text>
        <Divider/>
        <HStack width='100%' display={'flex'} flexWrap="wrap"  justifyContent={'start'} flexDirection={'row'} >
        {makeButton(entry.doi,'Paper')}
        {makeButton(entry.archivX,'Open Access')}
        {makeButton(entry.github,'Github')}
        {makeButton(entry.supplement,'Supplement')}
        {entry.misc?.map( (d: MiscItem) => makeButton(d.content,d.title))}
        </HStack>
       </VStack>
    </Box>
    </Center>
    )
  }
  console.log('publications',publications)
  return (
    <List width='100%'>
      {publications.sort((a: PublicationEntry,b: PublicationEntry) => -((100000 * Number(a.isFirstAuthor)) + a.date) + ((100000 * Number(b.isFirstAuthor)) + b.date)).map(makePublication)}
    </List>
  )
}