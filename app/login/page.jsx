'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAccounts } from '../context/AccountContext';
import { useRouter } from 'next/navigation';

export default function Page() {
   const router = useRouter();
   const {accounts} = useAccounts()

   function handleSubmit (event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const usernameData = formData.get("usernameInput");
      const passwordData = formData.get("passwordInput");
      for (let i = 0; i < accounts.length; i++) {
         if (accounts[i].username == usernameData && accounts[i].password == passwordData) {
            router.push("/mainMenu");
            return
         } 
      }

      alert("not valid accounts credentials, try again!")
   }

	return (
		<>
			<Header />
			<main className="flex flex-1 min-h-screen justify-center items-start mt-[66px]">
				<div className="bg-white mt-10 rounded-2xl shadow-md">
					<div className="flex flex-col gap-12 py-10 px-6 lg:px-20 items-center">
						<h1 className="lg:text-4xl font-bold">Login</h1>
						<form onSubmit={handleSubmit} className="flex flex-col gap-20">
							<div className="flex flex-col gap-5">
								<div className="flex flex-col gap-3">
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
								<div className="flex flex-col gap-3">
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
                        <a onClick={() => router.push('/signUp')} className='lg:text-sm text-gray-600 underline transition duration-200 hover:text-pri-5 cursor-pointer'>dont have an account?</a>
							</div>
							<div className="flex flex-row gap-16 items-center">
								<button type="submit" className="bg-pri-2 text-white lg:text-xl font-semibold px-5 py-1 rounded-lg transition duration-200 hover:text-white hover:bg-pri-5">
									Login
								</button>
								<a
									href="#"
									className="lg:text-sm text-gray-600 underline transition duration-200 hover:text-pri-5"
								>
									Forget your account?
								</a>
							</div>
						</form>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}