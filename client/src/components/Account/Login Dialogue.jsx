import { Dialog,Box, Typography, ListItem,List,styled } from "@mui/material";
import { qrCodeImage } from "../../Constants/data";
import {GoogleLogin} from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../Service/Api";


const Component=styled(Box)`
display:flex;
`
const Container=styled(Box)`
padding:56px 0 56px 56px;

`

const Title=styled(Typography)`
font-size:25px;
color:#525252;
font-weight:300;
font-family:inherit;
margin-bottom:25px;
`

const StyledList=styled(List)`
& > li {
padding:0;
margin-top:15px;
font-size:18px;
line-height:28px;
color:#4a4a4a
}
`

const QRCode=styled('img')({
    height:264,
    width:264,
    margin:'50px 0 0 50px'
})

const dialogstyle={
    height:'96%',
    marginTop:'12%',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden',
}
const LoginDialogue=()=>{
    
    const {setAccount}=useContext(AccountContext);
    const onLoginSucess=async(res)=>{
        const decoded=jwtDecode(res.credential);
        setAccount(decoded);
        await addUser(decoded);

    }

    const onLoginError=(res)=>{

    }

    return(
        <Dialog open={true} PaperProps={{sx: dialogstyle}} hideBackdrop={true}>
             <Component>
                <Container>
                     <Title>To use WhatsApp on your computer:</Title>
                     <StyledList>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu Setting and select Whatsapp Web</ListItem>
                        <ListItem>3. Point your phone at this screen to scan the QR code</ListItem>
                     </StyledList>
                </Container>
                <Box style={{position:"relative"}}>
                    <QRCode src={qrCodeImage} alt="QR code"/>
                    <Box style={{position:"absolute",top:"50%",transform:"translateX(40%)"}}>
                        <GoogleLogin onSuccess={onLoginSucess} onError={onLoginError}/>
                    </Box>
                </Box>
             </Component>
        </Dialog>
    )
}
export default LoginDialogue;