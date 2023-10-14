import {
  Box,
  Divider,
  HStack,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
  VStack,
  Card,CardBody,
  Button,Link
} from '@chakra-ui/react'
import {PublicationEntry, publications, MiscItem} from '../data/publications'

export default function Publications() {
  const blockColor = useColorModeValue('gray.100', 'gray.700')

  function makeButton(link: string | null, text: string): JSX.Element{
    if(link == null){ return (<></>)}
    return (
      <Link href={link}>
      <Button
          style={{'display':'inline','height':'auto','fontSize':'1.1em'}}
          variant="outline"
          colorScheme='blue'
        >{text}
      </Button>
      </Link>
      )
  }

  function makePublication(entry: PublicationEntry): JSX.Element{
    return (
      <Card maxWidth='60vw' variant='outline' mt="2" padding="0">
      <CardBody padding="1.5">
      <VStack>
        <div>
          <p style={{'display':'inline-block'}}>{entry.authorList.join(', ') + '.'}
          <strong>{' ' + entry.title + '. '}</strong>
          {entry.journal + ', ' + entry.date + '.'}
          </p>
        </div>
        <HStack>
        {makeButton(entry.doi,'Paper')}
        {makeButton(entry.archivX,'Open Access')}
        {makeButton(entry.github,'Github')}
        {makeButton(entry.supplement,'Supplement')}
        {entry.misc?.map( (d: MiscItem) => makeButton(d.content,d.title))}
        </HStack>
       </VStack>
      </CardBody>
    </Card>
    )
  }
  console.log('publications',publications)
  return (
    <>
      {publications.sort((a: PublicationEntry,b: PublicationEntry) => -((100000 * Number(a.isFirstAuthor)) + a.date) + ((100000 * Number(b.isFirstAuthor)) + b.date)).map(makePublication)}
    </>
  )
}