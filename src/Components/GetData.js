import React, { useState } from 'react'
import axios from 'axios'

export default function GetData() {
    const [data, setData] = useState([]);

    const handleOnClick = ()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response =>{
           setData(response.data)
        },error=>{
            console.log(error)
        }); 
    }
  return (
    <>
      <div>GetData</div>
    <div className='btn'>
    <button type="submit" onClick={handleOnClick}>Click Here</button>   
    <div className='data'>
      {data.map((item, id)=>{
        console.log(item);
           return <h1 key={item.id}>{id}{item.title}</h1>
      })
      }
        </div>     
    </div>
    </>
  
  )
}
