import {useState} from "react";

import BackHome from "../back-home";
import "./style.css";

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);

      const data = await res.json();

      if (data) {
        setUserData(data);
        setLoading(false);
        setUserName("");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <BackHome title="Github Profile Finder" />
      <div className="gpf__container">
        <div className="gpf__form">
          <input
            name="search-by-username"
            type="text"
            placeholder="Search Github Username..."
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            className="gpf__input"
          />
          <button onClick={handleSubmit} className="gpf__button">
            Search
          </button>
        </div>
        {userData ? (
          <div className="gpf__user">
            <img
              className="gpf__image"
              src={userData.avatar_url}
              alt={userData.name}
            />
            <p className="gpf__bio">{userData.bio}</p>
            <div className="gpf__box">
              <p>Followers : &nbsp;</p>
              <p>{userData.followers}</p>
            </div>
            <div className="gpf__box">
              <p>Following : &nbsp;</p>
              <p>{userData.following}</p>
            </div>
            <div className="gpf__box">
              <p>Public Gists : &nbsp;</p>
              <p>{userData.public_gists}</p>
            </div>
            <div className="gpf__box">
              <p>Public Repository : &nbsp;</p>
              <p>{userData.public_repos}</p>
            </div>
            <div className="gpf__box">
              <p>Created At : &nbsp;</p>
              <p>{new Date(userData.created_at).toUTCString()}</p>
            </div>
            <div>
              <a href={userData.html_url} target="_blank">
                {userData.name}{" "}
              </a>
              <a href={userData.repos_url} target="_blank">
                Repository
              </a>
            </div>
          </div>
        ) : (
          <h2 className="gpf__alert">Search a valid username.</h2>
        )}
      </div>
    </>
  );
};

export default GithubProfileFinder;
