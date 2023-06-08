import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Product = ({ limit, list }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();

      console.log(data);
      setProduct(data);
    };

    getData();
  }, []);

  const limitProduct = product.slice(0, limit);
  return (
    <>
      <div className="container">
        <h2>{list} </h2>

        {limitProduct.map((product) => {
          return (
            <ul className="product-item">
              <Link
                to={`/productDetail/${product.id}`}
                className="product-item-list"
              >
                <li className="product-list" key={product.id}>
                  <div className="product-title">
                    {product.title.length === 30
                      ? product.title
                      : product.title.substring(0, 30) + "..."}
                  </div>
                  <div className="image-s">
                    <img src={product.image} alt={product.image} />
                  </div>
                  <p> Price : ${product.price} </p>
                </li>
              </Link>
            </ul>
          );
        })}
        <Outlet />
      </div>
    </>
  );
};

export default Product;
