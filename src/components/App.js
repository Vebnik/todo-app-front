import React from 'react';
import { useState } from 'react';
import { ChakraProvider, Container, Center, extendTheme } from '@chakra-ui/react';

// components
import NavBar from './NavBar'
import TodoList from './TodoList';

const theme = extendTheme({
  styles: {
    global: {
      '::-webkit-scrollbar': { width: '10px' },
      '::-webkit-scrollbar-thumb': { bg: 'gray.400', rounded: '10px'},
      '::-webkit-scrollbar-track': { width: '10px', bg: 'gray.700', rounded: '10px'},
    },
  },
})

function App() {

  const [page, setPage] = useState(<TodoList/>)

  return (
    <ChakraProvider theme={theme}>
      <Container maxWidth={'1000px'} overflow={'hidden'}>
        <NavBar setPage={setPage}/>
        <Center width={'100%'} >
          {page}
        </Center>
      </Container>
    </ChakraProvider>
  )
}

export default App;
