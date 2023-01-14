import React from 'react';
import { Box } from '@chakra-ui/react'

import TodoItem from './TodoItem';

function TodoList() {

  const todoConfig = []

  for (let i=0;i<20;i++) {
    todoConfig.push({
      name: 'Some Todo',
      dateCreate: '2022-12-13',
      description: 'Add new django logic and new react components Add new django logic and new react componentsAdd new django logic and new react components Add new django logic and new react components Add new django logic and new react componentsAdd new django logic and new react componentsAdd new django logic and new react components Add new django logic and new react componentsAdd new django logic and new react componentsAdd new django logic and new react components Add new django logic and new react componentsAdd new django logic and new react componentsAdd new django logic and new react components Add new django logic and new react componentsAdd new django logic and new react components'
    })
  }

  return (
    <Box margin={1} display={'flex'} flexDirection={'column'} alignItems={'center'} overflowY={'scroll'} maxHeight={'90vh'}>
      {todoConfig.map((el) => <TodoItem config={el} />)}
    </Box>
  )

}

export default TodoList