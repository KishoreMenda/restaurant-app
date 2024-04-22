import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {
    // let params = useParams();
    let {search} = useLocation();
    let params = new URLSearchParams(search);
    console.log('this is '+search)
  return (
    <div>
        <center>
            Welcome to dashboard page
            User is : {params.get('name')}
            age is : {params.get('age')}
         <br></br>
        <Link to='/'> Link to home page</Link>
        </center>
    </div>
    
  )
}

export default Dashboard;