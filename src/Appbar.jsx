import { Typography } from "@mui/material";
import Button from '@mui/material/Button';

function Appbar(){
    return <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4
    }}>
        <div>
        <Typography variant={"h6"}>NaaZera</Typography>
        </div>
        <div style={{display:"flex"}}>
        <div style={{marginRight:10}}>
        <Button variant={"contained"}
        onClick={()=>{
            window.location= '\signup'
        }}>Signup</Button>
        </div>
        <div>
        <Button variant="contained"
        onClick={()=>{
            window.location= '\login'
        }}
        >Signin</Button>
        </div>
        </div>
    </div>
}


export default Appbar