import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Page/Menu";
import Content from "./Layout/Content";
import Head from "./Layout/Head";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import MealReducer from "./Redux/MealReducer";
import CategoryReducer from "./Redux/CategoryReducer";
import AlertReducer from "./Redux/AlertReducer";
const rootReducer = combineReducers({
  Meal: MealReducer,
  Category: CategoryReducer,
  Alert: AlertReducer
});
const store = createStore(rootReducer);
function App() {
  // window.host = "http://192.168.1.111:8000/api";
  // window.host = "http://192.168.43.117:8000/api";
  window.host = "http://192.168.1.102:8000/api";

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
        <Head />
          <Routes>
            <Route path="/menu" element={<Content content="Menu" />} />
          </Routes>
          <Routes>
            <Route path="/cart" element={<Content content="Cart" />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
