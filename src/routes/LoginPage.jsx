import {ClerkProvider, SignIn} from "@clerk/clerk-react";


const LoginPage = () => {
    return(

            <header className="flex items-center justify-center h-[calc(100vh-80px)]">
                <SignIn signUpUrl="/Register"/>
            </header>


    )
}

export default LoginPage;