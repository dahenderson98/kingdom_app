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

export default function Zones() {
  var [zones, setZones] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function get_zones() {
      setIsLoading(true);
      const response = await API.graphql({
        query: Queries.listZones,
      }).then((zoneList) => {
        console.log(zoneList.data.listZones.items);
        var items = zoneList.data.listZones.items
        var _zones = [];
        for (let i = 0; i < items.length; i++) {
          _zones.push({ name: items[i].name, 
                        zl1: items[i].zoneZl_1Id, 
                        zl2: items[i].zoneZl_2Id, 
                        stl1: items[i].zoneStl_1Id, 
                        stl2: items[i].zoneStl_2Id });
        };
        setZones(_zones)
        setIsLoading(false);
      });
    }
    
    get_zones()
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
                <TableCell align="left"><b>Zone Leader 1</b></TableCell>
                <TableCell align="left"><b>Zone Leader 2</b></TableCell>
                <TableCell align="left"><b>Sister Training Leader 1</b></TableCell>
                <TableCell align="left"><b>Sister Training Leader 2</b></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {Array.from(zones).map((zone) => (
                <TableRow key={zone.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">{zone.name}</TableCell>
                  <TableCell align="left">{zone.zl1}</TableCell>
                  <TableCell align="left">{zone.zl2}</TableCell>
                  <TableCell align="left">{zone.stl1}</TableCell>
                  <TableCell align="left">{zone.stl2}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    </>
  )
}
