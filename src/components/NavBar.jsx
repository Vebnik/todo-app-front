import React from 'react';
import { Box, useColorModeValue, Button, Grid } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'

// components
import TodoList from './TodoList'
import CreateTodo from './CreateTodo'

function NavBar({setPage}) {

  const textColor = useColorModeValue('gray.300', 'gray.700')

  return (
    <Box backgroundColor={textColor} rounded={5} padding={1} width={'100%'} display={'flex'} justifyContent={'space-between'}>
      <Grid templateColumns='repeat(2, 1fr)' gap={1} width={'max-content'}>
        <Button colorScheme={'blue'} width={105} onClick={() => setPage(<TodoList/>)}>Todo list</Button>
        <Button colorScheme={'blue'} width={105} onClick={() => setPage(<CreateTodo/>)}>Create todo</Button>
      </Grid>
      <ColorModeSwitcher/>
    </Box>
  )

}

export default NavBar;