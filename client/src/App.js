import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider";

function App() {

  const clientId='664269293183-q7eca8p08003lbcvgf8gdkkvf5m5dtab.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
     <Messenger/>
     </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;   //default export can excess only one component from one file
                    //named export can do multiple