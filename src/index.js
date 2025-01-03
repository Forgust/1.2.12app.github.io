import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";

import Footer from "./component/footer";
import NewTaskForm from "./component/new-task-form/";
import TodoList from "./component/task-list";

const App = () => {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TodoList />
        <Footer />
      </section>
    </section>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<App />);
