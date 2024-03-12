import {useState} from "react";

import Folder from "./folder";
import {folderData} from "../../constants/folder";
import useTraverseTree from "../../hooks/use-traverse-tree";
import "./style.css";
import BackHome from "../back-home";

const FileExplorer = () => {
  const [explorerData, setExplorerData] = useState(folderData);

  const {insertNode} = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <>
      <BackHome title="File Explorer" />
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </>
  );
};

export default FileExplorer;
