import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ProductCategory = () => {
  const { product } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();

    console.log(data);

    setProducts(data);
  };

  const filteredProducts = products.filter((item) => item.category === product);

  return (
    <div className="container">
      <h2 className="title"> {product} </h2>

      {filteredProducts.map((item) => {
        return (
          <>
            <ul className="product-item">
              <Link
                to={`/productDetail/${item.id}`}
                className="product-item-list"
              >
                <li className="product-list" key={item.id}>
                  <div className="product-title">
                    {item.length === 30
                      ? item.title
                      : item.title.substring(0, 30) + "..."}
                  </div>
                  <div className="image-s">
                    <img src={item.image} alt={item.image} />
                  </div>
                  <p> Price : ${item.price} </p>
                </li>
              </Link>
            </ul>
          </>
        );
      })}
    </div>
  );
};

export default ProductCategory;
