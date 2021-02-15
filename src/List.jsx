import ListStyle from "./List.module.css";
import Button from "react-bootstrap/Button";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

const List = ({ children, editItem, removeItem }) => {
  const { id, item } = children;

  return (
    <div className={ListStyle.listDivision}>
      <div className={ListStyle.Text}>{item}</div>
      <div className={ListStyle.buttons}>
        <Button
          variant="outline-dark"
          className={ListStyle.edit}
          onClick={() => editItem(id)}
        >
          <AiFillEdit />
        </Button>
        <Button
          variant="outline-dark"
          className={ListStyle.delete}
          onClick={() => removeItem(id)}
        >
          <MdDeleteForever />
        </Button>
      </div>
    </div>
  );
};

export default List;
