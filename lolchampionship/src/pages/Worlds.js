import React, { useState } from 'react'
import {Tab, Box} from '@mui/material'
import {TabPanel, TabContext, TabList} from '@mui/lab'
import Participants from './Participants';
import PlayinGroup from './PlayinGroup';
import PlayinKnockout from './PlayinKnockout';


export default function Worlds() {
    const [value, setValue] = useState("1");
    const handleChange = (event, value)=>{
        setValue(value);
    }
    const style = {
        width:'100%',
        border:'1px rgba(255,255,255,0.2) solid',
        boxSizing:'border-box',
        borderRadius : '8px',
        margin : '10px auto',
        padding:'20px',
        display : 'flex',
        flexFlow : 'column no wrap',
        justifyContent : 'space-around'
    }
  return (
    <div>
        <TabContext value={value}>
                <TabList onChange={handleChange} style={{backgroundColor:'#111111'}} TabIndicatorProps={{sx:{backgroundColor:'rgba(255,255,255)'}}} sx={{"& button.Mui-selected":{opacity:'1'}}}>
                    <Tab style={{color:'white'}} label="참가팀" value="1" />
                    <Tab style={{color:'white'}} label="플레이-인 스테이지" value="2" />
                    <Tab style={{color:'white'}} label="그룹 스테이지" value="3" />
                    <Tab style={{color:'white'}} label="8강" value="4" />
                    <Tab style={{color:'white'}} label="준결승" value="5" />
                    <Tab style={{color:'white'}} label="결승" value="6" />
                </TabList>
            <TabPanel value="1">{<Participants></Participants>}</TabPanel>
            <TabPanel value="2">{<><PlayinGroup style={style}></PlayinGroup><PlayinKnockout style={style}></PlayinKnockout></>}</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">Item Three</TabPanel>
            <TabPanel value="5">Item Three</TabPanel>
            <TabPanel value="6">Item Three</TabPanel>
            </TabContext>
    </div>
)};