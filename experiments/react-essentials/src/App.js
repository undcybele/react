import React, { useState, useEffect } from "react";
import './App.css';

//https://api.github.com/users

function App({login}) {
  const [data, setData] = useState(null);
  useEffect(()=>{
    fetch(`https://api.github.com/users/${login}`)
    .then((response)=> response.json())
    .then(setData);
  }, []);

  if(data){
    return(
    <div>
      <h1>Name: {data.following}</h1>
      <img alt={data.login} src={data.avatar_url}></img>
    </div>
    )}

  return (
    <div>No user available</div>
  );
}

export default App;
