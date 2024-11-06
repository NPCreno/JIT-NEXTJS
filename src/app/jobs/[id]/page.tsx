"use client";
import Header from '../header/page';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

type Job = {
  id: number,
  title: string,
  company: string,
  location: string,
  setting: string,
  type: string,
  salary: string,
  schedule: string,
  posted: string,
  description: string,
  responsibilities: string[],
  requirements: string[],
  photo: string,
  about: string,
};

const jobData: Job[] = [
  {
    id: 1,
    title: "Jr Frontend Developer",
    company: "GOOGLE",
    location: "Austin, TX",
    setting: "Remote",
    type: "Development",
    salary: "$200,000 USD",
    schedule: "Full Time",
    posted: "November 1, 2024",
    description: "As a Junior Frontend Developer at Google, you’ll work within a dynamic, collaborative team to build user-friendly, innovative web applications. You’ll help create clean, efficient code, contributing to Google’s mission of organizing the world’s information and making it accessible and useful for everyone. This is an excellent opportunity for a junior developer eager to grow their skills and make a tangible impact.",
    responsibilities: [
      "Develop, test, and deploy interactive and responsive user interfaces.",
      "Work closely with senior developers, UX/UI designers, and product managers to understand project goals and user needs.",
      "Debug and optimize frontend code to ensure maximum speed, scalability, and accessibility.",
      "Implement best practices for responsive design, cross-browser compatibility, and web performance.",
      "Stay updated on the latest web development trends, tools, and standards."
    ],
    requirements: [
      "Bachelor’s degree in Computer Science, Web Development, or related field, or equivalent practical experience.",
      "Proficiency in HTML, CSS, and JavaScript; experience with modern JavaScript frameworks (React, Angular, or Vue) is a plus.",
      "Basic understanding of RESTful APIs and asynchronous request handling.",
      "Familiarity with version control systems (Git/GitHub).",
      "An eye for detail with a commitment to creating high-quality user interfaces.",
      "Strong communication skills and ability to work well in a team environment.",
      "Eagerness to learn and adapt in a fast-paced, ever-evolving tech environment."
    ],
    photo: "/photos/google.png",
    about: "an American multinational corporation and technology company focusing on online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, consumer electronics, and artificial intelligence."
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
    posted: "April 3, 2024",
    description: "As a Next.js Developer, you will be a core member of our front-end development team, responsible for building and maintaining high-performance web applications that provide seamless user experiences. This role involves leveraging the powerful features of Next.js and React to create scalable, responsive, and SEO-optimized applications.",
    responsibilities: [
      "Build high-performance, scalable, and responsive web applications using Next.js and React.",
      "Develop reusable components and front-end libraries to be used across the platform.",
      "Work closely with product managers, designers, and backend developers to understand project requirements and deliver high-quality solutions.",
      "Leverage Next.js features like server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR) for optimal SEO and loading times.",
      "Utilize CSS frameworks, Tailwind CSS, or custom styles for responsive and visually appealing interfaces."
    ],
    requirements: [
      "Strong experience with Next.js, React, and JavaScript ES6+.",
      "Proficient in HTML5, CSS3, and JavaScript, with a solid understanding of responsive design principles.",
      "Familiar with RESTful APIs, GraphQL, and handling asynchronous operations.",
      "Experience with testing frameworks such as Jest, Cypress, or React Testing Library.",
      "Knowledge of SEO best practices and experience with web performance tools like Lighthouse, PageSpeed Insights.",
      "Experience working in agile environments and using project management tools like Jira or Trello.",
      "Bachelor’s degree in Computer Science, Engineering, or a related field (or equivalent experience)."
    ],
    photo: "/photos/jairosoft.png",
    about: "Jairosoft Inc. brings together highly skilled Agile teams, including Sitecore-certified architects, project managers, full-stack developers, and software testers focused on end-to-end solutions. We excel in requirements gathering, use case development, and project management using Agile/SCRUM with TFS, currently following the SAFe framework."
  },
  {
    id: 3,
    title: "Product Manager",
    company: "NETFLIX",
    location: "Los Gatos, CA",
    setting: "On-site",
    type: "Development",
    salary: "$500,000 USD",
    schedule: "Full Time",
    posted: "April 2, 2024",
    description: "As a Product Manager at Netflix, you will lead the strategy, development, and execution of new product features that enhance the Netflix viewing experience for millions globally. This role involves close collaboration with cross-functional teams, including engineering, design, data science, and marketing, to innovate, prioritize, and deliver solutions that align with user needs and business goals. You’ll leverage data insights and market research to guide product decisions, continuously refining the Netflix platform to drive user engagement and satisfaction.",
    responsibilities: [
      "Define and execute product roadmaps, aligning with Netflix's strategic goals.",
      "Collaborate with design, engineering, and data teams to develop, test, and launch features.",
      "Analyze user data and feedback to optimize product functionality and improve the user experience.",
      "Lead product initiatives through all stages: ideation, planning, development, and launch.",
    ],
    requirements: [
      "Proven experience in product management, ideally within tech or streaming.",
      "Strong analytical skills and familiarity with data-driven decision-making.",
      "Excellent communication skills to work across departments and present product vision.",
      "Experience with testing frameworks such as Jest, Cypress, or React Testing Library.",
      "Experience with agile methodologies and understanding of user-centered design principles.",
    ],
    photo: "/photos/netflix.png",
    about: "Netflix is a global streaming service offering movies, shows, and original content, transforming media consumption for millions worldwide across various devices."
  },
  {
    id: 4,
    title: "Sr Full-stack Developer",
    company: "LINKEDIN",
    location: "Sunnyvale, CA",
    setting: "On-site",
    type: "Development",
    salary: "$2,00,000 USD",
    schedule: "Full Time",
    posted: "August 15, 2024",
    description: "As a Senior Fullstack Developer at LinkedIn, you’ll design and implement innovative features across LinkedIn’s platform, enhancing the experience for millions of professionals worldwide. In this role, you’ll work on both front-end and back-end development, solving complex challenges, driving performance, and building scalable, user-centered applications. You’ll collaborate with cross-functional teams to develop high-quality, reliable solutions that align with LinkedIn’s mission to connect the world’s professionals.",
    responsibilities: [
      "Design, develop, and maintain scalable front-end and back-end solutions.",
      "Optimize application performance, user experience, and reliability.",
      "Collaborate with cross-functional teams, including product, design, and engineering.",
      "Mentor junior developers, share best practices, and lead code reviews.",
      "Stay updated on industry trends and contribute to LinkedIn’s technical strategy.",
    ],
    requirements: [
      "5+ years of experience in fullstack development with proficiency in JavaScript, React, Node.js, and related technologies.",
      "Strong understanding of front-end and back-end frameworks, databases, and web services.",
      "Experience with cloud platforms (e.g., AWS, Azure) and CI/CD pipelines.",
      "Proven ability to lead projects, solve complex technical challenges, and mentor team members.",
      "Excellent problem-solving, communication, and collaboration skills.",
    ],
    photo: "/photos/linkedin.png",
    about: "LinkedIn is a professional networking platform connecting users globally for job opportunities, career growth, industry insights, and business connections."
  },
];

export default function jobId({ params }: { params: { id: number } }) {

  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    if (params.id) {
      // Fetch or filter the job data based on the `id` parameter
      const jobDetail = jobData.find((job) => job.id === Number(params.id));
      setJob(jobDetail || null);
    }
  }, [params.id]);

  if (!job) {
    return (<><div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
      <svg className="w-16 h-16 animate-spin text-blue-300" viewBox="0 0 64 64" fill="none"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path
          d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
          stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path
          d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
          stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" className="text-violet-200">
        </path>
      </svg>
    </div>
      <p className='font-poppins font-semibold text-xl text-gray-700 text-center'>Loading job details...</p></>);
  }

  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <Header></Header>
        <main className="flex-grow w-auto top-16 flex-col pb-40 flex justify-start items-center gap-10 relative bg-gradient-to-b from-white to-violet-100 inner-">
          <div className="flex flex-col pt-8 justify-start items-start gap-8">
            <Link href={"/jobs"}>
              <div className="flex flex-row font-poppins font-normal text-xs text-gray-500 items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4375 18.7521L4.6875 12.0021L11.4375 5.25208M5.625 12.0021H19.3125" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                See all jobs
              </div>
            </Link>
            <div className="flex flex-row gap-7">
              <div className="flex flex-col bg-white rounded shadow-lg">
                <div className="p-3 bg-gradient-to-b from-white to-blue-100 flex flex-col items-start justify-start gap-5">
                  <div className="flex flex-row gap-5">
                    <div className="w-20 h-20 rounded bg-blue-100 flex justify-center items-center">
                      <img src={job.photo} alt="" className="w-12 h-12" />
                    </div>
                    <div className="flex flex-col gap-4 justify-center">
                      <span className="font-poppins font-semibold text-base text-gray-500">{job.company}</span>
                      <span className="font-poppins font-semibold text-xl text-gray-700">{job.title}</span>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3">
                    <div className="w-auto bg-white h-7 p-1 shadow rounded flex flex-row items-center">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.49995 1.40479C5.17084 1.40479 3.2812 3.20332 3.2812 5.41846C3.2812 7.96729 6.0937 12.0064 7.12641 13.4016C7.16928 13.4605 7.22546 13.5084 7.29038 13.5414C7.3553 13.5745 7.4271 13.5917 7.49995 13.5917C7.57279 13.5917 7.6446 13.5745 7.70951 13.5414C7.77443 13.5084 7.83061 13.4605 7.87348 13.4016C8.9062 12.007 11.7187 7.96934 11.7187 5.41846C11.7187 3.20332 9.82905 1.40479 7.49995 1.40479Z" stroke="#416AFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.49997 7.03149C8.27662 7.03149 8.90622 6.40189 8.90622 5.62524C8.90622 4.84859 8.27662 4.21899 7.49997 4.21899C6.72332 4.21899 6.09372 4.84859 6.09372 5.62524C6.09372 6.40189 6.72332 7.03149 7.49997 7.03149Z" stroke="#416AFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <span className="font-poppins font-normal text-xs">{job.location}</span>
                    </div>
                    <div className="w-auto bg-white h-7 p-1 shadow rounded flex flex-row items-center">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.49995 1.40479C5.17084 1.40479 3.2812 3.20332 3.2812 5.41846C3.2812 7.96729 6.0937 12.0064 7.12641 13.4016C7.16928 13.4605 7.22546 13.5084 7.29038 13.5414C7.3553 13.5745 7.4271 13.5917 7.49995 13.5917C7.57279 13.5917 7.6446 13.5745 7.70951 13.5414C7.77443 13.5084 7.83061 13.4605 7.87348 13.4016C8.9062 12.007 11.7187 7.96934 11.7187 5.41846C11.7187 3.20332 9.82905 1.40479 7.49995 1.40479Z" stroke="#416AFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.49997 7.03149C8.27662 7.03149 8.90622 6.40189 8.90622 5.62524C8.90622 4.84859 8.27662 4.21899 7.49997 4.21899C6.72332 4.21899 6.09372 4.84859 6.09372 5.62524C6.09372 6.40189 6.72332 7.03149 7.49997 7.03149Z" stroke="#416AFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <span className="font-poppins font-normal text-xs">{job.setting}</span>
                    </div>
                    <div className="w-auto bg-white h-7 p-1 shadow rounded flex flex-row items-center">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.68751 11.3966C4.53851 11.3968 4.39457 11.3426 4.28262 11.2443L0.532624 7.96302C0.46667 7.90527 0.413817 7.8341 0.377606 7.75427C0.341395 7.67444 0.322662 7.58779 0.322662 7.50013C0.322662 7.41246 0.341395 7.32582 0.377606 7.24598C0.413817 7.16615 0.46667 7.09498 0.532624 7.03723L4.28262 3.75598C4.40543 3.64853 4.56589 3.59425 4.72871 3.6051C4.89154 3.61595 5.04338 3.69104 5.15084 3.81385C5.2583 3.93665 5.31257 4.09711 5.30172 4.25994C5.29087 4.42276 5.21578 4.5746 5.09298 4.68206L1.87178 7.50013L5.09268 10.3182C5.18695 10.4006 5.25383 10.5098 5.28438 10.6313C5.31494 10.7527 5.30771 10.8805 5.26367 10.9978C5.21963 11.115 5.14088 11.216 5.03792 11.2872C4.93497 11.3585 4.81272 11.3967 4.68751 11.3966ZM10.3125 11.3966C10.1873 11.3967 10.065 11.3586 9.96198 11.2874C9.85898 11.2161 9.78018 11.1151 9.7361 10.9979C9.69202 10.8807 9.68477 10.7528 9.71532 10.6313C9.74586 10.5099 9.81275 10.4006 9.90704 10.3182L13.1282 7.50013L9.90733 4.68206C9.78452 4.5746 9.70944 4.42276 9.69859 4.25994C9.68774 4.09711 9.74201 3.93665 9.84947 3.81385C9.95693 3.69104 10.1088 3.61595 10.2716 3.6051C10.4344 3.59425 10.5949 3.64853 10.7177 3.75598L14.4677 7.03723C14.5336 7.09498 14.5865 7.16615 14.6227 7.24598C14.6589 7.32582 14.6776 7.41246 14.6776 7.50013C14.6776 7.58779 14.6589 7.67444 14.6227 7.75427C14.5865 7.8341 14.5336 7.90527 14.4677 7.96302L10.7177 11.2443C10.6057 11.3427 10.4616 11.3969 10.3125 11.3966ZM6.09376 12.8029C5.99795 12.8028 5.90347 12.7804 5.81784 12.7375C5.73222 12.6945 5.65782 12.6321 5.60057 12.5552C5.54332 12.4784 5.5048 12.3893 5.48809 12.2949C5.47138 12.2006 5.47693 12.1037 5.5043 12.0118L8.3168 2.63684C8.33799 2.55729 8.37492 2.4828 8.42543 2.41778C8.47593 2.35276 8.53896 2.29853 8.6108 2.25832C8.68264 2.21811 8.76182 2.19272 8.84364 2.18367C8.92547 2.17461 9.00828 2.18207 9.08718 2.2056C9.16607 2.22913 9.23944 2.26826 9.30293 2.32066C9.36643 2.37307 9.41876 2.43768 9.45683 2.51068C9.49489 2.58368 9.51793 2.66357 9.52455 2.74563C9.53118 2.82769 9.52127 2.91025 9.49542 2.98841L6.68292 12.3634C6.64508 12.4903 6.56732 12.6016 6.46117 12.6808C6.35503 12.76 6.22617 12.8028 6.09376 12.8029Z" fill="#416AFF" />
                      </svg>
                      <span className="font-poppins font-normal text-xs">{job.type}</span>
                    </div>

                    <div className="w-auto bg-white h-7 p-1 shadow rounded flex flex-row items-center">
                      <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.50012 2.3739C4.39465 2.3739 1.87512 4.89343 1.87512 7.9989C1.87512 11.1044 4.39465 13.6239 7.50012 13.6239C10.6056 13.6239 13.1251 11.1044 13.1251 7.9989C13.1251 4.89343 10.6056 2.3739 7.50012 2.3739Z" stroke="#416AFF" stroke-width="1.5" stroke-miterlimit="10" />
                        <path d="M7.5 4.25V8.46875H10.3125" stroke="#416AFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                      <span className="font-poppins font-normal text-xs">{job.schedule}</span>
                    </div>

                    <div className="w-auto bg-white h-7 p-1 shadow rounded flex flex-row items-center">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.50006 1.8739C4.39459 1.8739 1.87506 4.39343 1.87506 7.4989C1.87506 10.6044 4.39459 13.1239 7.50006 13.1239C10.6055 13.1239 13.1251 10.6044 13.1251 7.4989C13.1251 4.39343 10.6055 1.8739 7.50006 1.8739Z" stroke="#416AFF" stroke-width="1.5" stroke-miterlimit="10" />
                        <path d="M7.50002 3.75V7.96875H10.3125" stroke="#416AFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <span className="font-poppins font-normal text-xs">{job.salary}</span>
                    </div>
                  </div>

                </div>

                <div className="py-6 px-7 flex flex-col gap-6">
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-row justify-between">
                      <span className="font-poppins font-medium text-xs">Job Description</span>
                      <div className="flex flex-row">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.6562 3.74951H2.34375C1.5671 3.74951 0.9375 4.37911 0.9375 5.15576V11.7183C0.9375 12.4949 1.5671 13.1245 2.34375 13.1245H12.6562C13.4329 13.1245 14.0625 12.4949 14.0625 11.7183V5.15576C14.0625 4.37911 13.4329 3.74951 12.6562 3.74951Z" stroke="#666666" stroke-width="1.5" stroke-linejoin="round" />
                          <path d="M9.375 7.02966V7.73279C9.375 7.79495 9.35031 7.85456 9.30635 7.89852C9.2624 7.94247 9.20278 7.96716 9.14062 7.96716H5.85937C5.79721 7.96716 5.7376 7.94247 5.69365 7.89852C5.64969 7.85456 5.625 7.79495 5.625 7.73279V7.02966M4.21875 3.74841V2.81091C4.21875 2.56227 4.31752 2.32382 4.49334 2.148C4.66915 1.97219 4.90761 1.87341 5.15625 1.87341H9.84375C10.0924 1.87341 10.3308 1.97219 10.5067 2.148C10.6825 2.32382 10.7812 2.56227 10.7812 2.81091V3.74841H4.21875ZM14.0625 7.02966H0.9375H14.0625Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="font-poppins font-medium text-xs">&nbsp;Posted on: <span className='text-gray-500'>
                          {job.posted}</span></span>
                      </div>
                    </div>
                    <span className="font-poppins font-medium text-xs text-gray-500 max-w-xl">{job.description}</span>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-row justify-between">
                      <span className="font-poppins font-medium text-xs">Responsibilities</span>
                    </div>
                    <ul className="list-disc list-inside font-poppins font-medium text-xs text-gray-500 max-w-xl space-y-1">
                      {job.responsibilities.map((responsibilities, index) => (
                        <li key={index}>{responsibilities}</li>
                      ))}
                    </ul>

                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-row justify-between">
                      <span className="font-poppins font-medium text-xs">Requirements</span>
                    </div>
                    <ul className="list-disc list-inside font-poppins font-medium text-xs text-gray-500 max-w-xl space-y-1">
                      {job.requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))}
                    </ul>

                  </div>
                </div>
              </div>
              <div className="">
                <div className="bg-white flex flex-col rounded w-48 p-4 gap-1 shadow justify-start ">
                  <img src={job.photo} alt="" className="w-10 h-10" />
                  <span className="font-poppins font-medium text-base text-gray-500">About {job.company}</span>
                  <span className="font-poppins font-medium text-xs text-gray-500">{job.about}</span>
                </div>
              </div>

            </div>
          </div>


        </main>
        <footer className="bg-violet-50 h-16 w-full px-52 py-6 flex flex-row justify-between items-center z-10">
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
  )

  // return (
  //   <div className="min-h-screen bg-gray-100 py-8 px-4">
  //     <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
  //       <h1 className="text-3xl font-bold text-gray-800 mb-4">{job.title}</h1>
  //       <p className="text-gray-700 mb-2"><strong>Company:</strong> {job.company}</p>
  //       <p className="text-gray-700 mb-2"><strong>Location:</strong> {job.location}</p>
  //       <p className="text-gray-700 mb-4"><strong>Description:</strong> {job.description}</p>
  //       <h3 className="text-xl font-semibold text-gray-800 mb-2">Requirements:</h3>
  //       <ul className="list-disc list-inside text-gray-700 space-y-1">
  //         {job.requirements.map((requirement, index) => (
  //           <li key={index}>{requirement}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   </div>
  // );


}
