"use client"

import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Hero from './Hero';
import { ObjectId } from 'mongoose';

export interface ch {
    title: string;
    description: string;
    _id?:ObjectId
}

interface SomeComponenProps {
    toggle:boolean
}

const Field = () => {
    const [toggle,setToggle] = useState(false);
    const [task, setTask] = useState<ch>({
        title: "",
        description: "",
    })

    const addTask = async()=>{
         try {
            const res = await axios.post("api/work",task);
            console.log("signup",res.data);
            toast.success("Task added successfully")
            setToggle(!toggle)
         } catch (error:any) {
            console.log("error hai signup mai");
            toast.error(error.message);
         }
      }
    
    return (
       <>
         <ToastContainer />
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="p-[20px]">
                        <input type="text" placeholder="Title" className="outline-none p-[10px] bg-black w-[100%] pl-[10px]" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} />
                        <hr className="h-[3px] w-[98%] bg-black " />
                    </div>
                    <textarea className="textarea textarea-bordered ml-[20px] border-2 border-double" cols={50} rows={10} placeholder="Dscription ..." value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })}></textarea>
                    <div className='w-[100%] flex mt-[10px] flex-row-reverse'>
                        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                        onClick={addTask}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </dialog>
        </div>
        <Hero toggle={toggle}/>
       </>
    )
}

export default Field;
