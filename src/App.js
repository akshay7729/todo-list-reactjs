import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Search from "./Components/Search";
import AddTodoList from "./Components/List/AddTodoList";
import CompleteTodoList from "./Components/List/CompleteTodoList";
import { Provider } from "react-redux";
import configureStore from "./Store";
import Container from "react-bootstrap/Container";

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Container>
          <Search />
          <AddTodoList />
          <CompleteTodoList />
        </Container>
      </div>
    </Provider>
  );
};

export default App;
