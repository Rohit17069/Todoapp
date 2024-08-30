import React, { useEffect, useState } from 'react';
import './App.css';
import { data } from './EmployeeData';
function App() {
  const [dataa,setdataa]=useState([]);
  const [namee,setnamee]=useState('');
  const [agee,setagee]=useState(0);
  const [id,setid]=useState(0);
  const [isupdate,setisupdate]=useState(false);

  useEffect(()=>{
    setdataa(data)
  },[]);
  const handleedit=(id)=>{
    const d=dataa.filter(item=>item.id===id)
    setisupdate(true)
    setid(d[0].id)
  setnamee(d[0].name)
  setagee(d[0].age)
  }
  const handledelete=(id)=>{
   const d=dataa.filter(item=>item.id!==id)
   setdataa(d)}
   const handlesave=(e)=>{
    e.preventDefault();
    const dt=[...dataa];
    const obj={
      id:dataa.length+1,
      name:namee,age:agee
    }
    dt.push(obj);
    setdataa(dt);
    handleclear()
  }
  const handleclear=()=>{
    setisupdate(false)
setnamee('')
setagee(0)}
const handleupdate=()=>{
  const index=dataa.map((item)=>{
    return item.id
  }).indexOf(id);
  const dt=[...dataa];
  dt[index].name=namee;
  dt[index].age=agee;
  setdataa(dt);
  handleclear();
}
  return (
    <div className="App">
      <div style={{display:'flex', justifyContent:'center', marginTop:'10px', marginBottom:'10px'   }}>
        <label>Name:</label>
        <input type='string' placeholder='Enter your name' onChange={(e)=>{
          setnamee(e.target.value)
        }} value={namee}/>
        <label>Age:</label>
        <input type='number' placeholder='Enter your age'  onChange={(e)=>{
          setagee(e.target.value)
        }} value={agee}/>
        {!isupdate? <button className='btn btn-primary' onClick={(e)=>handlesave(e)}>save</button>:
         <button className='btn btn-primary' onClick={()=>handleupdate()}>Update</button>
       }
        <button className='btn btn-danger'onClick={()=>handleclear()}>clear</button>
      </div>
<table className='table table-hover'>
  <thead>
    <tr>
      <td>sno</td><td>name</td><td>age</td><td>action</td>
    </tr>
  </thead>
 { dataa.map((item,index)=>{return(
 <tr key={index}> 
 <td>{index+1}</td><td>{item.name}</td><td>{item.age}</td><td>
  <button className='btn btn-primary' onClick={()=>handleedit(item.id)}>edit</button>&nbsp;
  <button className='btn btn-danger'onClick={()=>handledelete(item.id)}>delete</button>

 </td>
</tr>)
  })}
</table>
    </div>
  );
}

export default App;
