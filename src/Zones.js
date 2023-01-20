import React from 'react'
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, zl1, zl2, stl1, stl2) {
  return { name, zl1, zl2, stl1, stl2 };
}

const rows = [
createData('Zone 1', 'Connor Henderson', 'Dallin Henderson', 'Alyssa Henderson', 'Kellie Henderson'),
createData('Zone 2', 'Braden Elquist', 'Jason Elquist', 'Kaylee Elquist', 'Gina Henderson'),
createData('Zone 3', 'Russle Bunker', 'Hunter Henderson', 'Lindsey Henderson', 'Tina Henderson'),
createData('Zone 4', 'Tyler Henderson', 'Darrin Peery', 'Christy Henderson', 'Lucy Showgren'),
createData('Zone 5', 'David Ingram', 'Dallon Miller', 'Alyssa Miller', 'Isabella Henderson'),
];

export default function Zones() {
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
            {rows.map((row) => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">{row.name}</TableCell>
                  <TableCell align="left">{row.zl1}</TableCell>
                  <TableCell align="left">{row.zl2}</TableCell>
                  <TableCell align="left">{row.stl1}</TableCell>
                  <TableCell align="left">{row.stl2}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    </>
  )
}
