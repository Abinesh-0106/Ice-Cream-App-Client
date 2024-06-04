import React from 'react'

function ProductHeaders({item,productId}) {
  return (
    <tr>
      <td>{item.key}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td><button type='button' className='product-edit' >Edit</button></td>
      <td><button type='button' className='product-delete' >Delete</button></td>
    </tr>
  )
}
 // <div className='product-detail-container' >
  //           <p>Product Code :<span>{item.key}</span> </p>
  //           <p>Product Name :<span>{item.name}</span> </p>
  //           <p>Product Price :<span>{item.price}</span> </p>
  //           <button type='button' >Edit</button>
  //           <button type='button'>Delete</button>
  //       </div>

export default ProductHeaders