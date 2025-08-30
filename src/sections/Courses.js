import React from 'react';
import axios from 'axios'
import { useState,useEffect} from 'react';
import DownloadButton from '../utils/DownloadButton';
const Courses = ({ showBrochureForm }) => {
  const[courses,setCourses]=useState([]);
  const[trainers,setTrainers]=useState([]);
  const[loading,setLoading]=useState(true);
  const[trainerLoading,setTrainerLoading]=useState(true);
  const[error,setError]=useState("");
  const[trainerError,setTrainerError]=useState("");
 
 
 
  useEffect(()=>{
    const fetchCourses=async ()=>{
      try {
        const res=await axios.get(import.meta.env.VITE_BACKEND_COURSES);
       
        if(res.data.length===0 ||!res.data){
          setError("No Courses found");
        }
        
  
        else{
          setCourses(res.data);
          
        }
      } catch (error) {
        setError("Something went wrong")
      }
      finally{
        setLoading(false)
      }
      
    }

    
    const fetchTrainers=async ()=>{
      try {
        const res=await axios.get(import.meta.env.VITE_BACKEND_TRAINERS);
       
        
        
        
        if(res.data.length===0){
          setTrainerError("No trainers found!!");
        }
        else{
          setTrainers(res.data);
        }
      } catch (error) {
        setTrainerError("Something went wrong in trainers!!");
       
      }
      finally{
        setTrainerLoading(false);
      }
    }
    fetchCourses();
    fetchTrainers();
  },[])



 
  


  return (
    <section className="section active">
      <div className="container">
        <h2 className="section-title">Our Courses</h2>
        {
          loading?(<p style={{marginTop:"500px"}}>Loading courses....</p>):error?(<p style={{marginTop:"500px"}}>{error}</p>):(
              <div className="cards-grid" style={{display:"flex",justifyContent:"cenetr"}}>
          {
            courses.map((data)=>(
                 <div className="card" style={{maxWidth:"20rem"}}>
            <h3>{data.name}</h3>
            <p>Duration:{data.duration}| Mode:Hybrid</p>
            <p>{data.details}</p>
           <a 
              href="#" 
              className="card-button" 
              onClick={(e) => {e.preventDefault(); showBrochureForm(data)}}
            >
              Get Brochure
            </a>
          </div>
            ))
          }
         
          
          
        </div>
          )
        }
        
        <h3 className="text-center mb-40" style={{ marginTop: '60px' }}>Our Expert Trainers</h3>
        {
          trainerLoading?( <p style={{marginTop:"500px"}}>Loading trainers....</p>):trainerError?(<p style={{marginTop:"500px"}}>{trainerError}</p>):(
            <div className="cards-grid" style={{maxWidth:"25rem"}}>
        {
          trainers.map((data)=>(
            <div className="card">
            <div style={{ 
              width: '100px', 
              height: '100px', 
              background: 'var(--gradient)', 
              borderRadius: '50%', 
              margin: '0 auto 20px',
               textAlign:'center'
            }}>
             <img src={data.trainerImage} style={{height:"100%",borderRadius:"50%",width:"100%"}}/>
            </div>
            <h4>{data.name}</h4>
            <p>{data.description}</p>
           
          </div>
          ))
        }
         
        </div>
          )
        }
      </div>
    </section>
  );
};

export default Courses;