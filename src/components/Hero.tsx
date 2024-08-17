"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BackgroundGradient } from "./ui/background-gradient";
import { ch } from "./Field"
import { MdDelete } from "react-icons/md";
import { ObjectId } from 'mongoose';
import 'react-toastify/dist/ReactToastify.css';

interface SomeComponenProps {
    toggle: boolean
}

const Hero: React.FC<SomeComponenProps> = (toggle) => {
    const [task, setTask] = useState([]);
    const [del, setdel] = useState(false);

    const addT = async () => {
        const res = await axios.get('/api/work')
        setTask(res.data.data);
    }

    const deleteT = async (id: ObjectId) => {
        const data = await axios.delete('/api/work', { data: { id: id } })
        console.log(data.data);
        setdel(!del)
    }
    useEffect(() => {
        addT();
    }, [toggle, del])

    return (
        <>
            <div>
                {task && task.map((item: ch,i) => (
                    <div className='flex gap-[10px] m-[30px]' key={i}>
                        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 min-w-[300px] bg-white dark:bg-zinc-900">
                            <div className='w-[100%] flex flex-row-reverse mr-[10px] gap-4'>
                                <MdDelete onClick={() => deleteT(item._id!)} className=' cursor-pointer' />
                            </div>
                            <p className="text-base sm:text-md text-orange-300 mt-4 mb-2">
                                Title <span className='text-slate-400'>{item.title}</span>
                            </p>
                            <div className="flex flex-col mt-[15px]">
                                <div className="text-sm  text-orange-300">
                                    Description
                                </div>
                                <div>
                                    <span className='text-slate-400'>{item.description}</span>
                                </div>
                            </div>
                        </BackgroundGradient>
                        <div>
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}

export default Hero
