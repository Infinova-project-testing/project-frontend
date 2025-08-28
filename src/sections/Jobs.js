import React, { useState,useEffect } from 'react';
import axios from 'axios';
const Jobs = ({ showSection }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const[jobs,setJobs]=useState([]);
  const[error,setError]=useState('');
  const[loading,setLoading]=useState(true);
  useEffect(()=>{
    const fetchJobs=async()=>{
      try {
          const res=await axios.get(import.meta.env.VITE_BACKEND_JOBS)
          if(res.data.length===0){
            setError("No jobs found at the moment!!");
          }
          else{
            setJobs(res.data)
          }
      } catch (error) {
        setError('Something went wrong!!')
      }
      finally{
        setLoading(false)
      }
    }
    fetchJobs();
  },[])
  

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    // Search is handled by the filter above
  };

  const handleApply = (jobId) => {
    showSection('job-form');
  };

  return (
    <section className="section active">
      <div className="container">
        <h2 className="section-title">Job Opportunities</h2>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>🔍</button>
        </div>
        
        {
          loading?(<p>Loading jobs...</p>):error?(<p>{error}</p>):(
            <div id="job-listings">
          {filteredJobs.map((job) => (
            <div key={job.id} className="opportunity-card">
              <div className="opportunity-header">
                <div className="opportunity-title">{job.title}</div>
                <div className="opportunity-type">full time</div>
              </div>
              <div className="opportunity-details">
                <span><strong>Experience:</strong> {job.experience}</span>
                <span><strong>Salary:</strong> {job.salary}</span>
                <span><strong>Location:</strong> {job.location}</span>
              </div>
              <p>{job.description}</p>
              <button 
                className="apply-button" 
                onClick={() => handleApply(job.id)}
              >
                Apply Now
              </button>
            </div>
          ))}
          
          {filteredJobs.length === 0 && (
            <div className="opportunity-card">
              <p>No jobs found matching your search criteria.</p>
            </div>
          )}
        </div>
          )
        }
      </div>
    </section>
  );
};

export default Jobs;