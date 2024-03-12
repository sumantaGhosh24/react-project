import {useState, useEffect} from "react";

import BackHome from "../back-home";
import "./style.css";

const ITEMS_PER_PAGE = 6;
const API_ENDPOINT = "https://hacker-news.firebaseio.com/v0";

const JobBoard = () => {
  const [items, setItems] = useState([]);
  const [itemIds, setItemIds] = useState(null);
  const [fetchingDetails, setFetchingDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  async function fetchItems(currPage) {
    setCurrentPage(currPage);
    setFetchingDetails(true);

    let itemsList = itemIds;
    if (itemsList === null) {
      const response = await fetch(`${API_ENDPOINT}/jobstories.json`);
      itemsList = await response.json();
      setItemIds(itemsList);
    }

    const itemIdsForPage = itemsList.slice(
      currPage * ITEMS_PER_PAGE,
      currPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );

    const itemsForPage = await Promise.all(
      itemIdsForPage.map((itemId) =>
        fetch(`${API_ENDPOINT}/item/${itemId}.json`).then((response) =>
          response.json()
        )
      )
    );
    setItems([...items, ...itemsForPage]);

    setFetchingDetails(false);
  }

  useEffect(() => {
    if (currentPage === 0) fetchItems(currentPage);
  }, [currentPage]);

  return (
    <>
      <BackHome title="Job Board" />
      {itemIds === null || items.length < 1 ? (
        <p>Loading...</p>
      ) : (
        <div className="jb__container">
          <div className="jb__list">
            {items.map((item) => (
              <div key={item.id} className="jb__item">
                <a
                  className={item.url ? "" : "inactiveLink"}
                  href={item.url}
                  target="_blank"
                  rel="noopener"
                >
                  {item.title}
                </a>
                <span>
                  By {item.by} · {new Date(item.time * 1000).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
          {items.length > 0 &&
            currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE < itemIds.length && (
              <button
                disabled={fetchingDetails}
                onClick={() => fetchItems(currentPage + 1)}
                className="jb__button"
              >
                {fetchingDetails ? "Loading..." : "Load more jobs"}
              </button>
            )}
        </div>
      )}
    </>
  );
};

export default JobBoard;
