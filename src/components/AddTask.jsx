import "../styles/addTask.css";
const AddTask = ({
  HandleInputChange,
  newTodo,
  HandleSubmit,
  validateErrors,
  editingId,
}) => {
  return (
    <>
      <div className="add-task-container">
        <div className="title">
          <div>Todo </div>
          <i className="fa-solid fa-clipboard-list fa-2xl"></i>
        </div>
        <form action="" onSubmit={HandleSubmit}>
          <div className="input-container">
            <input
              type="text"
              name="title"
              value={newTodo.title}
              placeholder="Add task title"
              onChange={HandleInputChange}
            />
            {validateErrors.title && (
              <div className="error-div">{validateErrors.title}</div>
            )}
          </div>
          <div className="input-container">
            <textarea
              name="description"
              value={newTodo.description}
              placeholder="Description"
              onChange={HandleInputChange}
            ></textarea>
            {validateErrors.description && (
              <div className="error-div">{validateErrors.description}</div>
            )}
          </div>
          <button type="submit">
            {editingId !== null ? "Save Edit" : "Add Task"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTask;
