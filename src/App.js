import TodoProvider from "./context";
import List from "./list";
import Navbar from "./navbar";
import Todo from "./todo";

const App = () => {
  return (
    <div className="App">
      <TodoProvider>
        <Navbar />
        <Todo />
        <List />
      </TodoProvider>
    </div>
  );
};

export default App;
