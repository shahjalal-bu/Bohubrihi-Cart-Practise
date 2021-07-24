import React from "react";
import "./Product.css";



const Product = props => {
  const {description,name,price,img} = props.product;

  return (
    <div className="row">
      <div className="col-md-3  left-section">
        <div className="w-100">
          <img src={img} alt={name} />
          <button className="btn btn-danger margin-3" onClick={()=> props.handleAddProduct(props.product)}>Enroll Now</button>
        </div>

      </div>
      <div className="col-md-9 right-section">
        <h2>{name}</h2>
        <strong>{price}</strong>
        <p className="lead">
          {description}
        </p>
      </div>
    </div>    
  );
};

export default Product;
