import React from 'react'
import { Box, Badge, Grid, ButtonGroup, IconButton, Text, Card, CardHeader, Heading, CardBody, Button, CardFooter} from '@chakra-ui/react'
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'

function TodoItem({config}) {

  return (
    <Card align='center' margin={1} size={'sm'} width={'80%'}>
      <CardHeader>
        <Grid templateColumns='repeat(2, 1fr)' gap={1} margin={1}>
          <Badge colorScheme={'green'} width={'max-content'} >{config.name}</Badge>
          <Badge colorScheme={'green'} width={'max-content'} >{config.dateCreate}</Badge>
        </Grid>
      </CardHeader>
      <CardBody border={'1px'} borderColor={'gray.500'} rounded={5} margin={1}>
        <Text maxHeight={'150px'} overflowY={'scroll'}>{config.description}</Text>
      </CardBody>
      <CardFooter gap={1}>
        <IconButton icon={<CheckIcon/>}></IconButton>
        <IconButton icon={<DeleteIcon/>}></IconButton>
      </CardFooter>
    </Card>
  )
}

export default TodoItem