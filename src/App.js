import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Page/Menu";
import Head from "./Layout/Head";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import CategoryReducer from "./Redux/CategoryReducer";
import MealReducer from "./Redux/MealReducer";

function App() {
  // window.host = "http://192.168.1.111:8000/api";
  window.host = "http://192.168.43.117:8000/api";
  const rootReducer = combineReducers({
    Meal: MealReducer,
    Category: CategoryReducer,
  });
  const store = createStore(rootReducer);
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Head />
        </Provider>
        <Routes>
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Routes>
          <Route path="/cart" element='' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
