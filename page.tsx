import JobCard from '@/components/JobCard';
import { mockJobs } from '@/constants/mockData';

export default function Home() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Find Your Dream Job</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Browse through our latest job listings and apply today
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockJobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}