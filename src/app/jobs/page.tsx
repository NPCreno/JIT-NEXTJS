import Link from "next/link";

const jobs = [
  { id: 1, title: "Software Engineer", company: "Tech Solutions", location: "Manila", description: "Develop and maintain software solutions for clients." },
  { id: 2, title: "Product Designer", company: "Creative Studio", location: "Cebu", description: "Design user-centered products and experiences." },
  { id: 3, title: "Marketing Specialist", company: "MarketWorks", location: "Davao", description: "Create and implement marketing strategies." },
  // Add more jobs as needed
];

export default function Jobs() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-8">Job Listings</h1>

      {/* Logout Button */}
      <div className="flex justify-center mb-6">
        <Link href="/" className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition duration-200">
          Logout
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <Link key={job.id} href={`/jobs/${job.id}`}>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-gray-500">{job.location}</p>
              <p className="mt-2 text-sm text-gray-700">{job.description}</p>
              <span className="text-blue-500 font-medium mt-4 inline-block">Read more...</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
