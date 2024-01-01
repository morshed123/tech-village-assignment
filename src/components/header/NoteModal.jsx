import React, { useState } from 'react';
import { FiEdit } from "react-icons/fi";

const NoteModal = () => {
    const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
    const handleNoteClick = () => {
        setIsNoteModalOpen(true);
    };

    const handleNoteModalClose = () => {
        setIsNoteModalOpen(false);
    };

    return (
        <>
            <button type="button" className="btn__note__modal" onClick={handleNoteClick}><FiEdit /> <span className="ms-2">Note</span></button>

            {
                isNoteModalOpen && (
                    <div className="note__modal">
                        <div className="note__modal__content">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="">Add note to the order</h4>
                                <h4 className="close__note" onClick={handleNoteModalClose}>
                                    &times;
                                </h4>
                            </div>
                            <hr className="customer__hr" />
                            <form action="">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label form-label-sm txt__label">Order Note</label>
                                    <textarea type="text" className="form-control form-control-sm pt-3 txt__label" id="exampleFormControlTextarea1" rows="3" placeholder="write text here..."></textarea>
                                </div>
                                <button className="btn__note__submit">Submit</button>
                            </form>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default NoteModal;