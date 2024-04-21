import React, { useState } from 'react'

const App = () => {
  const [data,setData] = useState({
    email : '',
    password : ''
  })
  const changeHandler = (e) => {
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submithandler = (e) => {
    e.preventDefault();
    if(data.password.length<5) {
      alert('password length should be greater than 5')
    } else {
      console.log(data);
    }
  }
  return (
    <div>
      <center>
        <form onSubmit={submithandler}>
          <label> e-mail:</label>
          <input type="email" name="email" onChange={changeHandler}></input><br></br>
          <label> password:</label>
          <input type="password" name ="password" onChange={changeHandler}></input><br></br>
          <input type="submit" value="Login"></input>
        </form>
      </center>
    </div>
  )
}

export default App