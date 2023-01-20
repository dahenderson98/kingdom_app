import React from 'react'
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, dl) {
  return { name, dl };
}

const rows = [
createData('Eagle Creek', 'Braden Borough'),
createData('South Bend', 'Travis Ennis'),
createData('Mooresville', 'Mason Eqluist'),
createData('Bloomington', 'Brandon Henderson'),
createData('Columbus', 'Matthew Vause'),
];

export default function Areas() {
  return (
    <>
    <Button variant="contained" sx={{ marginTop: 2, marginBottom: 2 }}>Add</Button>
    <TableContainer component={Paper} margin="10">
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
                <TableCell><b>Name</b></TableCell>
                <TableCell align="left"><b>District Leader</b></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">{row.name}</TableCell>
                  <TableCell align="left">{row.dl}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    </>
  )
}
