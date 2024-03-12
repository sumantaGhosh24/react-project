import {useState, useEffect} from "react";
import BackHome from "../back-home";

import "./style.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await res.json();

    console.log(data);

    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <>
      <BackHome title="Pagination" />
      <div className="p__container">
        {products.length > 0 && (
          <div className="p__products">
            {products.slice(page * 10 - 10, page * 10).map((prod, index) => {
              return (
                <div key={prod.id + prod.title + index} className="p__product">
                  <h2>{prod.title}</h2>
                  <h4>{prod.description}</h4>
                  <h4>Category: {prod.category}</h4>
                  <h4>Brand: {prod.brand}</h4>
                  <h5>Stock: {prod.stock}</h5>
                  <h5>Rating: {prod.rating}</h5>
                  <h5>Price: {prod.price}</h5>
                  <h5>Discount Percentage: {prod.discountPercentage}</h5>
                </div>
              );
            })}
          </div>
        )}
        {products.length > 0 && (
          <div className="pagination">
            <span
              onClick={() => selectPageHandler(page - 1)}
              className={
                page > 1 ? "pagination__control" : "pagination__disable"
              }
            >
              ◀
            </span>
            {[...Array(products.length / 10)].map((_, i) => {
              return (
                <span
                  key={i}
                  className={
                    page === i + 1
                      ? "pagination__selected"
                      : "pagination__default"
                  }
                  onClick={() => selectPageHandler(i + 1)}
                >
                  {i + 1}
                </span>
              );
            })}
            <span
              onClick={() => selectPageHandler(page + 1)}
              className={
                page < products.length / 10
                  ? "pagination__control"
                  : "pagination__disable"
              }
            >
              ▶
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Pagination;
