import React, { useState } from 'react'

import {Modal, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import StarRating from './StarRating';


const AddMovie = ({addFilm}) => {
    const [show, setShow]=useState(false)
    const [name, setName]=useState("")
    const [image, setImage]=useState("")
    const [description, setDescription] = useState("")
    const [rate, setRate] = useState(0)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleSubmit = (e) => {
        let newMovie = {
            title: name,
            posterURL: image,
            id: Math.random(),
            rating: rate,
            description: description
        }

        addFilm(newMovie, e)
        setName('')
        setImage('')
        setDescription('')
        setRate(0)
        handleClose()
    }


    return (
        <div>
            <Button variant="primary" onClick={handleShow} className="btn-add">
                Add New Movie 
            </Button>
            
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton closeLabel=''>
                    <Modal.Title>Add Your Movie</Modal.Title>
                </Modal.Header>

                <Modal.Body className="add-movie-modal">
                    <span>Movie's Name:</span>
                    <input type="text" placeholder="Enter Movie's name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <span>posterURL:</span>
                    <input type="text" placeholder="Enter Movie's picture link" value={image} onChange={(e)=>setImage(e.target.value)}/>
                    <span>Description:</span>
                    <input type="text" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                    <span>Rating:</span>
                    <StarRating rate={rate} setRate={setRate}/>
                    
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" onClick={handleSubmit}>Add</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddMovie
