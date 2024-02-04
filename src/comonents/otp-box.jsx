import { useNavigate } from "react-router-dom";

function OTP(){
    const navigate=useNavigate();

    function getOTP(){
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
    return (
        <div style={otpCard}> 
            <div style={{border:"3px solid white", margin:"15px",
                width:"220px", height:"140px",transform:"translate(0%,9%)",
                padding:"10px",borderRadius:"15px", }}>
                <div style={{fontSize:"20px", padding:"10px" }}>Login via OTP</div>
                <input maxLength="10" style={{ color:"white",fontSize:"10px", padding:"15x",borderRadius:"5px" ,backgroundColor:"black", border:"1px solid white", marginBottom:"12px" }} type="text" placeholder="Enter your mobile number"></input><br/>
                <button style={{ color:"white",fontSize:"8px", borderRadius:"5px", padding:"10px",backgroundColor:"black" , border:"1px solid white"}} onClick={getOTP}>Get OTP</button>
            </div>
        </div>
    )
}

export default OTP;