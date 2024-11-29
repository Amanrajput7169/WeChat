
import {AppBar,Toolbar,styled,Box} from '@mui/material'
import LoginDialogue from "./Account/Login Dialogue";
import ChatDialog from './chat/ChatDialog';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';

const Component=styled(Box)`
height:100vh;
background:#DCDCDC;
`
const LoginHeader=styled(AppBar)`
Height:220px;
background:#00bfa5;
box-shadow:none;
`

const Header=styled(AppBar)`
Height:125px;
background:#00A884;
box-shadow:none;
`
const Messenger=()=>{

    const {account}=useContext(AccountContext);
    return(
        <Component>
            {
                account?
                <>
            <Header>
                <Toolbar>

                </Toolbar>
            </Header>
            <ChatDialog/>
            </>
            :
            <>
        <LoginHeader>
        <Toolbar>

        </Toolbar>
        </LoginHeader>
        <LoginDialogue/>
        </>
}
        </Component>
    )
}
export default Messenger;