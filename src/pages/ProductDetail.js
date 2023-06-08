import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ name }) => {
  const { productId } = useParams();
  console.log(productId);
  const [product, setProduct] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="title">
          {name} > {product.category}{" "}
        </h2>

        <div className="product-detail">
          <div className="product-l">
            <div className="image-s">
              <img src={product.image} alt={product.image} />
            </div>
          </div>
          <div className="product-r">
            <h2 className="title"> {product.title} </h2>
            <hr />
            <p className="price">
              {" "}
              Price : <span className="green"> ${product.price} </span>
            </p>
            <div className="subscription">
              <button>Buy Now </button>
              <button>Add Cart</button>
            </div>
            <hr />

            <div className="description">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
