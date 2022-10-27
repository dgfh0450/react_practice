import React from 'react';
import './css/Create.css'

function Create(props) {
    return (
        <div className='Create_body'>
            <form onSubmit={(event)=>{
                const name=event.target.name.value;
                const tel=event.target.tel.value;
                props.onCreate(name, tel);
            }}>
                <input type="text" name='name'placeholder='노정훈' autoFocus></input>
                <button type="submit">등록</button>
                <br></br>
                <input type="text" name='tel' placeholder='010-XXXX-XXXX'></input>
            </form>
        </div>
    );
}

export default Create;