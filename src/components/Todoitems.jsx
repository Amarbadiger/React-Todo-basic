import Item1 from "./Item1";
function Todoitems({ todo }) {
  return (
    <>
      {todo.map((item) => (
        <Item1
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        ></Item1>
      ))}
    </>
  );
}
export default Todoitems;
