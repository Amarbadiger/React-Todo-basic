function Item1({ todoName, todoDate }) {
  return (
    <div className="row">
      <div className="col-5">{todoName}</div>
      <div className="col-5">{todoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger delete">
          delete
        </button>
      </div>
    </div>
  );
}
export default Item1;
