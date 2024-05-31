import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Padding from './Space.jsx';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
function Signup(){
    return <div>
        <center>
            <div style={{
                paddingTop:150 
            }}>
                <Typography
                    variant={"h6"}>Welcome to NaaZera, Sign-Up below!!</Typography>
                </div>
           <Padding/>
           <Card variant="outlined" style={{
            width:400,
            padding:20
           }}>     
       <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
        <br/>
        <Padding/>
       <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" />
        <br/>
        <Padding/>
        <Button variant="outlined">SignUp from here</Button>
        <br/>
        </Card>
        </center>
    </div>
}

export default Signup;