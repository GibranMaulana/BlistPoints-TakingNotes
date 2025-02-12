"use client"
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAccounts } from "../context/AccountContext";
import { useRouter } from "next/navigation";

export default function page() {

   const { accounts ,setAccounts } = useAccounts();
   const router = useRouter();

   function handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const emailData = formData.get("emailInput");
      const usernameData = formData.get("usernameInput");
      const passwordData = formData.get("passwordInput");
      const confirmPasswordData = formData.get("confirmPasswordInput");

      if (!(usernameData.length < 9 && passwordData.length < 14)) {
         alert("username or password not valid, try again!");
         return
      }

      if (!(confirmPasswordData === passwordData)) {
         alert("password is not the same, try again!");
         return
      }

      for (let i = 0; i < accounts.length; i++) {
         
         if (emailData === accounts[i].email) {
            alert("Email already used");
            return;
         }

         if (usernameData === accounts[i].username) {
            alert("Username already used");
            return
         }
      }
      
      setAccounts(prev => [...prev, {
         email: emailData,
         username: usernameData,
         password: passwordData
      }])

      alert("creating account succes");
      router.push("/login")
   }

   return (
      <>
         <Header />
			<main className="flex flex-1 min-h-screen justify-center items-start mt-[66px]">
				<div className="bg-white mt-10 rounded-2xl shadow-md">
					<div className="flex flex-col gap-12 py-10 px-6 lg:px-20 items-center">
						<h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">
							Sign Up
						</h1>
						<form onSubmit={handleSubmit} className="flex flex-col gap-20">
							<div className="flex flex-col gap-5">
								<div className="flex flex-col gap-1">
									<label htmlFor="emailInput" className="lg-text-lg">
										Email:
									</label>
									<input
										type="email"
										className="border-[1px] border-gray-300 outline-none rounded-lg px-2 py-1 transition duration-200 hover:border-pri-4 focus:border-black"
										placeholder="Enter your Email"
										name="emailInput"
										required
									/>
								</div>
								<div className="flex flex-col gap-1">
									<label
										htmlFor="usernameInput"
										className="lg:text-lg"
									>
										Username:
									</label>
									<input
										type="text"
										className="border-[1px] border-gray-300 outline-none rounded-lg px-2 py-1 transition duration-200 hover:border-pri-4 focus:border-black"
										name="usernameInput"
										placeholder="Enter your username"
										required
									/>
								</div>
								<div className="flex flex-row items-center gap-12">
									<div className="flex flex-col gap-1">
										<label
											htmlFor="passwordInput"
											className="lg:text-lg"
										>
											password:
										</label>
										<input
											type="password"
											className="border-[1px] border-gray-300 outline-none rounded-lg px-2 py-1 transition duration-200 hover:border-pri-4 focus:border-black"
											name="passwordInput"
											placeholder="Enter your password"
											required
										/>
									</div>
									<div className="flex flex-col gap-1">
										<label
											htmlFor="confirmPasswordInput"
											className="lg:text-lg"
										>
											Confirm password:
										</label>
										<input
											type="password"
											className="border-[1px] border-gray-300 outline-none rounded-lg px-2 py-1 transition duration-200 hover:border-pri-4 focus:border-black"
											name="confirmPasswordInput"
											placeholder="type your password to confirm"
											required
										/>
									</div>
								</div>
							</div>
							<div className="flex flex-row justify-between items-center">
                        <button className="bg-pri-2 text-white lg:text-xl font-semibold px-5 py-1 rounded-lg transition duration-200 hover:text-white hover:bg-pri-5">
                           Sign Up
                        </button>
                        <a onClick={() => router.push("/login")} className="text-gray-600 underline lg:text-sm cursor-pointer">already have an account?</a>
							</div>
						</form>
					</div>
				</div>
			</main>
			<Footer />
      </>
   )
}