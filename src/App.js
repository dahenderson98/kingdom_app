import './styles/App.css';
import React from 'react';
import Navbar from './components/Navbar'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import pink from '@mui/material/colors/pink';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


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
