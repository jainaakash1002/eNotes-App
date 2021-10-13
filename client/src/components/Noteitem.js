import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div style={{display: 'flex',justifyContent: 'flex-end',position: 'absolute',right: '0'}}>
                    <span className="badge rounded-pill bg-primary" title="Tag of the note"> {note.tag} </span>
                </div>
                <div className="card-body bg-warning" style={{ "border-radius": "0.25rem" }}>
                    <div className="d-flex align-items-center" style={{ "position": "relative" }}>
                        <h5 className="card-title card-split"><u title="Title of the note">{note.title}</u></h5>
                        <div className="d-flex" style={{ "position": "absolute", "right": "0" }}>
                            <i className="far fa-trash-alt mx-2" title="Delete note" onClick={() => {
                                deleteNote(note._id);
                                props.showAlert("Deleted Successfully", "success");
                            }}>
                            </i>
                            <i className="far fa-edit mx-2" title="Update note" onClick={() => { updateNote(note) }}>
                            </i>
                        </div>
                    </div>

                    <p className="card-text" title="Desciption of the note">{note.description}</p>

                </div>
            </div>
        </div>
    )
}

export default Noteitem
