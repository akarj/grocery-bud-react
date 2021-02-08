// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppStyles from "./App.module.css";

function App() {
  return (
    <div className={AppStyles.Background}>
      <section className={AppStyles.MainSection}>
        <input type="text" className="text" />
        <label htmlFor="text">Submit</label>
      </section>
    </div>
  );
}

export default App;
