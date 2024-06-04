import React from "react";
import { Form, useActionData, useLoaderData } from "react-router-dom";
import ProductHeaders from "./ProductHeaders.js";

export async function action({ request }) {
  const formData = Object.fromEntries(await request.formData());

  return {
    key: formData.productCode,
    name: formData.productName,
    description: formData.productDesc,
    ingredients: formData.productingredients,
    price: formData.productPrice,
    weight:formData.productWeight,
  };
}

export async function loader({ request }) {
  const response = await fetch("http://localhost:2500/api/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId: 2 }),
  });
  const products = await response.json();
  //   console.log(products)
  return products;
}

function CreateProduct() {
  const products = useLoaderData();
  const newProducts = useActionData();
  if (newProducts) {
    const maxID = products[-1].key;
    products.push({ ...newProducts, key: [maxID] });
  }
  let productElements = [];
  if (products) {
    productElements = products.map((item) => {
      return <ProductHeaders item={item} productId={item.key} key={item.key} />;
    });
  }
  return (
    <>
    <div className="create-product-form">
      <Form method="post" className="product-form-container">
        <div className="product-code-field">
          <label htmlFor="product-code">Product Code:</label>
          <input id="product-code" name="productCode" />
        </div>
        <div className="product-name-field">
          <label htmlFor="product-name">Product Name:</label>
          <input id="product-name" name="productName" />
        </div>
        <div className="product-ingredients-field">
          <label htmlFor="product-ingredients">Product Ingredients:</label>
          <textarea id="product-ingredients" name="productIngredients" style={{width:"90%"}}/>
        </div>
        <div className="product-price-field">
          <label htmlFor="product-price">Product Price:</label>
          <input id="product-price" name="productPrice" />
        </div>
        <div className="product-weight-field">
          <label htmlFor="product-weight">Product Weight:</label>
          <input id="product-weight" name="productWeight" />
        </div>
        <div className="product-desc-field">
          <label htmlFor="product-desc">Product Description:</label>
          <textarea id="product-desc" name="productDesc" style={{width:"90%"}} />
        </div>
        <div className="product-create-button">
          <button type="submit">Create</button>
        </div>
      </Form>
    </div>
    <div >

    {products && 
    <table className="product-table" >
        <tr>
            <th style={{width:"20%" }}>Product Code</th>
            <th style={{width:"35%"}}>Product Name</th>
            <th style={{width:"20%"}}>Product Price</th>
            <th style={{width:"12.5%"}}></th>
            <th style={{width:"12.5%"}}></th>
        </tr>
        {productElements}
    </table>
    }
    </div>
    </>
  );
}

export default CreateProduct;
