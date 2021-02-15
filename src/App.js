// import "./App.css";
import React, { useState, useEffect } from "react";
import AppStyles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import List from "./List";
import Alert from "./Alert";

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
  const [id, idSetter] = useState(null);
  const [buttonType, buttonTypehandler] = useState("submit");
  const [list, addToList] = useState(getLocalStorage());
  const [editing, setEditItem] = useState(false);
  const [notification, notificationSetter] = useState({
    show: false,
    type: "",
    message: "",
  });

  const clickHandler = (e) => {
    e.preventDefault();
    if (!item) showNotification(true, "danger", "Please enter an Item");
    else if (editing) {
      addToList(
        list.map((ITEM) => (ITEM.id === id ? { ...ITEM, item: item } : ITEM))
      );
      buttonTypehandler("submit");
      itemEdit("");
      setEditItem(false);
      idSetter(null);
      showNotification(true, "success", "Item Edited in the List");
    } //
    else if (item) {
      const newItem = {
        id: new Date().getTime().toString(),
        item: item,
      };
      addToList([...list, newItem]);
      itemEdit("");

      showNotification(true, "success", "Item added to the list");
    }
  };

  const showNotification = (show = false, type = "", message = "") => {
    notificationSetter({ show, type, message });
  };

  const editItem = (id) => {
    const itemAfterEdit = list.find((ITEM) => ITEM.id === id);
    setEditItem(true);
    idSetter(id);
    itemEdit(itemAfterEdit.item);
    buttonTypehandler("Edit");
  };

  const removeItem = (id) => {
    addToList(list.filter((item) => item.id !== id));
    showNotification(true, "success", "Item Deleted");
  };

  const clearAllButtonHandler = () => {
    addToList([]);
    showNotification(true, "success", "List Cleared");
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
            {list.map((ITEM) => (
              <List key={ITEM.id} editItem={editItem} removeItem={removeItem}>
                {ITEM}
              </List>
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
