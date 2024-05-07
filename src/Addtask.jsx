import { useState } from "react";
import {toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
let Addtask = () => {

    const [mytask, setMytask] = useState([]);
    const [subject, setSubject] = useState("");
    const [hour, setHour] = useState("");




    const savedmytask = JSON.parse(localStorage.getItem("mytask"));
    if (savedmytask) {
        if (savedmytask.length > 0 && mytask.length === 0) {
            setMytask(savedmytask);
        }
    }




    const handleAdd = () => {
        // if (subject === "" || hour === "") return;
        if (!subject && !hour) {
           
            toast.warning("please enter subject and hour",{
                position: "top-center",
                autoClose: 1400
            })
            return
        }
        const subobj = [...mytask, {
            subject,
            hour: parseInt(hour),
        }];
        setMytask(subobj);
        setSubject("");
        setHour("");
        localStorage.setItem("mytask", JSON.stringify(subobj));
        // }
    };
    const increment = (idx) => {
        const subobj = [...mytask];
        subobj[idx].hour = subobj[idx].hour + 1;
        setMytask(subobj);
        localStorage.setItem("mytask", JSON.stringify(subobj));




    }
    const decrement = (idx) => {
        if (mytask[idx].hour === 0) return;
        const subobj = [...mytask];
        subobj[idx].hour = subobj[idx].hour - 1;
        setMytask(subobj);
        localStorage.setItem("mytask", JSON.stringify(subobj));

    }
    return (
        <>

            <div className="m-auto text-center mt-[12%]">
                <h1 className="text-3xl font-bold">Geekster Education Planer</h1>
                <br />
                <input
                    value={subject}
                    type="text"
                    className="border-2 border-black "
                    placeholder="Subject"
                    onChange={(e) => setSubject(e.target.value)}
                />
                <input
                    value={hour}
                    type="number"
                    className="border-2  ml-2 border-black"
                    placeholder="Hours"
                    onChange={(e) => setHour(e.target.value)}
                />
                <button className="bg-blue-400 p-1 rounded ml-2" onClick={handleAdd}>
                    Add
                </button>
            </div>
            {

                mytask.map((item, idx) => {
                    return (
                        <>
                        <br />
                        <br />
                        <div className="bg-gray-200 p-5 w-[50%] m-auto">
                            <div className="m-auto text-center mt-10 ">
                                <span className="text-lg">{item.subject}</span>
                                <span> - </span>
                                <span className="text-lg">{item.hour}</span>
                                <button className="ml-2 p-2 bg-green-500 rounded" onClick={() => increment(idx)}>+</button>
                                <button className="ml-2 p-2 bg-red-500 rounded" onClick={() => decrement(idx)}>-</button>
                            </div>
                        </div>
                        </>
                        )
                        
                })
            }

        </>
    )
}
export default Addtask;