// import React, { useEffect } from 'react'
import { useEffect } from 'react';
import {useState} from 'react'
// import {Link} from 'react-router-dom';


 function Search(){
    const [data,setData]=useState([]);
    const [query,setQuery]=useState(" ");
    
    useEffect(()=>{
        const fetchData=async()=>{
        let result= await fetch(`https://fakestoreapi.com/products=${query}`)
        
        result=await result.json();
          console.log(result);
         setData(result);
        };
        if(query.length===0 || query.length>2)
        fetchData();

    },[query])    
   
   


   

    return(
     <div className='col-sm-6 offset-sm-3'>
       <h1>Search Product</h1> 

     <br />
     <input type="text" onChange={(e)=>setQuery(e.target.value.toLowerCase())} className='form-control' placeholder='Search Product'/>
     
     <div>{data}</div>
     
     {/* {
       <table border='1'>
        <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Price</td>
            <td>Description</td>
            {/* <td>Image</td> */}
        {/* </tr>
        {
            data.map((item)=>
            <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td> 
                <td><img src={item.image}  height="250px"/></td>
            </tr>
            )
        }
       </table>
}
      */} 
       {/* {
                    data.map((product) => {
                        return (
                            <div className="col-md-3">
                                <div class="card h-100 text-center p-4 mb-4" key={product.id}>
                                    <img src={product.image} class="card-img" alt={product.title} width="450px" height="450"/>
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{product.title.substring(0,12)}</h5>
                                            <p class="card-text lead fw-bold">${product.price}</p>
                                           <Link to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</Link>
                                        </div>
                                </div> </div>
                        )
                    })} */}


     </div>

    )

}
export default Search;