import React, { useState } from 'react'
import {Tab, Box} from '@mui/material'
import {TabPanel, TabContext, TabList} from '@mui/lab'
import Participants from './Participants';
import PlayinGroup from './PlayinGroup';
import PlayinKnockout from './PlayinKnockout';
import Group from './Group';


export default function Worlds() {
    const [value, setValue] = useState("1");
    const handleChange = (event, value)=>{
        setValue(value);
    }
    const style = {
        width:'100%',
        border:'1px rgba(255,255,255,0.3) solid',
        boxSizing:'border-box',
        marginBottom : '10px',
        padding:'20px',
        display : 'flex',
        flexFlow : 'column no wrap',
        justifyContent : 'space-around',
        boxSizing:'border-box',
    }
  return (
    <div>
        <TabContext value={value}>
                <TabList onChange={handleChange} style={{backgroundColor:'#111111'}} TabIndicatorProps={{sx:{backgroundColor:'rgba(255,255,255)'}}} sx={{"& button.Mui-selected":{opacity:'1'}}}>
                    <Tab style={{color:'white'}} label="참가팀" value="1" />
                    <Tab style={{color:'white'}} label="플레이-인 스테이지" value="2" />
                    <Tab style={{color:'white'}} label="그룹 스테이지" value="3" />
                    <Tab style={{color:'white'}} label="녹 아웃 토너먼트" value="4" />
                </TabList>
            <TabPanel value="1">{<Participants></Participants>}</TabPanel>
            <TabPanel value="2">{<><PlayinGroup style={style}></PlayinGroup><PlayinKnockout style={style}></PlayinKnockout></>}</TabPanel>
            <TabPanel value="3">{<Group style={style}></Group>}</TabPanel>
            <TabPanel value="4">녹아웃</TabPanel>
            </TabContext>
    </div>
)};