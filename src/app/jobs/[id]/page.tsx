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

  // Add more jobs as needed
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
    return <p>Loading job details...</p>;
  }

  return (
    <>
      <Header></Header>
      

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
