import React, {useState, useEffect} from "react";
import Home from './Home.js'
import "./App.css";

function App() {
  let [page, setPage] = useState('home')
  useEffect(() => {
    console.log('a')
  },[])
  if (page === '' || page === 'home'){

    return (
      <>
        <Home></Home>
      </>
    )
  } else {
    return (<p>not home page</p>)
  }
  
}

export default App;
