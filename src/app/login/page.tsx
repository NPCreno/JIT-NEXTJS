import Link from "next/link";

export default function Login() {
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
          <div className="w-auto h-auto p-10 flex flex-col gap-4 bg-gradient-to-b from-white to-violet-50 justify-start rounded-lg shadow-2xl">
            <div className="w-14 h-14 flex justify-center items-center rounded-md bg-white">
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.2376 3.94681C11.6416 3.8172 3.80764 11.6512 3.93725 21.2472C4.06522 30.4503 11.5588 37.9438 20.7619 38.0718C30.3595 38.2031 38.1919 30.3691 38.0606 20.7731C37.9343 11.5683 30.4407 4.07478 21.2376 3.94681ZM31.608 30.7915C31.5754 30.8269 31.5353 30.8546 31.4907 30.8727C31.4461 30.8908 31.3981 30.8989 31.35 30.8964C31.302 30.8939 31.2551 30.8809 31.2126 30.8582C31.1701 30.8356 31.1332 30.8038 31.1044 30.7653C30.3706 29.8053 29.4721 28.9834 28.4507 28.338C26.3621 26.9976 23.7158 26.2593 20.9998 26.2593C18.2837 26.2593 15.6374 26.9976 13.5489 28.338C12.5275 28.9831 11.6289 29.8047 10.8951 30.7645C10.8663 30.803 10.8294 30.8347 10.7869 30.8574C10.7444 30.8801 10.6975 30.8931 10.6495 30.8956C10.6014 30.8981 10.5534 30.89 10.5088 30.8719C10.4642 30.8538 10.4241 30.826 10.3915 30.7907C7.98441 28.1923 6.6209 24.7969 6.56225 21.2554C6.42854 13.2729 12.9787 6.59149 20.9645 6.57181C28.9502 6.55212 35.4373 13.0367 35.4373 21.0093C35.44 24.6362 34.0723 28.1303 31.608 30.7915V30.7915Z" fill="url(#paint0_linear_3_82)" />
                <path d="M20.9999 11.8171C19.3823 11.8171 17.9197 12.4233 16.8803 13.525C15.841 14.6266 15.3217 16.15 15.439 17.7849C15.6769 21.0046 18.1715 23.6296 20.9999 23.6296C23.8284 23.6296 26.318 21.0046 26.5608 17.7857C26.6822 16.1664 26.1671 14.657 25.1105 13.5348C24.0671 12.4274 22.6069 11.8171 20.9999 11.8171Z" fill="url(#paint1_linear_3_82)" />
                <defs>
                  <linearGradient id="paint0_linear_3_82" x1="20.999" y1="3.94522" x2="20.999" y2="38.0734" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#416AFF" />
                    <stop offset="1" stop-color="#9F8AF9" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_3_82" x1="21.0005" y1="11.8171" x2="21.0005" y2="23.6296" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#416AFF" />
                    <stop offset="1" stop-color="#9F8AF9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-poppins text-xl font-medium text-black">Welcome Back</span>
              <span className="font-poppins text-xs font-normal text-gray-500">Please fill your email and password to sign in.</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-poppins text-base font-medium text-gray-500">Email</span>
              <input className="w-96 h-10 flex flex-row justify-between p-2 items-center  ring-gray-600 shadow-lg rounded focus:ring-2 focus:ring-violet-400 focus:outline-none" type="text" placeholder="Email address" />
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-poppins text-base font-medium text-gray-500">Password</span>
              <input className="w-96 h-10 flex flex-row justify-between p-2 items-center  ring-gray-600 shadow-lg rounded focus:ring-2 focus:ring-violet-400 focus:outline-none" type="password" placeholder="Enter your password" />
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2 text-gray-600 text-xs font-poppins font-medium">
                <input type="checkbox" className="rounded-md" />
                Remember me
              </div>
              <span className="text-gray-600 text-xs font-poppins font-medium underline cursor-pointer">Forgot Password?</span>
            </div>
            <Link href={"/jobs"}>
              <button className="w-full h-9 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium font-poppins text-xs">Login</button>
            </Link>
            <span className="w-full flex justify-center text-gray-600 text-xs font-poppins font-medium cursor-pointer">Don't have an account?&nbsp;<Link href={"/register"}> <span className="underline">Sign up today</span></Link> </span>
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
