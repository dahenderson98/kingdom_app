import './App.css';
import React from 'react';
import Navbar from './Navbar'
import TodoListWrapper from './TodoListWrapper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import pink from '@mui/material/colors/pink';

function App() {

  const theme = createTheme({
    palette: {
      primary: blue,
      secondary: pink
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
    </ThemeProvider>
  );
}

export default App;
