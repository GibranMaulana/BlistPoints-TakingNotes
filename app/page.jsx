'use client';

import { useRouter } from 'next/navigation';
import Footer from './components/Footer';
import Header from './components/Header';
import Image from 'next/image';

export default function Page() {
	const router = useRouter();

	return (
		<>
			<Header />
			<main className="flex flex-1 min-h-screen mx-4">
				<div className="flex lg:flex-row flex-col items-center">
					<div className="basis-1/2 flex flex-col items-start gap-10 px-12">
						<h1 className="lg:text-4xl text-2xl">
							Welcome to <span className="font-bold">BlistPoints</span>
						</h1>

						<p className="">
							Make it easier to take notes using Blistpoints, a
							streamlined and efficient tool designed to help you
							organize your thoughts, ideas, and tasks. With Blistpoints,
							you can quickly jot down key points, categorize your
							information, and manage your notes in a clean,
							user-friendly interface!
						</p>

						<div className="flex flex-row items-center gap-14">
							<button onClick={() => router.push("/signUp")} className="bg-pri-2 lg:text-md text-white font-semibold px-4 py-2 rounded-2xl transition duration-200 hover:bg-pri-1">
								get started
							</button>

							<button
								onClick={() => router.push("/login")}
								className="bg-gray-300 lg:text-md font-semibold px-6 py-2 rounded-2xl transition duration-200 hover:bg-pri-5 hover:text-white"
							>
								Login
							</button>
						</div>
					</div>

					<div className="basis-1/2 flex items-center justify-center">
						<Image
							src="/taking-note.png"
							width={500}
							height={500}
							alt="taking-note-image"
						/>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}
