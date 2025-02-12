import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {

   const router = useRouter();
   return (
      <header className="bg-pri-1 shadow-lg fixed w-[100%]">
         <a onClick={() => router.push('/')} className="cursor-pointer">
            <div className="flex flex-row m-4 items-center gap-4">
               <Image src="/bamLogo.png" width={32} height={32} alt="logo-header" />

               <h1 className="text-white font-bold text-lg">BlistPoints</h1>
            </div>
         </a>
      </header>
   );
}

