import React from 'react'
import "./style.scss"
import Count from '../Count'

const Product = ({product,deleteProduct,increase,decrease,changeValue}) => {
  const {title, priceTotal, img, count, id} = product;
  return (
    <section className="product">
    <div className="product__img"><img src={`./img/products/${img}`} alt={title}/></div>
    <div className="product__title">{title}</div>
    <div className="product__count">
    <Count count={count}  increase={increase} decrease={decrease} changeValue={changeValue} id={id}/>
    </div>
    <div className="product__price">{priceTotal} rub.</div>
    <div className="product__controls">
        <button type="button" onClick={()=>{deleteProduct(id)}}>
            <img src="./img/icons/cross.svg" alt="Delete"/>
        </button>
    </div>
</section>
  )
}

export default Product
