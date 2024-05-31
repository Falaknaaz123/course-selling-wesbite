import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Padding from './Space.jsx';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

function Signin(){
    return <div>
            <div style={{
                paddingTop:100,
                display:"flex",
    justifyContent:"center"
            }}>
                <Typography
                    variant={"h6"}>Welcome back, Please Sign in from below</Typography>
                </div>
           <Padding/>
           <div style={{
            display:"flex",
            justifyContent:"center"
           }}>
           <Card variant="outlined" style={{
            width:400,
            padding:20
           }}>     
       <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
           <br/>
           <br/>
       <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" />
        <br/>
<br></br>
        <Button variant="outlined">Signin from here</Button>
        <br/>
        
        </Card>
        </div>
            </div>
}

export default Signin;