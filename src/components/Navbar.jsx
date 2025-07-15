import {useState} from "react";
import IKImage from "./IKImage.jsx";
import {Link} from "react-router-dom";
import {ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
}

const Navbar = () =>{
    const[open, setOpen] = useState(false);
    return (
        <div className='w-full h-16 md:h-20 flex items-center justify-between'>
           {/**Logo */}
           <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
            <IKImage src="/logo.png" alt="logo" w={32} h={32}/>
            <span>RyuuBlog.</span>
           </Link>
           {/**Mobile Menu*/}
           <div className="md:hidden">
               <div className="cursor-pointer text-3xl" onClick={() => setOpen(!open)}>
                   {open ? "X" : "☰"}
               </div>

               <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}>
                   Menu
                   <Link to="/">Home</Link>
                   <Link to="/">Trending</Link>
                   <Link to="/">Most Popular</Link>
                   <Link to="/">About</Link>
               </div>

           </div>
           {/**Desktop Menu */}
           <div className="hidden md:flex items-center gap-8 xl:gab-12 font-medium">
               <Link to="/">Home</Link>
               <Link to="/">Trending</Link>
               <Link to="/">Most Popular</Link>
               <Link to="/">About</Link>


                   <SignedOut>
                       <Link to="/login"><button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login 👋</button></Link>
                   </SignedOut>
                   <SignedIn>
                       <UserButton />
                   </SignedIn>

           </div>
           {/**Logo */}
        </div>
    )
}

export default Navbar;