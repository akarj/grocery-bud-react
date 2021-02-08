import ListStyle from "./List.module.css";

import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

const List = ({}) => {
  return (
    <>
      <article className="grocery-item">
        Grocery Item link
        <button className="edit-btn">
          <AiFillEdit />
        </button>
        <button className="delete-btn">
          <MdDeleteForever />
        </button>
      </article>
    </>
  );
};

export default List;
