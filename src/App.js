// import "./App.css";
import React, { useState, useEffect } from "react";
import AppStyles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import List from "./List";
import Alert from "./Alert";
import { MdAirlineSeatLegroomExtra } from "react-icons/md";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

function App() {
  const [item, itemEdit] = useState("");
  const [id, idSetter] = useState(0);
  const [buttonType, buttonTypehandler] = useState("submit");
  const [list, addToList] = useState(getLocalStorage);
  const [editingItemsID, editItem] = useState(null);
  const [notification, notificationSetter] = useState({
    show: false,
    type: "",
    message: "",
  });

  const clickHandler = (e) => {
    e.preventDefault();

    if (item) {
      showNotification(true, "success", "item added to the list");
      const newItem = {
        id: new Date().getTime().toString(),
        item: item,
      };
      addToList([...list, newItem]);
      itemEdit("");
    }
  };

  const showNotification = (show = false, type = "", message = "") => {
    notificationSetter({ show, type, message });
  };

  const clearAllButtonHandler = () => {
    showNotification(true, "success", "List Cleared");
    addToList([]);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <div className={AppStyles.Background}>
      <div className={AppStyles.listSection}>
        <header className={AppStyles.header}>Grocery Bud</header>
        {notification.show && (
          <Alert
            key="Alert-section"
            {...notification}
            removeNotification={showNotification}
            list={list}
          />
        )}
        <span className="AppStyles"></span>
        <form className={AppStyles.MainSection} onSubmit={clickHandler}>
          <input
            type="text"
            className="text"
            placeholder="Add an item..."
            value={item}
            onChange={(text) => itemEdit(text.target.value)}
          />
          <Button
            as="input"
            type="submit"
            value={buttonType}
            onClick={clickHandler}
          />
        </form>
        {list.length > 0 && (
          <div className="AppStyles.ListItems">
            {list.map((item) => (
              <List item={item.item} key={item.id} />
            ))}

            <Button
              type="outilne-submit"
              variant="outline-dark"
              onClick={clearAllButtonHandler}
            >
              Clear All
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
