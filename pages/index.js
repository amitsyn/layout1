
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function ProductList({products}) {
  return (
    <>
   <h1></h1>
   {
   products.map((product)=>{
        return (
            <div key ={product.id}>
              <img src='https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg' alt='logo'/>
            </div>
        )
    })
   }
   </>
  )
}
export async function getServerSideProps(){
    const res = await fetch('https://themeger.shop/wordpress/katen/catalog/wp-json/wp/v2/posts')
   const data = await res.json()

   return {
    props:{
        products:data
    }
   }
}
    