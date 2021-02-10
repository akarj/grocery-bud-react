import ListStyle from "./List.module.css";
import Button from "react-bootstrap/Button";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

const List = ({ children, editItem, removeItem }) => {
  const { id, item } = children;

  return (
    <>
      <div className={ListStyle.article}>
        <p className={ListStyle.p}>
          <span className={ListStyle.span}> {item}</span>
          <span className="ButtonSection">
            <Button variant="outline-dark" onClick={() => editItem(id)}>
              <AiFillEdit />
            </Button>
            <Button variant="outline-dark" onClick={() => removeItem(id)}>
              <MdDeleteForever />
            </Button>
          </span>
        </p>
      </div>
    </>
  );
};

export default List;
