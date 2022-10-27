import React from 'react';
import { useParams } from 'react-router-dom';
import './css/Article.css'

function Artilce(props) {
    const para=useParams().article_num;
    return (
        <div className='Article_body'>
            
        </div>
    );
}

export default Artilce;