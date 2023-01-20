import React from 'react'
import TransferBoard from './TransferBoard';
import Missionaries from './Missionaries';
import Areas from './Areas';
import Zones from './Zones';
import { Box, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import PersonPinIcon from '@mui/icons-material/PersonPin';

export default function Navbar() {

    const theme = createTheme({
        palette: {
            primary: blue,
            secondary: blue,
        },
    });
    const [tabIndex, setValue] = React.useState(1);

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);

    };
    return (
        <ThemeProvider theme={theme}>
        <TabContext value={String(tabIndex)}>
            <Box sx={{ borderBottom: 5, borderColor: 'rgba(0, 0, 0, 0.432)',  height: '100%', backgroundColor: 'rgb(104, 104, 104)'}}>
            <TabList
                value={tabIndex}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="NavBar"
                textColor="primary"
                onChange={handleChangeTab}
            >
                <Tab icon={<PersonPinIcon />} iconPosition="start" disabled value="0"/>
                <Tab label="Transfer Board" value="1"/>
                <Tab label="Missionaries" value="2"/>
                <Tab label="Areas" value="3"/>
                <Tab label="Zones" value="4" textColor="secondary"/>
            </TabList>
            </Box>
            <Box >
                <TabPanel value="1"><TransferBoard/></TabPanel>
                <TabPanel value="2"><Missionaries/></TabPanel>
                <TabPanel value="3"><Areas/></TabPanel>
                <TabPanel value="4"><Zones/></TabPanel>
            </Box>
        </TabContext>
        
        </ThemeProvider>
    )
}
