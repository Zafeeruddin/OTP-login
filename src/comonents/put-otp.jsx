import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function PutOTP(){

    const navigate=useNavigate();
    const refOne=useRef(null);
    const refTwo=useRef(null);
    const refThree=useRef(null);
    const refFour=useRef(null);
    function login(){
        navigate("/putOTP")
    }
    const otpCard={
        boxShadow:"0px 0px 20px 0px rgba(255,255,255,0.19) 5px 4px 20px 0px rgba(255,255,255,0.6)",
        borderColor:"white",
        width:"50vh",
        height:"35vh",
        padding:"",
        textAlign:"center",
        position:"relative",
        left:"50%",
        top:"50%",
        transform:"translate(-50%,50%)",
    }
    const innerOTPCard={border:"3px solid white", margin:"15px",
    width:"220px", height:"140px",transform:"translate(0%,9%)",
    padding:"10px",borderRadius:"15px", }
    const numberStyle={
        width:"15px",
        border:"1px solid white",
        backgroundColor:"black",
        borderRadius:"3px",
        margin:"5px",
        color:"white",
        textAlign:"center",
        padding:"1px"
    }

    function moveAhead(refCurrent,refNext){
        if(refCurrent.current){
            refNext.current.focus();
            return;
        }
    }   
    return (
        <div>
           <div style={otpCard}> 
            <div style={innerOTPCard}>
                <div style={{fontSize:"20px", padding:"10px" }}>Login via OTP</div>
                <div style={{display:"flex",position:"relative", left:"9vh", top:"2vh" }}>
                    <input maxLength="1" ref={refOne} onChange={()=>{moveAhead(refOne,refTwo)}} style={numberStyle} type="text" inputMode="numeric" pattern="[0-9]*" />
                    <input maxLength="1" ref={refTwo} onChange={()=>{moveAhead(refTwo,refThree)}} style={numberStyle} type="text" inputMode="numeric" pattern="[0-9]*" />
                    <input maxLength="1" ref={refThree} onChange={()=>{moveAhead(refThree,refFour)}} style={numberStyle} type="text" inputMode="numeric" pattern="[0-9]*" />
                    <input maxLength="1" ref={refFour}  style={numberStyle} type="text" inputMode="numeric" pattern="[0-9]*" />
                </div>
                <button style={{marginTop:"25px", width:"70px",height:"24px",color:"white",fontSize:"12px", borderRadius:"5px",paddingTop:"1px", padding:"5px",backgroundColor:"black" , border:"1px solid white"}} onClick={login}>login</button>
            </div>
        </div>
        </div>
    )
}

export default PutOTP;