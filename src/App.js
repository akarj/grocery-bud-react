// import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppStyles from "./App.module.css";
import List from "./List";
import Alert from "./Alert";

function App() {
  return (
    <div className={AppStyles.Background}>
      <div className={AppStyles.listSection}>
        {<Alert />}
        <span className="AppStyles"></span>
        <h3>Grocery Bud</h3>
        <section className={AppStyles.MainSection}>
          <input type="text" className="text" placeholder="Add an item..." />
          <button name="submit-button">Submit</button>
        </section>
        <div className="AppStyles.ListItems"></div>
      </div>
    </div>
  );
}

export default App;
