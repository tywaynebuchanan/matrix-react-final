import React, { Fragment } from 'react'
import Header from '../../components/Header'
import ProductImage from '../../assets/images/header/product-img-1.jpeg'
import ServicesHead from '../../components/ServicesHead'
import "./products.css"
import Image1 from "../../assets/images/products/All_Purpose_Cleaner_-_Lavender.png"
import Image2 from "../../assets/images/products/All_Purpose_Cleaner__Blue.png"
import Image3 from "../../assets/images/products/All_Purpose_Cleaner_Pink.png"
import Image4 from "../../assets/images/products/Degreaser.png"
import Image5 from "../../assets/images/products/Diswashing_Liquid__Green.png"
import Image6 from "../../assets/images/products/Dishwashing_Liquid_Yellow.png"
import Image7 from "../../assets/images/products/Fabric_SoftnerPink_Rose.png"
import Image8 from "../../assets/images/products/Fabric_Softner_Suavitel_Sunflower_Blue.png"
import Image9 from "../../assets/images/products/Fabric_SoftnerDowny_April_Fresh__Yellow.png"
import Image10 from "../../assets/images/products/Fabric_Wash_Blue.png"
import Image11 from "../../assets/images/products/Hand_Sanitizer.png"
import Image12 from "../../assets/images/products/PINK_ALL_PURPOSE_SOAP.png"
import Image13 from "../../assets/images/products/Shampoo.png"
import Image14 from "../../assets/images/products/Toilet_Bowl_Cleaner.png"

const Products = () => {

    const product = [
        {
            name: "All Purpose Cleaner Lavender",
            image: Image1,
            price : "JMD $1,000.00"
        },

        {
            name: "All Purpose Cleaner Blue",
            image: Image2,
            price : "JMD $1,000.00"
        },

        {
            name: "All Purpose Cleaner Pink",
            image: Image3,
            price : "JMD $1000.00"
        },

        {
            name: "Degreaser",
            image: Image4,
            price : "JMD $1000.00"
        },
        {
            name: "Dishwashing Liquid",
            image: Image5,
            price : "JMD $1000.00"
        },
        {
            name: "Dishwashing Liquid Yellow",
            image: Image6,
            price : "JMD $1000.00"
        },
        {
            name: "Fabric Softener Pink",
            image: Image7,
            price : "JMD $1000.00"
        },
        {
            name: "Fabric Softener Blue",
            image: Image8,
            price : "JMD $1000.00"
        },
        {
            name: "Fabric Softener Yellow",
            image: Image9,
            price : "JMD $1000.00"
        },
        {
            name: "Fabric Wash Blue",
            image: Image10,
            price : "JMD $1000.00"
        },
        {
            name: "Hand Sanitizer",
            image: Image11,
            price : "JMD $1000.00"
        },
        {
            name: "Pink All Purpose Soap",
            image: Image12,
            price : "JMD $1000.00"
        },
        {
            name: "Shampoo",
            image: Image13,
            price : "JMD $1000.00"
        }, {
            name: "Toilet Bowl Cleaner",
            image: Image14,
            price : "JMD $1000.00"
        },

    ]
  return (
    <Fragment>
    <Header title={"Featured Products"} image={ProductImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex beatae placeat 
      tenetur laudantium quo. Magni excepturi quidem, ullam iste, 
      nemo nostrum quod aut molestiae voluptatibus dolore odio et, totam ea!
    </Header>

    <Fragment>
          <section className="products">
        <div className="container productContainer">
            <ServicesHead title = "Featured Products"/>
        <div class="cardContainer">
            <div class="productCards">
            {product.map(({name,image,price})=>(
                <div class="teamCard">
                    <div class="card-image">
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
    </Fragment>



  )
}

export default Products