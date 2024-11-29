import {Drawer, Typography,Box,styled} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./Profile";

const Header=styled(Box)`
background:#008069;
height:111px;
color:#FFFFFF;
display:flex;
& > svg, & >p{
 margin-top:auto;
 padding:15px;
 font-weight:600;
}
`;

const Component=styled(Box)`
background:#ededed;
height: 85%;
`

const Text=styled(Typography)`
font-size:18px;
`

const drawerstyle={
    left:20,
    top:13,
    height:'96%',
    width:'33.11%',
    boxShadow:'none',
}

const InfoDrawer=({open,setopen})=>{
    const handleClose=()=>{
        setopen(false);
    }
    return(
        <Drawer open={open} onClose={handleClose} PaperProps={{sx:drawerstyle}} style={{zIndex: 1500}}>
            <Header>
                <ArrowBack onClick={()=>setopen(false)}/>
                <Text>Profile</Text>
            </Header>
            <Component>
                <Profile/>
            </Component>
        </Drawer>
    )
}
export default InfoDrawer;