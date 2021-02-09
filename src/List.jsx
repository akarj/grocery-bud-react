import ListStyle from "./List.module.css";
import Button from "react-bootstrap/Button";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

const List = ({ item }) => {
  return (
    <>
      <div className={ListStyle.article}>
        <p className={ListStyle.p}>
          <span className={ListStyle.span}> {item}</span>
          <span className="ButtonSection">
            <Button variant="outline-dark">
              <AiFillEdit />
            </Button>
            <Button variant="outline-dark">
              <MdDeleteForever />
            </Button>
          </span>
        </p>
      </div>
    </>
  );
};

export default List;
