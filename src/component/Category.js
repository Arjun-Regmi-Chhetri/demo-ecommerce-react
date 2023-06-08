import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Category = () => {
  const [product, setProduct] = useState([]);

  // to navigate categoris

  const [navigate, setNavigate] = useState(false);

  const handleClick = () => {
    setNavigate((prevState) => !prevState);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products/categories`);
    const data = await api.json();

    console.log(data);

    setProduct(data);
  };
  const listCategory = product.map((product, index) => {
    return (
      <>
        <ul className="category-item">
          <li className="category-list">
            <div className="image"></div>
            <Link
              to={`/category/${product}`}
              onClick={navigate ? handleClick : null}
            >
              <div className="categoriey-title">{product}</div>
            </Link>
          </li>
        </ul>
        <Outlet />
      </>
    );
  });
  return (
    <div className="container">
      {/* product list by category*/}

      <div className="category">
        <h2>Categories</h2>
        <button onClick={handleClick} className="btn-icon">
          <FontAwesomeIcon icon={faBars} className="font-icon" />
        </button>
        <div className="category-items category-show">
          {navigate ? listCategory : null}
        </div>
        <div className="category-items category-hide">{listCategory}</div>
      </div>
    </div>
  );
};

export default Category;
