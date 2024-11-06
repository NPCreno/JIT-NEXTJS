import Link from "next/link"

export default function Header(){
    return(<>
<header className="w-full bg-white fixed h-20 py-5 px-28 flex justify-between z-50 shadow-lg">
          <div className="flex flex-row font-poppins text-2xl items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.2499 5.99918H3.74994C2.5073 5.99918 1.49994 7.00654 1.49994 8.24918V18.7492C1.49994 19.9918 2.5073 20.9992 3.74994 20.9992H20.2499C21.4926 20.9992 22.4999 19.9918 22.4999 18.7492V8.24918C22.4999 7.00654 21.4926 5.99918 20.2499 5.99918Z" stroke="#9F8AF9" stroke-width="1.5" stroke-linejoin="round" />
              <path d="M14.9999 11.2474V12.3724C14.9999 12.4718 14.9604 12.5672 14.8901 12.6375C14.8198 12.7079 14.7244 12.7474 14.6249 12.7474H9.37494C9.27548 12.7474 9.1801 12.7079 9.10977 12.6375C9.03945 12.5672 8.99994 12.4718 8.99994 12.3724V11.2474M6.74994 5.99738V4.49738C6.74994 4.09955 6.90797 3.71802 7.18928 3.43672C7.47058 3.15541 7.85211 2.99738 8.24994 2.99738H15.7499C16.1478 2.99738 16.5293 3.15541 16.8106 3.43672C17.0919 3.71802 17.2499 4.09955 17.2499 4.49738V5.99738H6.74994ZM22.4999 11.2474H1.49994H22.4999Z" stroke="#9F8AF9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            NextJobs
          </div>

          <div className="flex flex-row gap-4">
            <Link href={"/"}>
              <div className="flex w-26 h-10 pl-2 pr-5 items-center gap-1 border font-poppins border-gray-300 bg-gradient-to-b from-white to-gray-200 shadow-md rounded-md cursor-pointer hover:bg-gray-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.49994 11.2493H14.4079L11.4079 8.24933L12.4687 7.18855L17.2795 11.9993L12.4687 16.8101L11.4079 15.7493L14.4079 12.7493H7.49994V19.6868C7.49994 19.836 7.5592 19.9791 7.66469 20.0846C7.77018 20.1901 7.91326 20.2493 8.06244 20.2493H21.9374C22.0866 20.2493 22.2297 20.1901 22.3352 20.0846C22.4407 19.9791 22.4999 19.836 22.4999 19.6868V4.31183C22.4999 4.16264 22.4407 4.01957 22.3352 3.91408C22.2297 3.80859 22.0866 3.74933 21.9374 3.74933H8.06244C7.91326 3.74933 7.77018 3.80859 7.66469 3.91408C7.5592 4.01957 7.49994 4.16264 7.49994 4.31183V11.2493ZM1.49994 11.2493H7.49994V12.7493H1.49994V11.2493Z" fill="black" />
                </svg>
                Logout
              </div>
            </Link>
          </div>
        </header>
    </>)
}