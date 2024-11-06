import Link from "next/link";

export default function Register() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="py-5 px-28 flex justify-center">
          <div className="flex flex-row font-poppins text-2xl items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.2499 5.99918H3.74994C2.5073 5.99918 1.49994 7.00654 1.49994 8.24918V18.7492C1.49994 19.9918 2.5073 20.9992 3.74994 20.9992H20.2499C21.4926 20.9992 22.4999 19.9918 22.4999 18.7492V8.24918C22.4999 7.00654 21.4926 5.99918 20.2499 5.99918Z" stroke="#9F8AF9" stroke-width="1.5" stroke-linejoin="round" />
              <path d="M14.9999 11.2474V12.3724C14.9999 12.4718 14.9604 12.5672 14.8901 12.6375C14.8198 12.7079 14.7244 12.7474 14.6249 12.7474H9.37494C9.27548 12.7474 9.1801 12.7079 9.10977 12.6375C9.03945 12.5672 8.99994 12.4718 8.99994 12.3724V11.2474M6.74994 5.99738V4.49738C6.74994 4.09955 6.90797 3.71802 7.18928 3.43672C7.47058 3.15541 7.85211 2.99738 8.24994 2.99738H15.7499C16.1478 2.99738 16.5293 3.15541 16.8106 3.43672C17.0919 3.71802 17.2499 4.09955 17.2499 4.49738V5.99738H6.74994ZM22.4999 11.2474H1.49994H22.4999Z" stroke="#9F8AF9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            NextJobs
          </div>
        </header>


        <main className="flex-grow flex-col px-64 py-20 flex justify-between items-center gap-10 shadow-inner ">
          <div className="flex flex-row gap-10 items-center">
            <div className="w-auto p-10 flex flex-col gap-4 justify-start rounded-lg shadow-2xl">
              <div className="flex flex-col gap-1">
                <span className="font-poppins text-xl font-medium text-black">Create account</span>
                <span className="font-poppins text-xs font-normal text-gray-500">Already have an account?&nbsp;<Link href={"/login"}><span className="underline">Sign in</span></Link></span>
              </div>
              <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-3">
                  <span className="font-poppins text-xs font-medium text-gray-500">Name</span>
                  <input className="w-48 h-10 flex flex-row justify-between p-2 items-center  ring-gray-600 shadow-lg rounded focus:ring-2 focus:ring-violet-400 focus:outline-none" type="text" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-3">
                  <span className="font-poppins text-xs font-medium text-gray-500">Email</span>
                  <input className="w-48 h-10 flex flex-row justify-between p-2 items-center  ring-gray-600 shadow-lg rounded focus:ring-2 focus:ring-violet-400 focus:outline-none" type="text" placeholder="Email address" />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="font-poppins text-xs font-medium text-gray-500">Password</span>
                <input className=" h-10 flex flex-row justify-between p-2 items-center  ring-gray-600 shadow-lg rounded focus:ring-2 focus:ring-violet-400 focus:outline-none" type="password" placeholder="Enter your password" />
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-poppins text-xs font-medium text-gray-500">Confirm your password</span>
                <input className=" h-10 flex flex-row justify-between p-2 items-center  ring-gray-600 shadow-lg rounded focus:ring-2 focus:ring-violet-400 focus:outline-none" type="password" placeholder="Enter your password" />
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-2 text-gray-600 text-xs font-poppins font-medium items-start">
                  <input type="checkbox" className="rounded-md" />
                  <span className="">I have read accepted the NextJobs Terms & Conditions and <br /> Privacy Policy.</span>
                </div>

              </div>
              <Link href={"/jobs"}>
                <button className="w-full h-9 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium font-poppins text-xs">Create Account</button>
              </Link>

            </div>
            <div className="w-auto h-auto p-10 flex flex-col gap-8 justify-center">
              <div className="w-full flex justify-center items-center">
                <div className="w-96 h-40 flex flex-col justify-center items-center gap-3">
                  <span className="font-poppins text-2xl font-medium text-center">
                    Empowering Careers, <br />Transforming Businesses
                  </span>
                  <span className="font-poppins text-sm font-normal text-center">
                    With thousands of jobs posted, successful hires, trusted
                    employers, and high user satisfaction, we're making the
                    right connections happen every day.</span>
                </div>
              </div>
              <div className="grid grid-rows-2 grid-cols-2 gap-8">
                <div className="w-56 h-32 rounded-md shadow-md flex justify-center flex-col col-start-1 row-start-1 py-5 px-8 gap-3">
                  <span className="font-poppins font-bold text-4xl text-center">20,125<span className="text-blue-600">+</span></span>
                  <span className="font-poppins font-medium text-sm text-center">JOB POSTED</span>
                </div>
                <div className="w-56 h-32 rounded-md shadow-md flex justify-center flex-col col-start-2 row-start-1 py-5 px-8 gap-3">
                  <span className="font-poppins font-bold text-4xl text-center">2,516<span className="text-blue-600">+</span></span>
                  <span className="font-poppins font-medium text-sm text-center">SUCCESSFUL HIRES</span>
                </div>
                <div className="w-56 h-32 rounded-md shadow-md flex justify-center flex-col col-start-1 row-start-2 py-5 px-8 gap-3">
                  <span className="font-poppins font-bold text-4xl text-center">613<span className="text-blue-600">+</span></span>
                  <span className="font-poppins font-medium text-sm text-center">ACTIVE EMPLOYERS</span>
                </div>
                <div className="w-56 h-32 rounded-md shadow-md flex justify-center flex-col col-start-2 row-start-2 py-5 px-8 gap-3">
                  <span className="font-poppins font-bold text-4xl text-center">35,516<span className="text-blue-600">+</span></span>
                  <span className="font-poppins font-medium text-sm text-center">USERS SATISFIED</span>
                </div>
              </div>
            </div>
          </div>
        </main>


        <footer className="bg-violet-50 h-16 w-full px-52 py-6 flex flex-row justify-between items-center">
          <div className="flex flex-row font-poppins text-md items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.2499 5.99918H3.74994C2.5073 5.99918 1.49994 7.00654 1.49994 8.24918V18.7492C1.49994 19.9918 2.5073 20.9992 3.74994 20.9992H20.2499C21.4926 20.9992 22.4999 19.9918 22.4999 18.7492V8.24918C22.4999 7.00654 21.4926 5.99918 20.2499 5.99918Z" stroke="#9F8AF9" stroke-width="1.5" stroke-linejoin="round" />
              <path d="M14.9999 11.2474V12.3724C14.9999 12.4718 14.9604 12.5672 14.8901 12.6375C14.8198 12.7079 14.7244 12.7474 14.6249 12.7474H9.37494C9.27548 12.7474 9.1801 12.7079 9.10977 12.6375C9.03945 12.5672 8.99994 12.4718 8.99994 12.3724V11.2474M6.74994 5.99738V4.49738C6.74994 4.09955 6.90797 3.71802 7.18928 3.43672C7.47058 3.15541 7.85211 2.99738 8.24994 2.99738H15.7499C16.1478 2.99738 16.5293 3.15541 16.8106 3.43672C17.0919 3.71802 17.2499 4.09955 17.2499 4.49738V5.99738H6.74994ZM22.4999 11.2474H1.49994H22.4999Z" stroke="#9F8AF9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            NextJobs
          </div>
          <div className="flex flex-row gap-4">
            <div className="font-poppins font-medium text-sm text-gray-600">
              Copyright NextJobs
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
