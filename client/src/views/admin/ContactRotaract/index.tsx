import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

interface Member {
    _id:string;
    rotaractID: string;
    firstname: string;
    lastname: string;
    club:string;
    type: string;
    profilePicture: string;
  }

export default function ContactRotaract() {
    const [adminMembers, setAdminMembers] = useState<Array<Member>>([
        {
            _id:'string',
    rotaractID: 'string',
    firstname: 'Sujal',
    lastname: 'Chordia',
    club:'RC SPIT',
    type: 'admin',
    profilePicture: null,
        },
        {
            _id:'string',
    rotaractID: 'string',
    firstname: 'Sujal',
    lastname: 'Chordia',
    club:'RC SPIT',
    type: 'admin',
    profilePicture: null,
        }
    ])
    const navigate = useNavigate()
    const [userid, setUserId] = useState<string>();
    useEffect(() => {

        const uid =  localStorage.getItem('id');
        if(uid === null)
        {
          navigate('/')
        }
        setUserId(uid)
      }, [userid]);
  return (
    <div className="h-max">
      <div className="mt-6 rounded-xl bg-white px-16 py-6 shadow-2xl">
        <h2 className="text-3xl font-bold capitalize text-navy-700 dark:text-white">
          Presidents Of Other Rotaract Clubs
        </h2>
        {adminMembers.filter((mem)=>
                
                userid !== mem._id 
            ).map((mem) =>
            (
                <div className='bg-blue-200 bordersolid my-3 rounded-md py-3 px-6 grid grid-cols-2'>
                    <div className="flex">
                        <div className="rounded-full bg-gray-500 w-20 h-20 justify-center flex items-center text-3xl"> {mem.firstname.slice(0,1)} </div>
                        <div className="flex-col p-3">
                            <h4 className="font-bold capitalize text-navy-700 dark:text-white text-2xl  "> {mem.firstname} {mem.lastname}</h4>
                            <h4 className="font-bold capitalize text-navy-600 dark:text-white text-xl "> {mem.club} </h4>
                        </div>
                    </div>
                    
                    <div className="flex justify-end content-middle my-auto">
                        <button className="rounded-full bg-navy-600 w-12 h-12 justify-center flex items-center text-xl text-white" onClick={()=>
                        {
                            navigate('/admin/chat',{state:{member:mem}})
                        }}><BsFillArrowRightCircleFill /> </button>

                    </div>
                   
                </div>
            ))}
      </div>
    </div>
  );
}
