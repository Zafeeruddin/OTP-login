import { useEffect } from "react";
import OTP from "./comonents/otp-box";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PutOTP from "./comonents/put-otp";
function App(){
  useEffect(()=>{
    const body =document.body.style
    body.backgroundColor="black",
    body.color="white"
    body.fontFamily="arial"
  },[])
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OTP/>}/>
        <Route path="/putOTP" element={<PutOTP/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;