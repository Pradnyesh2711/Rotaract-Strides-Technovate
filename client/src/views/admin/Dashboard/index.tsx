// src/Dashboard.tsx
import React, { useState } from 'react';
import { BsPencilFill, BsChatLeftDotsFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

interface EventState {
    id:string;
    eventType: string;
    name: string;
    date: Date;
    location: string;
    description: string;
  }


const Dashboard: React.FC = () => {
    const d =new Date
    const navigate = useNavigate();
    const [selectedMonth, SetSelectedMonth] = useState(d.toLocaleString('en-US', { month: 'short' }))
    const isPresident = false
    const [eventList, SetEventList]= useState<Array<EventState>>([
        {
            id: "adasasjfjfs",
            eventType: "Marathon",
            name: "SPIT Marathon",
            date: new Date(),
            location: "Andheri, Mumbai",
            description: "Join us for an exhilarating marathon experience that will test your endurance, determination, and love for running! The SPIT Marathon promises an unforgettable journey through scenic routes, camaraderie with fellow runners, and the thrill of crossing the finish line.",
          },
          {
            id: "adasasjfjfs",
            eventType: "Marathon",
            name: "SPIT Marathon",
            date: new Date(),
            location: "Andheri, Mumbai",
            description: "Join us for an exhilarating marathon experience that will test your endurance, determination, and love for running! The SPIT Marathon promises an unforgettable journey through scenic routes, camaraderie with fellow runners, and the thrill of crossing the finish line.",
          },
          {
            id: "adasasjfjfs",
            eventType: "Marathon",
            name: "SPIT Marathon",
            date: new Date(),
            location: "Andheri, Mumbai",
            description: "Join us for an exhilarating marathon experience that will test your endurance, determination, and love for running! The SPIT Marathon promises an unforgettable journey through scenic routes, camaraderie with fellow runners, and the thrill of crossing the finish line.",
          },
          {
            id: "adasasjfjfs",
            eventType: "Marathon",
            name: "SPIT Marathon",
            date: new Date(),
            location: "Andheri, Mumbai",
            description: "Join us for an exhilarating marathon experience that will test your endurance, determination, and love for running! The SPIT Marathon promises an unforgettable journey through scenic routes, camaraderie with fellow runners, and the thrill of crossing the finish line.",
          },
          {
            id: "adasasjfjfs",
            eventType: "Marathon",
            name: "SPIT Marathon",
            date: new Date(),
            location: "Andheri, Mumbai",
            description: "Join us for an exhilarating marathon experience that will test your endurance, determination, and love for running! The SPIT Marathon promises an unforgettable journey through scenic routes, camaraderie with fellow runners, and the thrill of crossing the finish line.",
          },
          
    ])
    const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];


  return (
    <div className="h-max">
        <div className='bg-white mt-6 rounded-xl px-16 py-6 shadow-2xl'>
        <h2 className="font-bold capitalize text-navy-700 dark:text-white text-3xl">My Marathons</h2>
        <div className='grid grid-cols-12 my-6'>
            {monthList.map((month)=>
            {
                return (
                        month == selectedMonth? <button className='bg-yellow-600 px-6 py-3 mx-1 rounded-md '>
                    {month}
                    </button>:<button className='bg-yellow-200 px-6 py-3 mx-1 rounded-md ' onClick={( )=>
                    {
                        SetSelectedMonth(month)
                    }}>
                    {month}
                    </button>
                   
                )
            }
                )}
        </div>
             <div>
                {eventList.filter((e)=>
                
                    selectedMonth == monthList[e.date.getMonth()]
                ).map((event) =>
                (
                    <div className='bg-blue-200 bordersolid my-3 rounded-md py-3 px-6'>
                    <div className='grid grid-cols-2'>
                      <h4 className="font-bold capitalize text-navy-700 dark:text-white text-lg"> {event.eventType} ({event.location})</h4>
                      <div className='text-right'>
                        {isPresident ? <button className='bg-navy-500 p-2 mx-1 rounded-md inline text-white ' onClick={( )=>
                      {
                        navigate('/admin/editevent',{state:{event:event}});
                      }}><BsPencilFill/>
                      </button>:
                      <button className='bg-navy-500 p-2 mx-1 rounded-md inline text-white ' ><BsChatLeftDotsFill/>
                        </button>
                      }
                        
                        </div>
                      
                    
                    <h5 className="font-bold capitalize text-navy-500 dark:text-white text-lg">{event.name}</h5>
                    <h5 className="font-bold capitalize text-navy-500 dark:text-white text-lg">{event.date.toDateString()}</h5>
        
                    </div>
                    <p className='font-bold text-navy-400 dark:text-white text-sm my-2'>
                        {event.description}
                    </p>
                    </div>
                ))}
                {eventList.filter((e)=>
                
                selectedMonth == monthList[e.date.getMonth()]
            ).length?null:
            <div className='bg-blue-200 bordersolid my-3 rounded-md py-3 px-6'>
                <h4 className="font-bold capitalize text-navy-700 dark:text-white text-lg">No Events</h4>
                   
                </div>
        
            }
                </div>
        
       
        </div>
    </div>
  );
};

export default Dashboard;
