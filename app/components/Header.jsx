import Image from "next/image";
import { useCurrentUser } from "../context/CurrentUserContext";
import { CgProfile } from "react-icons/cg"
import { useRouter } from "next/navigation"

export default function Header() {

   const router = useRouter();

   const { currentUser } = useCurrentUser();

   return (
      <header className="bg-pri-1 shadow-lg fixed w-[100%]">
         <div className="flex flex-row items-center justify-between mr-4">
            <a onClick={() => router.push('/')} className="cursor-pointer">
               <div className="flex flex-row m-4 items-center gap-4">
                  <Image src="/bamLogo.png" width={50} height={50} alt="logo-header" />

                  <h1 className="text-white font-bold text-2xl">BlistPoints</h1>
               </div>
            </a>
            {currentUser === false?
               <nav className="flex flex-row items-center gap-7">
                  <button 
                     className="text-white lg:text-xl font-semibold transition duration-200 hover:text-pri-5"
                     onClick={() => router.push("/login")}
                  >
                     <h1>login</h1>
                  </button>
                  <button 
                     className="text-white lg:text-xl font-semibold transition duration-200 hover:text-pri-5"
                     onClick={() => router.push("/signUp")}  
                  >
                     <h1>sign up</h1>
                  </button>
                  
               </nav> 
                  :

               <div className="flex flex-row items-center gap-5">
                  <h1 className="text-white text-xl font-semibold">{currentUser}</h1>
                  <CgProfile 
                     alt="profile-icon"
                     color="white"
                     size="50px"
                  />
                  
               </div>
            }
         </div>
      </header>
   );
}

