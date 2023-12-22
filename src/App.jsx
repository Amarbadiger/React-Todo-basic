import AppName from "./components/AppName";
import Addtodo from "./components/addtodo";
import Todoitems from "./components/TodoItems";
function App() {
  const todoitemsArray = [
    {
      name: "buymilk",
      dueDate: "12/12/2023",
    },
    {
      name: "go home",
      dueDate: "12/12/2023",
    },
    {
      name: "hello",
      dueDate: "12/12/2023",
    },
    {
      name: "hey",
      dueDate: "12/12/2023",
    },
  ];
  return (
    <center>
      <div className="main">
        <AppName />
        <Addtodo />
        <Todoitems todo={todoitemsArray}></Todoitems>
      </div>
    </center>
  );
}

export default App;
