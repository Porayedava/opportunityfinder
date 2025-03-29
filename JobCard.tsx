import Link from 'next/link';
import { Job } from '@/types';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{job.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-1">{job.company}</p>
        <p className="text-gray-500 dark:text-gray-400 mb-4">{job.location}</p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
            {job.type}
          </span>
          <span className="text-gray-700 dark:text-gray-200 font-medium">
            ${job.salary}/year
          </span>
        </div>
        
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
          Posted {job.posted}
        </p>
        
        <Link
          href={`/jobs/${job.id}`}
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-2 px-4 rounded transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}