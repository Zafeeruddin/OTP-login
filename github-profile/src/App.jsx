import { useEffect } from "react";
import GithubProfiler from "./components/githubCard";

function App(){

  useEffect(()=>{
    document.body.style.backgroundColor="black"
    document.body.style.color="white",
    document.body.style.fontFamily="Arial"
  },[])
  return(
    <div>
  <GithubProfiler/>
  </div>
  )
}

export default App;