import React from 'react'
import { useEffect, useState } from "react";
import { addDoc, collection, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useNavigate, useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, colors, Container, Typography } from '@mui/material';


const CreateProducts = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [error,setError]=useState("")
    const [formData, setFormData] = useState({
        name: "",
        price: null,
        description: ""
    })
    const handleInputChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        if ((formData.name === "") || (formData.description === "") || (formData.price === null)) {
            setError("Please fill all fields");
            return;
        }
        if (params.id) {
            try {
                await updateDoc(doc(db, "products", params.id), formData)

            }
            catch (error) {
                console.log(error)
            }


        }
        else {
            try {
                await addDoc(collection(db, "products"), formData);

            }
            catch (error) {
                console.log(error)
            }
        }

        navigate("/products")
    }



const getDataById = async (id) => {
    try {
        const res = await getDoc(doc(db, "products", id))
        const products = { ...res.data() }
        setFormData(products)
    }
    catch {
        console.log("Error")
    }
}


useEffect(() => {
    if (params.id) {
        getDataById(params.id)
    }
}, [params.id])

return (
    <>
        <Container  maxWidth="xl"
    sx={{ 
      display: 'flex', 
      flexDirection:"column",
      justifyContent: 'center',
      alignItems: 'center', 

    }}
        >

            <Box sx={{ bgcolor: '#cfe8fc', height: '65vh',width:"50%",mt:"10px",mb:"10px" }} component="form"
                display="flex"
                flexDirection="column"
                noValidate
                autoComplete="on"
                >
                <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                  <Typography
                  sx={{
                    fontSize: 24,
                    color:"red",
                    alignSelf:"center"
                  }}>{error}</Typography>  
                    <TextField
                        required
                        fullWidth
                        name='name'
                        id="outlined-required"
                        label="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />

                  <TextField
                        required
                        fullWidth
                        name='price'
                        id="outlined-required"
                        label="Price"
                        value={formData.price}
                        onChange={handleInputChange}
                    />

                    <TextField
                        required
                        fullWidth
                        name='description'
                        id="outlined-required"
                        label="Description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </div>
            </Box>

            <Button variant="contained" onClick={handleFormSubmit}>Submit</Button>
        </Container>

    </>
)
}

export default CreateProducts