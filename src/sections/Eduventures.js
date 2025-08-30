import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
const Eduventures = ({ showSection, showBrochureForm }) => {
  const[loading,setLoading]=useState(true);
  const[courses,setCourses]=useState([]);
  const[error,setError]=useState('');
  useEffect(()=>{
    const fetchCourses=async()=>{
      try {
        const res=await axios.get(import.meta.env.VITE_BACKEND_NEW_COURSES);
        if(res.data.length===0){
          setError("No courses avaliable at the moment!")
        }else{
          setCourses(res.data);
        }
      } catch (error) {
        setError("Something went wrong")
      }finally{
        setLoading(false)
      }
    }
    fetchCourses();
  },[])
  return (
    <section className="section active">
      <div className="container">
        <h2 className="section-title">Infinova Eduventures</h2>
        <div className="text-center mb-40">
          <a 
            href="#" 
            className="cta-button" 
            onClick={(e) => {e.preventDefault(); showSection('courses');}}
          >
            View All Courses
          </a>
          <a 
            href="#" 
            className="cta-button" 
            style={{ marginLeft: '20px' }}
            onClick={(e) => {e.preventDefault(); showSection('internships');}}
          >
            Find Internships
          </a>
          <a 
            href="#" 
            className="cta-button" 
            style={{ marginLeft: '20px' }}
            onClick={(e) => {e.preventDefault(); showSection('jobs');}}
          >
            Explore Jobs
          </a>
        </div>
        <div className="cards-grid" style={{display:"flex",justifyContent:"center"}}>
         {
          loading?(<p>Loading courses</p>):error?(<p>{error.message}</p>):(
             courses.map((data)=>(
              <div className="card" style={{maxWidth:"25rem"}}>
            <div className="card-icon"><img src={data.courseImageUrl} alt="" style={{width:"90px"}} /></div>
            <h3>{data.name}</h3>
            <p>{data.details}</p>
            <a 
              href="#" 
              className="card-button" 
              onClick={(e) => {e.preventDefault(); showBrochureForm(data);}}
            >
              Get Brochure
            </a>
          </div>
             ))
          
          )
         }
        </div>
      </div>
    </section>
  );
};

export default Eduventures;