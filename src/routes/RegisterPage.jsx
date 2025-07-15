import {SignIn, SignUp} from "@clerk/clerk-react";

const RegisterPage = () => {
    return(
        <div className="">
            <header className="flex items-center justify-center h-[calc(100vh-80px)]">
                <SignUp signInUrl="/login"/>
            </header>
        </div>
    )
}

export default RegisterPage;