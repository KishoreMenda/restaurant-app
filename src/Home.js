import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const user = 'Kishore';
  return (
    <div>
        <center>
            <p> This is the home Page</p>
            <br></br>
            <Link to={`/dashboard/?name=${user}&age=${26}`}> Link to Dashboard page</Link>
            <br></br>
            <Link to='/about'> Link to About page</Link>
        </center>
     </div>

  )
}

export default Home;