import React, { useState, useEffect } from 'react';
import { getDocs, collection,doc,deleteDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import { db } from "../../firebase/config"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';



const VewProducts = () => {

    const [products, setproducts] = useState([])
    const [loading, setLoading] = useState(true)
    const getProducts = async () => {
        try {
            const res = await getDocs(collection(db, 'products'));
            console.log(res, "res");


            const products = res.docs.map((doc) => {
                return ({
                    id: doc.id,
                    ...doc.data()
                })
            })
            console.log(products, "products");
            setLoading(false)
            setproducts(products);
        }
        catch {
            console.log("Error")
        }
    }
    useEffect(() => {
        getProducts();
    }, [])
    const handleDel =async (id) =>{
        try { 
            await deleteDoc(doc(db,"products",id))
            getProducts()

         }
         catch {
            console.log("Error")
         }
 
    }


    return (
        <>
        {loading && (
            <div>Loading...</div>
        )}

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name of the Product</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((items, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {items.name}
                                </TableCell>
                                <TableCell align="right">{items.description}</TableCell>
                                <TableCell align="right">{items.price}</TableCell>

                                <TableCell align="right"><Link to={`/add-products/${items.id}`}><Button variant='outlined'>Edit</Button></Link>
                                    <IconButton onClick={()=>{handleDel(items.id)}} aria-label="delete" color="error">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
            <Link to="/add-products">
                <Button
                    sx={{mb:"10px"}}
                    fullWidth
                    variant="contained"

                >
                    add a product
                </Button>

            </Link>
        </>
    )
}

export default VewProducts