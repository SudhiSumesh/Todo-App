import "../styles/listTask.css";

const ListTask = ({ todos, handleEdit, handleDelete }) => {
  return (
    <>
      <div className="container">
        <div className="task-container">
          <div className="letter">
            {todos.title.trim().charAt().toUpperCase()}
          </div>
          <div className="content">
            <div className="title">{todos.title}</div>
            <div className="description">{todos.description}</div>
          </div>
          <div className="edit-delete">
            <button className="edit" onClick={() => handleEdit(todos.id)}>
              <i className="fa-solid fa-pen-to-square fa-lg"></i>
            </button>
            <button className="delete" onClick={() => handleDelete(todos.id)}>
              <i className="fa-solid fa-trash fa-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListTask;
