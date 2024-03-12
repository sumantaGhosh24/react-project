import {useState, useEffect} from "react";

import BackHome from "../back-home";
import "./index.css";

const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleClick = (event) => {
    setShowDropdown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  };

  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <>
      <BackHome title="Search Autocomplete" />
      <div className="search">
        {error && <h3>{error}</h3>}
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <input
            value={searchParam}
            onChange={handleChange}
            name="search-users"
            placeholder="Search user..."
            className="search__input"
          />
        )}
        {showDropdown && (
          <ul className="search__list">
            {filteredUsers &&
              filteredUsers.length &&
              filteredUsers.map((item, index) => (
                <li onClick={handleClick} key={index} className="search__item">
                  {item}
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchAutocomplete;
