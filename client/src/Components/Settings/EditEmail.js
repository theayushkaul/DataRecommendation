import React, { useState, useContext } from 'react';
import { Context } from "../../Context/context";
import Modal from 'react-modal';
import axios from "axios";

export default function EditEmail() {
    const { user, dispatch, authToken } = useContext(Context);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState("");

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });

        const config = {
            headers: {
                authToken: authToken,
            },
        };

        try {
            const res = await axios.put(`/user/update/${user._id}`, { email }, config);
            console.log(res);
            dispatch({ type: "UPDATE_SUCCESS", payload: { user: res.data } });
            closeModal();
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" });
        }
    };

    return (
        <div>
            <button className='bg-slate-200 rounded-full px-6 py-1 text-xs hidden sm:block' onClick={openModal}>Edit</button>
            <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={{
                content: {
                    top: "35%",
                    bottom: "35%",
                    right: "38%",
                    left: "38%",
                    padding: "20px",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    color: "white"
                },
                overlay: {
                    backgroundColor: "rgba(0,0,0,0.6)"
                }
            }}>
                <form className="flex flex-col mt-6" onSubmit={handleSubmit}>
                    <label className='text-xl'>Email</label>
                    <input className="focus:outline-none rounded-full px-4 mt-6 text-sm py-1" style={{ backgroundColor: "rgba(0,0,0,0.8)" }} type="email" placeholder="Enter your new email..." onChange={(e) => setEmail(e.target.value)} />
                    <div className="flex justify-end mt-10 mr-2 gap-10">
                        <button className="text-xs hover:underline" type="submit">Submit</button>
                        <button className='text-xs hover:underline' onClick={closeModal}>Back</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}