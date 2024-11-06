import Link from "next/link";
type Job = {
  id: number,
  title: string,
  company: string,
  location: string,
  setting: string,
  type: string,
  salary: string,
  schedule: string,
  photo: string,
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Jr Frontend Developer",
    company: "GOOGLE",
    location: "Austin, TX",
    setting: "Remote",
    type: "Development",
    salary: "$200,000 USD",
    schedule: "Full Time",
    photo: "/photos/google.png"
  },
  {
    id: 2,
    title: "Next.JS Developer",
    company: "JAIROSOFT INC.",
    location: "Davao City, PH",
    setting: "On-site",
    type: "Development",
    salary: "$100,000 USD",
    schedule: "Full Time",
    photo: "/photos/jairosoft.png"
  },

  // Add more jobs as needed
];

export default function Jobs() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="w-full h-20 py-5 px-28 flex justify-between">
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


        <main className="flex-grow w-auto flex-col pb-20 flex justify-start items-center gap-10">
          <div className="top-0 flex w-full h-64 justify-center items-center bg-gradient-to-b from-sky-100 to-violet-100">
            <div className="flex flex-col w-80 h-36 justify-center items-center">
              <span className="font-poppins font-bold text-blue-600 text-base">BEST JOBS IN TECH</span>
              <span className="font-poppins font-bold text-black text-2xl text-center">Find your perfect job in the
                tech industry</span>
            </div>
          </div>
          <div className="flex-col gap-9 w-full flex justify-between items-center sticky">
            <div className="flex-col flex justify-between items-center sticky">
              <div className="relative w-96 border-gray-600">
                <input className="w-full h-10 flex flex-row justify-between p-2 items-center  ring-gray-600 shadow-sm rounded focus:ring-2 focus:ring-violet-400 focus:outline-none" type="text" placeholder="Search for jobs" />
                <svg className="absolute right-2 top-1/2 transform -translate-y-1/2" width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.06821 3.12238C7.79387 3.12238 6.54816 3.50027 5.48859 4.20825C4.42902 4.91623 3.60319 5.92251 3.11552 7.09984C2.62785 8.27717 2.50026 9.57267 2.74887 10.8225C2.99748 12.0724 3.61113 13.2204 4.51222 14.1215C5.41331 15.0226 6.56137 15.6363 7.81121 15.8849C9.06106 16.1335 10.3566 16.0059 11.5339 15.5182C12.7112 15.0305 13.7175 14.2047 14.4255 13.1451C15.1335 12.0856 15.5114 10.8399 15.5114 9.56553C15.5112 7.85673 14.8324 6.21796 13.6241 5.00966C12.4158 3.80136 10.777 3.12249 9.06821 3.12238V3.12238Z" stroke="#A7A7A7" stroke-width="1.5" stroke-miterlimit="10" />
                  <path d="M13.8751 14.3741L18.375 18.8739" stroke="#A7A7A7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                </svg>
              </div>
            </div>
          
          <div className="flex flex-col gap-8">
            <span className="font-poppins font-medium text-sm">Featured Jobs</span>
            <div className="grid gap-8 grid-cols-1 ">
              {jobs.map((job) => (
                <Link key={job.id} href={`/jobs/${job.id}`}>
                  <div className="h-40 p-3 shadow-md rounded-md hover:shadow-lg  transition-shadow duration-300 cursor-pointer">
                    <div className="flex flex-row justify-start gap-5">
                      <div className="w-32 h-32 rounded bg-blue-100 flex justify-center items-center">
                        <img src={job.photo} alt="" className="w-24 h-24" />
                      </div>
                      <div className="flex flex-col gap-4 justify-center">
                        <span className="font-poppins font-semibold text-base text-gray-500">{job.company}</span>
                        <span className="font-poppins font-semibold text-xl text-gray-700">{job.title}</span>
                        <div className="flex flex-row gap-3">
                          <div className="w-auto h-7 p-1 shadow rounded flex flex-row items-center">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.49995 1.40479C5.17084 1.40479 3.2812 3.20332 3.2812 5.41846C3.2812 7.96729 6.0937 12.0064 7.12641 13.4016C7.16928 13.4605 7.22546 13.5084 7.29038 13.5414C7.3553 13.5745 7.4271 13.5917 7.49995 13.5917C7.57279 13.5917 7.6446 13.5745 7.70951 13.5414C7.77443 13.5084 7.83061 13.4605 7.87348 13.4016C8.9062 12.007 11.7187 7.96934 11.7187 5.41846C11.7187 3.20332 9.82905 1.40479 7.49995 1.40479Z" stroke="#416AFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M7.49997 7.03149C8.27662 7.03149 8.90622 6.40189 8.90622 5.62524C8.90622 4.84859 8.27662 4.21899 7.49997 4.21899C6.72332 4.21899 6.09372 4.84859 6.09372 5.62524C6.09372 6.40189 6.72332 7.03149 7.49997 7.03149Z" stroke="#416AFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span className="font-poppins font-normal text-xs">{job.location}</span>
                          </div>
                          <div className="w-auto h-7 p-1 shadow rounded flex flex-row items-center">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.49995 1.40479C5.17084 1.40479 3.2812 3.20332 3.2812 5.41846C3.2812 7.96729 6.0937 12.0064 7.12641 13.4016C7.16928 13.4605 7.22546 13.5084 7.29038 13.5414C7.3553 13.5745 7.4271 13.5917 7.49995 13.5917C7.57279 13.5917 7.6446 13.5745 7.70951 13.5414C7.77443 13.5084 7.83061 13.4605 7.87348 13.4016C8.9062 12.007 11.7187 7.96934 11.7187 5.41846C11.7187 3.20332 9.82905 1.40479 7.49995 1.40479Z" stroke="#416AFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M7.49997 7.03149C8.27662 7.03149 8.90622 6.40189 8.90622 5.62524C8.90622 4.84859 8.27662 4.21899 7.49997 4.21899C6.72332 4.21899 6.09372 4.84859 6.09372 5.62524C6.09372 6.40189 6.72332 7.03149 7.49997 7.03149Z" stroke="#416AFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span className="font-poppins font-normal text-xs">{job.setting}</span>
                          </div>
                          <div className="w-auto h-7 p-1 shadow rounded flex flex-row items-center">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.68751 11.3966C4.53851 11.3968 4.39457 11.3426 4.28262 11.2443L0.532624 7.96302C0.46667 7.90527 0.413817 7.8341 0.377606 7.75427C0.341395 7.67444 0.322662 7.58779 0.322662 7.50013C0.322662 7.41246 0.341395 7.32582 0.377606 7.24598C0.413817 7.16615 0.46667 7.09498 0.532624 7.03723L4.28262 3.75598C4.40543 3.64853 4.56589 3.59425 4.72871 3.6051C4.89154 3.61595 5.04338 3.69104 5.15084 3.81385C5.2583 3.93665 5.31257 4.09711 5.30172 4.25994C5.29087 4.42276 5.21578 4.5746 5.09298 4.68206L1.87178 7.50013L5.09268 10.3182C5.18695 10.4006 5.25383 10.5098 5.28438 10.6313C5.31494 10.7527 5.30771 10.8805 5.26367 10.9978C5.21963 11.115 5.14088 11.216 5.03792 11.2872C4.93497 11.3585 4.81272 11.3967 4.68751 11.3966ZM10.3125 11.3966C10.1873 11.3967 10.065 11.3586 9.96198 11.2874C9.85898 11.2161 9.78018 11.1151 9.7361 10.9979C9.69202 10.8807 9.68477 10.7528 9.71532 10.6313C9.74586 10.5099 9.81275 10.4006 9.90704 10.3182L13.1282 7.50013L9.90733 4.68206C9.78452 4.5746 9.70944 4.42276 9.69859 4.25994C9.68774 4.09711 9.74201 3.93665 9.84947 3.81385C9.95693 3.69104 10.1088 3.61595 10.2716 3.6051C10.4344 3.59425 10.5949 3.64853 10.7177 3.75598L14.4677 7.03723C14.5336 7.09498 14.5865 7.16615 14.6227 7.24598C14.6589 7.32582 14.6776 7.41246 14.6776 7.50013C14.6776 7.58779 14.6589 7.67444 14.6227 7.75427C14.5865 7.8341 14.5336 7.90527 14.4677 7.96302L10.7177 11.2443C10.6057 11.3427 10.4616 11.3969 10.3125 11.3966ZM6.09376 12.8029C5.99795 12.8028 5.90347 12.7804 5.81784 12.7375C5.73222 12.6945 5.65782 12.6321 5.60057 12.5552C5.54332 12.4784 5.5048 12.3893 5.48809 12.2949C5.47138 12.2006 5.47693 12.1037 5.5043 12.0118L8.3168 2.63684C8.33799 2.55729 8.37492 2.4828 8.42543 2.41778C8.47593 2.35276 8.53896 2.29853 8.6108 2.25832C8.68264 2.21811 8.76182 2.19272 8.84364 2.18367C8.92547 2.17461 9.00828 2.18207 9.08718 2.2056C9.16607 2.22913 9.23944 2.26826 9.30293 2.32066C9.36643 2.37307 9.41876 2.43768 9.45683 2.51068C9.49489 2.58368 9.51793 2.66357 9.52455 2.74563C9.53118 2.82769 9.52127 2.91025 9.49542 2.98841L6.68292 12.3634C6.64508 12.4903 6.56732 12.6016 6.46117 12.6808C6.35503 12.76 6.22617 12.8028 6.09376 12.8029Z" fill="#416AFF" />
                            </svg>
                            <span className="font-poppins font-normal text-xs">{job.type}</span>
                          </div>

                          <div className="w-auto h-7 p-1 shadow rounded flex flex-row items-center">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.50006 1.8739C4.39459 1.8739 1.87506 4.39343 1.87506 7.4989C1.87506 10.6044 4.39459 13.1239 7.50006 13.1239C10.6055 13.1239 13.1251 10.6044 13.1251 7.4989C13.1251 4.39343 10.6055 1.8739 7.50006 1.8739Z" stroke="#416AFF" stroke-width="1.5" stroke-miterlimit="10" />
                              <path d="M7.50002 3.75V7.96875H10.3125" stroke="#416AFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span className="font-poppins font-normal text-xs">{job.salary}</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </Link>
              ))}
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
