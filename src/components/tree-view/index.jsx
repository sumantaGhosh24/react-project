import Menu from "./menu";
import BackHome from "../back-home";
import {treeViewData} from "../../constants/tree-view";
import "./index.css";

const TreeView = () => {
  return (
    <>
      <BackHome title="Tree View" />
      <div className="menu__container">
        <Menu list={treeViewData} />
      </div>
    </>
  );
};

export default TreeView;
