import { UseAddProduct } from '../config/firebase';

import React, { useState, useEffect } from 'react';

function AddProduct() {
  const [product, setProduct] = useState({ id: '', brand: '', desc: '' });
  const handleChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmitProduct = () => {
    UseAddProduct(product.id, product.brand, product.desc);
  };

  return (
    <><br />Add product page
      <div>
        <div>
          <label>
            id <input name="id" type="text" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            brand <input name="brand" type="text" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            desc <input name="desc" type="text" onChange={handleChange} />
          </label>
        </div>

        <div>
          <button onClick={handleSubmitProduct}>Ekle</button>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
