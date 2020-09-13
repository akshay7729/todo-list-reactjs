import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Search from "./Components/Search";
import AddTodoList from "./Components/List/AddTodoList";
import CompleteTodoList from "./Components/List/CompleteTodoList";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./Store";
import { persistor } from "./Store";
import Container from "react-bootstrap/Container";

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Container>
            <Search />
            <AddTodoList />
            <CompleteTodoList />
          </Container>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
