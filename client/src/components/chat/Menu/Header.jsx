import { useContext,useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import {Box,styled} from '@mui/material';
import {Chat as MessageIcon} from '@mui/icons-material';
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../Drawer/InfoDrawer";


const Component =styled(Box)`
height:44px;
background:#ededed;
padding: 8px 16px;
display:flex;
align-items:center;
`

const Wrapper=styled(Box)`
margin-left:auto;

& > *{
margin-left:2px;
padding:8px;
color:#000;
};
& :first-child{
font-size:22px;
margin-right:8px;
margin-top:3px;
}
`

const Image=styled('Img')({
    height:40,
    width:40,
    borderRadius:'50%',
})
const Header=()=>{
    const[openDrawer,setopenDrawer]=useState(false);
    
    const {account}=useContext(AccountContext);

    const toggleDrawer=()=>{
        setopenDrawer(true);
    }

    return(
        <>
        <Component>
            <Image src={account.picture} alt="dp" onClick={()=>toggleDrawer()}/>
            <Wrapper>
                <MessageIcon/>
                <HeaderMenu setopenDrawer={setopenDrawer}/>
            </Wrapper>
        </Component>
        <InfoDrawer open={openDrawer} setopen={setopenDrawer}/>
        </>
    )
}
export default Header;