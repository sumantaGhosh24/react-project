import {useState, useEffect} from "react";

import BackHome from "../back-home";
import "./style.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BackHome title="Load More Data" />
      <div className="lmc__container">
        <div className="lmc__products">
          {products && products.length
            ? products.map((item, index) => (
                <div
                  key={item.id + item.title + index}
                  className="lmc__product"
                >
                  <h2>{item.title}</h2>
                  <h4>{item.description}</h4>
                  <h4>Category: {item.category}</h4>
                  <h4>Brand: {item.brand}</h4>
                  <h5>Stock: {item.stock}</h5>
                  <h5>Rating: {item.rating}</h5>
                  <h5>Price: {item.price}</h5>
                  <h5>Discount Percentage: {item.discountPercentage}</h5>
                </div>
              ))
            : null}
        </div>
        <button
          disabled={disableButton}
          onClick={() => setCount(count + 1)}
          className="lmc__button"
        >
          Load More Products
        </button>
        {disableButton ? (
          <p className="lmc__error">You have reached to 100 products</p>
        ) : null}
      </div>
    </>
  );
};

export default LoadMoreData;
