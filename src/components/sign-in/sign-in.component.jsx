
import { signInwithGooglePopup } from "../utills/firebase/firebase.utills";
const SignIn = () => {
    const logGoogleUser = async() => {
        const response = await signInwithGooglePopup();
        console.log(response);
    }
    return(
        <div>
           <h1>sign in page</h1>
           <button onClick={logGoogleUser}>sign in with gmail</button>
        </div>
    )
}


export default SignIn;