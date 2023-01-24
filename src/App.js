import './styles/App.css';
import React from 'react';
import Navbar from './components/Navbar'
import TodoListWrapper from './components/TodoListWrapper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import pink from '@mui/material/colors/pink';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
//import AWSAppSyncClient, { defaultDataIdFromObject } from "aws-appsync";
import appSyncConfig from "./aws-exports";
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
/*
const client = new AWSAppSyncClient({
  url: appSyncConfig.aws_appsync_graphqlEndpoint,
  region: appSyncConfig.aws_appsync_region,
  auth: {
    type: appSyncConfig.aws_appsync_authenticationType,
    apiKey: appSyncConfig.aws_appsync_apiKey,
  },
  cacheOptions: {
    dataIdFromObject: (obj) => {
      let id = defaultDataIdFromObject(obj);

      if (!id) {
        const { __typename: typename } = obj;
        switch (typename) {
          case 'Comment':
            return `${typename}:${obj.commentId}`;
          default:
            return id;
        }
      }

      return id;
    }
  }
});
*/

export default App;
