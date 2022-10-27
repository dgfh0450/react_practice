import React, {useState} from 'react';
import Search from './Search';
import Nav from './Nav';
import Create from './Create';
import Update from './Update';
import './css/Article.css'

function Article(props) {
    let content=null;
    const [id, setId] = useState(null);
    const [mode, setMode] = useState("READ");
    const [newId, setNewId] = useState(localStorage.length+1);
    if(mode==="READ") {
        const lis=[];
        for(let i=0; i<=newId;i++) {
            const contact=JSON.parse(localStorage.getItem(String(i)));
            if(contact) {
                lis.push(<li><a href='#' onClick={()=>{
                    setMode("DETAIL");
                    setId(i);
                }}>{contact.name} : {contact.tel}</a></li>)
            }
        }
        content=lis;
        }
    else if(mode==="CREATE") {
        content = <Create onCreate={(name, tel)=>{
            const newContact = {id:newId, name:name, tel:tel};
            localStorage.setItem(newId, JSON.stringify(newContact));
            setNewId(newId+1);
            setMode("READ");
        }}></Create>
    }
    else if(mode==="DETAIL") {
        const lis=[];
        for(let i=0; i<newId; i++) {
            const contact=JSON.parse(localStorage.getItem(String(i)));
            if(contact) {
                lis.push(<li><a href='#' onClick={()=>{
                    setMode("DETAIL");
                    setId(i);
                }}>{contact.name} : {contact.tel}</a></li>)
            }
            if(id===i) {
                lis.push(<ol className='Nav_Detail'>
                    <li><a href='#' onClick={()=>{
                        setMode("UPDATE");
                    }}>Update</a></li>
                    <li><a href='#' onClick={()=>{
                        setMode("DELETE");
                    }}>Delete</a></li>
                    <br></br>
                </ol>)
            }
        }
        content=lis;
    }
    else if(mode==="UPDATE") {
        content = <Update onUpdate={(name, tel)=>{
        const newContact = {id:id, name:name, tel:tel};
        localStorage.removeItem(String(id));
        localStorage.setItem(id, JSON.stringify(newContact));
        setMode("READ");}}></Update>
    }
    else if(mode==="DELETE") {
        localStorage.removeItem(String(id));
        setMode("READ");
    }
    else if(mode==="SEARCH") {
        const lis=[];
        content = <><Search target="이름" onSearch={(name)=>{
            for(let i=0; i<=newId; i++) {
                if(i===newId) {
                    alert('없는 정보입니다.');
                    break;
                }
                const contact=JSON.parse(localStorage.getItem(String(i)));
                if(contact) {
                    if(contact.name===name) {
                        alert(contact.name+':'+contact.tel);
                        break;
                    }

                }
            }
        }}></Search>
        <Search target="번호" onSearch={(tel)=>{
            for(let i=0; i<=newId; i++) {
                if(i===newId) {
                    alert('없는 정보입니다.');
                    break;
                }
                const contact=JSON.parse(localStorage.getItem(String(i)));
                if(contact) {
                    if(contact.tel===tel) {
                        alert(contact.name+':'+contact.tel);
                        break;
                    }

                }
            }
        }}></Search></>
    }
    return (
        <div className='Article_body'>
                 <Nav onChangeMode={(mode)=>{
                    setMode(mode);
                 }}></Nav>
                 <div className='Article_content_wrap'>
                    <ul className='Article_content'>{content}</ul>
                </div>
        </div>
    );
}

export default Article;