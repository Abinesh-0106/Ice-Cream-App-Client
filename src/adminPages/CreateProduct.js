import React from 'react'
import { Form } from 'react-router-dom'

export async function action({request}){
    console.log(await request.formData() )
}

function CreateProduct() {
  return (
    <>
        <Form method='post'>
            <label htmlFor='product-code'>Product Code:</label>
            <input id='product-code' style={{display:'block'}}/>
            <label htmlFor='product-name'>Product Name:</label>
            <input id='product-name' style={{display:'block'}}/>
            <label htmlFor='product-desc'>Product Description:</label>
            <input id='product-desc' style={{display:'block'}}/>
            <label htmlFor='product-code'>Product Code:</label>
            <input id='product-code' style={{display:'block'}} />
            <label htmlFor='product-price'>Product Price:</label>
            <input id='product-price'  style={{display:'block'}}/>
            <button>Create</button>
        </Form>
    </>
  )
}

export default CreateProduct