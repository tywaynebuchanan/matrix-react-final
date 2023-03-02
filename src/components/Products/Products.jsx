import React, { Fragment } from 'react'
import ServicesHead from '../ServicesHead'
import "./products.css"
import Bleach from "../../assets/images/products/All_Purpose_Cleaner_-_Lavender.png"



const Products = () => {

    const product = [
        {
            name: "Ajax Bleach 1L",
            image: Bleach,
            price : "JMD $1,000.00"
        },

        {
            name: "Ajax Bleach 1L",
            image: Bleach,
            price : "JMD $1,000.00"
        },

        {
            name: "Chrolite Bleach 475ml",
            image: Bleach,
            price : "JMD $106.00"
        },

        {
            name: "Chrolite Bleach 475ml",
            image: Bleach,
            price : "JMD $106.00"
        },
    ]
  return (
    <Fragment>
          <section className="products">
        <div className="container productContainer">
            <ServicesHead title = "Featured Products"/>
        <div class="cardContainer">
            <div class="productCards">
            {product.map(({name,image,price})=>(
                <div class="teamCard">
                    <div class="product-card-image">
                        <img src={image} alt="" srcset=""/>
                    </div>
                    <div class="card-info">
                        <p>{name}</p>
                        <h3>{price}</h3>
                    </div>
                </div>
            ))}      
            </div>
             </div>
        </div>
    </section>

    
    </Fragment>
  
  )
}

export default Products