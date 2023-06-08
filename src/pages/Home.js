import Product from "./Product";

const Home = () => {
  return (
    <>
      <div className="container">
        {/* product list by category*/}

        <div className="products-rand">
          <h2 className="title"> Just For you </h2>
        </div>
      </div>
      <Product limit={10} />
    </>
  );
};

export default Home;
