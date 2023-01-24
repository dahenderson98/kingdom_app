import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import * as Queries from '../graphql/queries';
import { Amplify, API } from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

export default function Areas() {
  var [areas, setAreas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function get_areas() {
      setIsLoading(true);
      const response = await API.graphql({
        query: Queries.listAreas,
      }).then((areaList) => {
        console.log(areaList.data.listAreas.items);
        var items = areaList.data.listAreas.items
        var _areas = [];
        for (let i = 0; i < items.length; i++) {
          _areas.push({ name: items[i].name, 
                        zone: items[i].zone, 
                        dl: items[i].dl, 
                        phone_number: items[i].phone_number, 
                        apt_address: items[i].apt_address, 
                        notes: items[i].notes });
        };
        setAreas(_areas)
        setIsLoading(false);
      });
    }
  
    get_areas()
  }, [])

  if (isLoading) {
    return (
      <CircularProgress color='inherit'/>
    )
  }
  return (
    <>
    <Button variant="contained" sx={{ marginTop: 2, marginBottom: 2 }}>Add</Button>
    <TableContainer component={Paper} margin="10">
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
                <TableCell><b>Name</b></TableCell>
                <TableCell align="left"><b>Zone</b></TableCell>
                <TableCell align="left"><b>District Leader</b></TableCell>
                <TableCell align="left"><b>Phone Number</b></TableCell>
                <TableCell align="left"><b>Apartment Address</b></TableCell>
                <TableCell align="left"><b>Notes</b></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {Array.from(areas).map((area) => (
                <TableRow key={area.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">{area.name}</TableCell>
                  <TableCell align="left">{area.zone}</TableCell>
                  <TableCell align="left">{area.dl}</TableCell>
                  <TableCell align="left">{area.phone_number}</TableCell>
                  <TableCell align="left">{area.apt_address}</TableCell>
                  <TableCell align="left">{area.notes}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    </>
  )
}
