import { useEffect, useState } from "react"
import EcommContext from "./EcommContext"
import axios from "axios"


const EcommProvider = ({ children }) => {

    // setting the states
    const[categoryArray , setCategoryArray] = useState([]);
    const[ProductsArray , setProductsArray] = useState([]);
    const[categoryProducts , setCategoryProducts] = useState([]);
    let[selecteCat , setSelecteCat] = useState('');
    const[selectItem , setSelectItem] = useState([]);

    useEffect(()=>{
        // fetching the categories
        axios.get("https://fakestoreapi.com/products/categories").then(resp=>{
            setCategoryArray(resp.data);
        })
        // fetching the products
        axios.get("https://fakestoreapi.com/products/").then(resp=>{
            setProductsArray(resp.data);
            // console.log(resp.data)
        })
    }, [])

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${selecteCat}`).then(resp=>{
            setCategoryProducts(resp.data)
        })
    },[selecteCat])


    const data = { categoryArray, ProductsArray, selecteCat , setSelecteCat , categoryProducts , setCategoryProducts, selectItem , setSelectItem}
    return (
        <EcommContext.Provider value={data}>
            {children}
        </EcommContext.Provider>
    )
}


export default EcommProvider;