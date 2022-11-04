import React, { useState } from 'react'
import {Tab, Box} from '@mui/material'
import {TabPanel, TabContext, TabList} from '@mui/lab'
import Participants from './Participants';

export default function Worlds() {
    const [value, setValue] = useState("1");
    const handleChange = (event, value)=>{
        setValue(value);
    }
  return (
    <div>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="참가팀" value="1" />
                    <Tab label="그룹 스테이지 결과" value="2" />
                    <Tab label="8강 결과" value="3" />
                    <Tab label="준결승 결과" value="4" />
                    <Tab label="결승 결과" value="5" />
                </TabList>
            </Box>
            <TabPanel value="1">{<Participants></Participants>}</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">Item Three</TabPanel>
            <TabPanel value="5">Item Three</TabPanel>
            </TabContext>
    </div>
)};