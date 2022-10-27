import React from 'react';
import './css/Update.css'

function Update(props) {
    return (
        <div className='Update_body'>
            <form onSubmit={(event)=>{
                const name=event.target.name.value;
                const tel=event.target.tel.value;
                props.onUpdate(name, tel);
            }}>
                <input type="text" name='name'placeholder='이름'></input>
                <button type="submit">수정</button>
                <br></br>
                <input type="text" name='tel' placeholder='번호'></input>
            </form>
        </div>
    );
}

export default Update;