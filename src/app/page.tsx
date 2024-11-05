import Link from "next/link";

export default function Home() {
  return (<>
    <div className="flex flex-col min-h-screen">
      <header className="py-5 px-28 flex justify-between">
        <div className="flex flex-row font-poppins text-2xl items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.2499 5.99918H3.74994C2.5073 5.99918 1.49994 7.00654 1.49994 8.24918V18.7492C1.49994 19.9918 2.5073 20.9992 3.74994 20.9992H20.2499C21.4926 20.9992 22.4999 19.9918 22.4999 18.7492V8.24918C22.4999 7.00654 21.4926 5.99918 20.2499 5.99918Z" stroke="#9F8AF9" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M14.9999 11.2474V12.3724C14.9999 12.4718 14.9604 12.5672 14.8901 12.6375C14.8198 12.7079 14.7244 12.7474 14.6249 12.7474H9.37494C9.27548 12.7474 9.1801 12.7079 9.10977 12.6375C9.03945 12.5672 8.99994 12.4718 8.99994 12.3724V11.2474M6.74994 5.99738V4.49738C6.74994 4.09955 6.90797 3.71802 7.18928 3.43672C7.47058 3.15541 7.85211 2.99738 8.24994 2.99738H15.7499C16.1478 2.99738 16.5293 3.15541 16.8106 3.43672C17.0919 3.71802 17.2499 4.09955 17.2499 4.49738V5.99738H6.74994ZM22.4999 11.2474H1.49994H22.4999Z" stroke="#9F8AF9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          NextJobs
        </div>

        <div className="flex flex-row gap-4">
          <Link href={"/login"}>

            <div className="flex w-26 h-10 pl-2 pr-5 items-center gap-1 border border-gray-300 bg-gradient-to-b from-white to-gray-200 shadow-md rounded-md cursor-pointer hover:bg-gray-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.1818 10.5H14.7273V8C14.7273 7.20435 14.4399 6.44129 13.9285 5.87868C13.417 5.31607 12.7233 5 12 5C11.2767 5 10.583 5.31607 10.0715 5.87868C9.56006 6.44129 9.27273 7.20435 9.27273 8V10.5H8.81818C8.33613 10.5006 7.87398 10.7115 7.53311 11.0864C7.19225 11.4614 7.00053 11.9697 7 12.5V18C7.00053 18.5303 7.19225 19.0386 7.53311 19.4136C7.87398 19.7885 8.33613 19.9994 8.81818 20H15.1818C15.6639 19.9994 16.126 19.7885 16.4669 19.4136C16.8077 19.0386 16.9995 18.5303 17 18V12.5C16.9995 11.9697 16.8077 11.4614 16.4669 11.0864C16.126 10.7115 15.6639 10.5006 15.1818 10.5V10.5ZM13.8182 10.5H10.1818V8C10.1818 7.46957 10.3734 6.96086 10.7144 6.58579C11.0553 6.21071 11.5178 6 12 6C12.4822 6 12.9447 6.21071 13.2856 6.58579C13.6266 6.96086 13.8182 7.46957 13.8182 8V10.5Z" fill="black" />
              </svg>
              Login
            </div>
          </Link>
          <Link href={"/register"}>
            <div className="flex w-25 h-10 pl-2 pr-5 items-center gap-1 border border-gray-300 bg-blue-600 shadow-md rounded-md font-bold text-white cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5305 6.09084C13.8789 5.38739 12.9689 5 11.9644 5C10.9546 5 10.0416 5.38504 9.39302 6.08415C8.73745 6.79095 8.41803 7.75155 8.49303 8.78882C8.64169 10.8352 10.1989 12.5 11.9644 12.5C13.7299 12.5 15.2845 10.8356 15.4355 8.78949C15.5115 7.76159 15.1901 6.803 14.5305 6.09084V6.09084ZM17.8573 19.9999H6.07161C5.91735 20.0019 5.76458 19.9695 5.62442 19.905C5.48425 19.8406 5.36022 19.7457 5.26135 19.6273C5.04372 19.3671 4.956 19.0119 5.02095 18.6526C5.30354 17.085 6.18545 15.7681 7.57161 14.8437C8.80307 14.0231 10.363 13.5714 11.9644 13.5714C13.5659 13.5714 15.1258 14.0234 16.3573 14.8437C17.7434 15.7678 18.6253 17.0846 18.9079 18.6523C18.9729 19.0115 18.8852 19.3668 18.6675 19.6269C18.5687 19.7454 18.4447 19.8404 18.3045 19.9049C18.1643 19.9694 18.0115 20.0019 17.8573 19.9999V19.9999Z" fill="white" />
              </svg>
              Sign Up
            </div>
          </Link>
        </div>
      </header>
      <div className="flex w-full h-64 justify-center items-center bg-gradient-to-b from-sky-100 to-violet-100">
        <div className="flex flex-col w-80 h-36 justify-center items-center">
          <span className="font-poppins font-bold text-blue-600 text-base">BEST JOBS IN TECH</span>
          <span className="font-poppins font-bold text-black text-2xl">Job Board for Developers,
            designers, and marketers</span>
        </div>
      </div>

      <main className="flex-grow flex-col px-64 py-20 flex justify-between items-center gap-10">
        <div className="flex flex-col gap-28 w-full flex justify-between items-center">
          <div className="relative w-96 border-gray-600">
            <input className="w-full h-10 flex flex-row justify-between p-2 items-center  ring-gray-600 shadow-sm rounded focus:ring-2 focus:ring-violet-400 focus:outline-none" type="text" placeholder="Search for jobs" />
            <svg className="absolute right-2 top-1/2 transform -translate-y-1/2" width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.06821 3.12238C7.79387 3.12238 6.54816 3.50027 5.48859 4.20825C4.42902 4.91623 3.60319 5.92251 3.11552 7.09984C2.62785 8.27717 2.50026 9.57267 2.74887 10.8225C2.99748 12.0724 3.61113 13.2204 4.51222 14.1215C5.41331 15.0226 6.56137 15.6363 7.81121 15.8849C9.06106 16.1335 10.3566 16.0059 11.5339 15.5182C12.7112 15.0305 13.7175 14.2047 14.4255 13.1451C15.1335 12.0856 15.5114 10.8399 15.5114 9.56553C15.5112 7.85673 14.8324 6.21796 13.6241 5.00966C12.4158 3.80136 10.777 3.12249 9.06821 3.12238V3.12238Z" stroke="#A7A7A7" stroke-width="1.5" stroke-miterlimit="10" />
              <path d="M13.8751 14.3741L18.375 18.8739" stroke="#A7A7A7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
            </svg>
          </div>
        </div>
        <div className="flex flex-row gap-8 ">
          <div className="w-96 h-auto p-10 bg-gradient-to-b from-blue-500 to-violet-400 rounded-lg cursor-pointer flex flex-col gap-3">
            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width="30" height="30" rx="5" fill="white" />
              <path d="M18.8906 8.14036C18.8905 7.4091 18.6844 6.69265 18.2958 6.07317C17.9073 5.45369 17.352 4.95626 16.6936 4.63793C16.0353 4.31959 15.3006 4.19323 14.5737 4.27333C13.8469 4.35344 13.1573 4.63677 12.5841 5.09084C12.0109 5.54491 11.5773 6.15133 11.3329 6.84056C11.0886 7.52979 11.0434 8.27393 11.2027 8.98765C11.3619 9.70137 11.719 10.3558 12.2331 10.8758C12.7472 11.3958 13.3975 11.7605 14.1093 11.9279V25.2497L14.9999 26.7497L15.8906 25.2497V11.9279C16.7432 11.725 17.5027 11.241 18.0469 10.554C18.5911 9.86697 18.8883 9.0168 18.8906 8.14036V8.14036ZM16.1249 7.85911C15.9302 7.85911 15.7399 7.80138 15.5781 7.69321C15.4162 7.58505 15.29 7.43131 15.2155 7.25144C15.141 7.07157 15.1215 6.87364 15.1595 6.68269C15.1975 6.49174 15.2912 6.31634 15.4289 6.17867C15.5665 6.04101 15.7419 5.94725 15.9329 5.90927C16.1238 5.87129 16.3218 5.89078 16.5016 5.96529C16.6815 6.03979 16.8353 6.16596 16.9434 6.32784C17.0516 6.48972 17.1093 6.68004 17.1093 6.87473C17.1093 7.13581 17.0056 7.38619 16.821 7.57079C16.6364 7.7554 16.386 7.85911 16.1249 7.85911V7.85911Z" fill="#416AFF" />
            </svg>
            <span className="font-poppins font-medium text-base text-white">Post a featured job</span>
            <span className="font-poppins font-normal text-xs text-white">Attract top talent by showcasing your job at the top of search results. Featured jobs receive higher visibility, targeted promotion, and priority placement, connecting you faster with the right candidates.</span>
            <div className="w-auto h-9 rounded-md bg-white flex justify-center items-center cursor-pointer hover:bg-gray-100 font-poppins text-xs text-gray-600">Post a featured job</div>

          </div>
          <div className="w-96 h-auto p-10 bg-gradient-to-b from-white to-gray-200 rounded-lg cursor-pointer cursor-pointer flex flex-col gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.4999 2.24557H4.49992C3.70427 2.24557 2.94121 2.56165 2.3786 3.12425C1.81599 3.68686 1.49992 4.44993 1.49992 5.24558V18.7456C1.49992 19.5412 1.81599 20.3043 2.3786 20.8669C2.94121 21.4295 3.70427 21.7456 4.49992 21.7456H19.4999C20.2956 21.7456 21.0586 21.4295 21.6212 20.8669C22.1838 20.3043 22.4999 19.5412 22.4999 18.7456V5.24558C22.4999 4.44993 22.1838 3.68686 21.6212 3.12425C21.0586 2.56165 20.2956 2.24557 19.4999 2.24557ZM20.6249 6.74558H3.37492C3.27546 6.74558 3.18008 6.70607 3.10975 6.63574C3.03943 6.56541 2.99992 6.47003 2.99992 6.37058V5.24558C3.00103 4.84809 3.15942 4.46721 3.44049 4.18614C3.72155 3.90508 4.10243 3.74669 4.49992 3.74558H19.4999C19.8974 3.74669 20.2783 3.90508 20.5593 4.18614C20.8404 4.46721 20.9988 4.84809 20.9999 5.24558V6.37058C20.9999 6.47003 20.9604 6.56541 20.8901 6.63574C20.8198 6.70607 20.7244 6.74558 20.6249 6.74558Z" fill="#416AFF" />
            </svg>

            <span className="font-poppins font-medium text-base text-black">Advertise your brand</span>
            <span className="font-poppins font-normal text-xs text-black">Stand out as an employer of choice by showcasing your company story, values, and culture. Attract more candidates by making a lasting impression and giving job seekers a glimpse into why your team is the best to join.</span>
            <div className="w-auto h-9 rounded-md bg-white flex justify-center items-center cursor-pointer hover:bg-gray-100 font-poppins text-xs text-gray-600">Advertise your brand</div>

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
  </>);
}
