import React, {useState} from 'react'
import axios from 'axios';
function Signup2(){
    const [username,setUsername] = useState("")
    const handlesignup = async(e)=>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:5000/api/signup2",{username})
            alert("User Signup succressfully")
            setUsername("")
        }
        catch(error){
            alert("an error occured")
        }
    }
    return(
        <div>
            <h1>Signup</h1>
            <form onSubmit={handlesignup} method='post'>
                Username:<input type='text' placeholder="Usename" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <button type='submit'>signup</button>
            </form>
        </div>
    )
}
export default Signup2