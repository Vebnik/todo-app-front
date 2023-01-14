import React from "react"
import {useState} from "react"
import { Box, Input, Stack, Textarea, Badge, IconButton, useToast } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

function CreateTodo() {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const toast = useToast()

  const createToastModal = (status, mesasge) => {
    toast({ title: 'Todo', description: mesasge, status, duration: 1000, isClosable: true })
  }

  function createNewTodo() {
    const new_item = { name, description, date: new Date().toISOString() }

    if (!name || !description)
      return createToastModal('error', 'name or description is empty')

    try {
      createToastModal('success', "We've created your todo")
    } catch (err) {
      createToastModal('error', 'Error in backecnd service')
    }
  }

  const setInputName = (ev) => {
    const data = ev.nativeEvent.data
    if (data) setName(prev => prev + data)
    else setName(prev => prev.slice(0, -1))
  }

  const setInputDescription = (ev) => {
    const data = ev.nativeEvent.data
    if (data) setDescription(prev => prev + data)
    else setDescription(prev => prev.slice(0, -1))
  }

  return (
    <Box margin={1} width={'100%'} padding={1} >
      <Stack width={'100%'}>
        <Badge colorScheme={'green'} width={'125px'}>Todo Name</Badge>
        <Input value={name} onChange={(ev) => setInputName(ev)} variant='filled' maxLength={30} />
        <Badge colorScheme={'green'} width={'125px'}>Todo description</Badge>
        <Textarea value={description} onChange={(ev) => setInputDescription(ev)} variant='filled' maxLength={3000} maxHeight={'30vh'} />
        <IconButton onClick={createNewTodo} colorScheme={'green'} icon={<CheckCircleIcon/>}></IconButton>
      </Stack>
    </Box>
  )
}

export default CreateTodo