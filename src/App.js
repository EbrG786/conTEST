import React, { useEffect } from 'react';
import Axios from 'axios';
import { useState } from 'react';
import './App.css';
import { BrandExample } from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function App() {
  useEffect(() => {
    document.title = 'conTEST';
  }, []);
  const [data,setData] = useState([])
  const allData = () =>{
    Axios.get('https://kontests.net/api/v1/all').then((res)=>setData(res.data))
  }
  const codeForce = () =>{
    Axios.get('https://kontests.net/api/v1/codeforces').then((res)=>setData(res.data))
  }
  const codeChef = () =>{
    Axios.get('https://kontests.net/api/v1/code_chef').then((res)=>setData(res.data))
  }
  const hackerRank = () =>{
    Axios.get('https://kontests.net/api/v1/hacker_rank').then((res)=>setData(res.data))
  }
  const hackerEarth = () =>{
    Axios.get('https://kontests.net/api/v1/hacker_earth').then((res)=>setData(res.data))
  }
  const leetCode = () =>{
    Axios.get('https://kontests.net/api/v1/leet_code').then((res)=>setData(res.data))
  }
  const resetInputField = () => {
    setData([])
  };
  return (
    <div className='App'>
      <BrandExample/>
      <div className="mt-3 mb-5">
      <Button onClick={allData} variant="outline-primary">All Competitions</Button>
      <Button onClick={codeForce} variant="outline-danger">CodeForce</Button>
      <Button onClick={codeChef} variant="outline-success">CodeChef</Button>
      <Button onClick={hackerRank} variant="outline-secondary">Hacker Rank</Button>
      <Button onClick={hackerEarth} variant="outline-info">Hacker Earth</Button>
      <Button onClick={leetCode} variant="outline-warning">LeetCode</Button>
      <Button onClick={resetInputField} variant="danger">Reset</Button>
      </div>
      <Table striped bordered hover style={{'backgroundColor':'#E9DAC1'}} responsive>
      <thead>
              <tr>
                <td><h4>Name</h4></td>
                <td><h4>URL</h4></td>
                <td><h4>Start Time</h4></td>
                <td><h4>End Time</h4></td>
                <td><h4>Site</h4></td>
                <td><h4>In 24 hours?</h4></td>
              </tr>
      </thead>
      <tbody>
      {  
        data.map(
          (info,key)=>{
            return(
              <tr key={key}>
                <td>{info.name}</td>
                <td>{info.url}</td>
                <td>{info.start_time}</td>
                <td>{info.end_time}</td>
                <td>{info.site}</td>
                <td>{info.in_24_hours}</td>       
              </tr>    
            )
            }
        )
      }
      </tbody>
      </Table>   
    </div>
  );
}

export default App;
