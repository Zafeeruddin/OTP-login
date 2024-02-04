import React, { useRef, useState } from "react";

function GithubProfiler() {
  const [user, setUser] = useState("Zafeeruddin");
  const [card, setCard] = useState(null);
  const inputRef=useRef(null)
  const hanleInputClick=()=>{
    
    if(inputRef.current){
      console.log(inputRef + "input ref")
      console.log(inputRef.current + "input ref cuurent")
      inputRef.current.style.paddingLeft="15px"
    }
  }


  async function getUser() {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const data = await response.json();

      const userData = {
        login: data.login,
        followers: data.followers,
        following: data.following,
        public_repos: data.public_repos,
        avatar: data.avatar_url
      };

      setCard(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  const footer={margin:"7px",
  marginBottom:"12px",
  paddingBottom:"2px",
  padding:"12px", 
  textAlign:"center",
  }

  return (
    <div style={{height:"100vh"}}> 
      
      {card && (
      <WrapProfile>
        <div>
          <img src={card.avatar} alt="Avatar"  style={{borderRadius:"55px", width:"30%", position:"relative", top:"50%", left:"21vh", transform:"translateY(30%)"}}/>
          <p style={{position:"relative", textAlign:"center",backgroundColor:"",
        top:"25px", left:"15vh", width:"30vh"}}> {card.login}</p>
      
          <div style={{display:"flex", backgroundColor:"",
          boxShadow:"0 0 8px 0 rgba(255, 255, 255, 0.2), 0 0 10px 0 rgba(255, 255, 255, 0.19)",
        position:"relative",  top:"50px",height:"20vh"}}>
            <div style={footer} >
                <p>Followers</p>
                <p> {card.followers}</p>
            </div >
            <div style={footer}>
                <p>Follwings</p>
                <p > {card.following}</p>
            </div >
            <div style={footer}>
                <p>Repositories</p>
                <p> {card.public_repos}</p>
            </div>
          </div>
        </div>
        </WrapProfile>
      )}
      <div style={{position:"relative", margin:"5px",
      height:"20vh",
    left:"60vh", }}>
        <input
          onClick={hanleInputClick}
          ref={inputRef}
          style={{padding:"5px", margin:"10px", width:"90vh", height:"5vh", borderRadius:"10px", }}
          type="text"
          placeholder="Enter username"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
      <button style={{backgroundColor:"", textAlign:"center",
    padding:"3px",width:"14vh",
    height:"7vh", borderRadius:"15px",
    fontFamily:"Arial" }} onClick={getUser}>Get Card</button>
    </div>
    </div>
  );
}

function WrapProfile({children}){
    return (
        <div style={{boxShadow:"0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19)", 
        width:"60vh",height:"60vh",
        padding:"", margin:"20px",
        position:"relative", left:"35%",
        borderRadius:"15px"}}>
            {children}
        </div>
    )
}
export default GithubProfiler;
