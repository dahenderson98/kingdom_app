import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CheckBox } from '@material-ui/icons';
import { Button } from '@mui/material';

function createData(f_name, l_name, sex, drives, age) {
    return { f_name, l_name, sex, drives, age };
}

const rows = [
createData('Connor', 'Henderson', 'Male', true, 21),
createData('Dallin', 'Henderson', 'Male', false, 24),
createData('Kaylee', 'Elquist', 'Female', true, 31),
createData('Lauren', 'Showgren', 'Female', false, 39),
createData('Russle', 'Bunker', 'Male', false, 28),
];

export default function Missionaries() {
  return (
    <>
      <Button variant="contained" sx={{ marginTop: 2, marginBottom: 2 }}>Add</Button>
      <TableContainer component={Paper} margin="10">
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
                <TableCell><b>First Name</b></TableCell>
                <TableCell align="left"><b>Last Name</b></TableCell>
                <TableCell align="left"><b>Sex</b></TableCell>
                <TableCell align="left"><b>Drives</b></TableCell>
                <TableCell align="left"><b>Age</b></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.f_name + row.l_name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">{row.f_name}</TableCell>
                    <TableCell align="left">{row.l_name}</TableCell>
                    <TableCell align="left">{row.sex}</TableCell>
                    <TableCell align="left"><CheckBox checked={Boolean(row.drives)}/></TableCell>
                    <TableCell align="left">{row.age}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    </>
  )
}
