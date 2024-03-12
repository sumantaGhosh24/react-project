import {Link, useLocation} from "react-router-dom";

import BackHome from "../back-home";
import "./style.css";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  let breadcrumbPath = "";

  return (
    <>
      <BackHome title="Breadcrumbs" />
      <div className="breadcrumbs">
        <Link to="/" className="breadcrumb">
          Home
        </Link>
        {pathnames.map((name, index) => {
          breadcrumbPath += `/${name}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <span key={breadcrumbPath} className="breadcrumb">
              {" "}
              / {name}
            </span>
          ) : (
            <span key={breadcrumbPath} className="breadcrumb">
              {" "}
              / <Link to={breadcrumbPath}>{name}</Link>
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Breadcrumbs;
