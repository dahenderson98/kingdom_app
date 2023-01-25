import React, { useState, useEffect } from 'react'
import AddMissionary from './AddMissionary'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CheckBox } from '@material-ui/icons';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import * as Queries from '../graphql/queries';
import { Amplify, API } from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

export default function Missionaries() {
  var [missionaries, setMissionaries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function get_missionaries() {
      setIsLoading(true);
      const response = await API.graphql({
        query: Queries.listMissionaries,
      }).then((_missionaryList) => {
        console.log(_missionaryList.data.listMissionaries.items);
        var items = _missionaryList.data.listMissionaries.items
        var _missionaries = [];
        for (let i = 0; i < items.length; i++) {
          _missionaries.push({ l_name: items[i].last_name,
                        f_name: items[i].first_name,
                        sex: items[i].sex, 
                        drives: items[i].can_drive, 
                        language: items[i].language, });
        };
        setMissionaries(_missionaries)
        setIsLoading(false);
      });
    }
  
    get_missionaries()
  }, [])

  if (isLoading) {
    return (
      <CircularProgress color='inherit'/>
    )
  }
  return (
    <>
      <AddMissionary/>
      <TableContainer component={Paper} sx={{ margin: 2 }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
                <TableCell><b>Last Name</b></TableCell>
                <TableCell align="left"><b>First Name</b></TableCell>
                <TableCell align="left"><b>Sex</b></TableCell>
                <TableCell align="left"><b>Drives</b></TableCell>
                <TableCell align="left"><b>Language</b></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {Array.from(missionaries).map((missionary) => (
                <TableRow key={missionary.f_name + missionary.l_name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">{missionary.l_name}</TableCell>
                    <TableCell align="left">{missionary.f_name}</TableCell>
                    <TableCell align="left">{missionary.sex}</TableCell>
                    <TableCell align="left"><CheckBox checked={missionary.drives === "true"}/></TableCell>
                    <TableCell align="left">{missionary.language}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    </>
  )
}
