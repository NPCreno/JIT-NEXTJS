"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
};

// Sample job data
const jobData: Job[] = [
  { id: 1, title: "Software Engineer", company: "Tech Solutions", location: "Manila", description: "Develop and maintain software.", requirements: ["Bachelor's in CS", "3+ years experience", "Proficient in React"] },
  { id: 2, title: "Product Designer", company: "Creative Studio", location: "Cebu", description: "Design user-centered products.", requirements: ["Bachelor's in Design", "Portfolio", "UX/UI expertise"] },
  { id: 3, title: "Marketing Specialist", company: "MarketWorks", location: "Davao", description: "Create and implement marketing strategies.", requirements: ["Bachelor's in Design", "Portfolio", "UX/UI expertise"]},
];

export default function JobDetailPage({ params }: { params: { id: number } }) {
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
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{job.title}</h1>
        <p className="text-gray-700 mb-2"><strong>Company:</strong> {job.company}</p>
        <p className="text-gray-700 mb-2"><strong>Location:</strong> {job.location}</p>
        <p className="text-gray-700 mb-4"><strong>Description:</strong> {job.description}</p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Requirements:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {job.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
