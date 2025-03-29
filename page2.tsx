@ -0,0 +1,39 @@
import { mockJobs } from '@/constants/mockData';
import { notFound } from 'next/navigation';

export default function JobDetails({ params }: { params: { id: string } }) {
  const job = mockJobs.find(job => job.id === params.id);
  
  if (!job) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {job.company} • {job.location}
        </p>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Job Description</h2>
          <p className="text-gray-700 dark:text-gray-200">{job.description}</p>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Requirements</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200">
            {job.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
          Apply Now
        </button>
      </div>
    </div>
  );
}