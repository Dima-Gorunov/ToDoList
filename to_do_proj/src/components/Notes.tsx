import React from 'react';

const Notes = ({Notes, deleteNoteThunk}: any) => {
    return (
        <div className="notes">
            {Notes ?
                Notes.map((e: any, index: number) => (
                        <div>
                            <div className="notes_text-container">
                                <div className="note_number">{e.Id + 1}</div>
                                <div className="note_text">{e.Text}</div>
                                <div className="del_note" onClick={() => deleteNoteThunk(e.Id)}>
                                    <span/>
                                </div>
                            </div>
                            <hr className="hr-shelf"/>
                        </div>
                    )
                )
                : <div className="notes_text-container">
                    Здесь будет ваша первая заметка
                </div>}
        </div>
    );
};

export default Notes;