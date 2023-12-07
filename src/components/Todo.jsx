import { useState } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

function Todo() {
  //todos array
  const [todos, SetTodo] = useState([]);
  //object of values
  const [newTodo, setNewTodo] = useState({
    id: 0,
    title: "",
    description: "",
  });
  //set edit id
  const [editingId, setEditingId] = useState(null);
  //validate errors
  const [validateErrors, setValidateErrors] = useState({});
  //HandleInputChange
  const HandleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTodo({ ...newTodo, [name]: value });
  };
  //HandleSubmit
  const HandleSubmit = (e) => {
    e.preventDefault();
    //basic vslidation
    const errors = {};
    if (newTodo.title.trim() === "") {
      errors.title = "Title is required";
    }
    if (newTodo.description.trim() === "") {
      errors.description = "Descriptionis required";
    }
    if (Object.keys(errors).length > 0) {
      setValidateErrors(errors);
      return;
    }
    //edit todo
    if (editingId !== null) {
      SetTodo(
        todos.map((todo) =>
          todo.id === editingId ? { ...newTodo, id: editingId } : todo
        )
      );
      console.log(todos);
      setEditingId(null);
    }
    //set todo
    else {
      SetTodo([...todos, { ...newTodo, id: Date.now() }]);
    }
    setNewTodo({ id: 0, title: "", description: "" });
    setValidateErrors({});
  };

  //handle edit
  function handleEdit(id) {
    const todoToedit = todos.find((todo) => todo.id === id);
    setNewTodo(todoToedit);
    setEditingId(id);
    setValidateErrors({});
  }
  //handle delete
  const handleDelete = (id) => {
    SetTodo((todos) => todos.filter((todo) => todo.id !== id));
  };
  return (
    <div
      style={{
        backgroundColor: "rgba(40, 1, 117, 0.37)",
        paddingBottom: "22.8rem",
      }}
    >
      <AddTask
        HandleInputChange={HandleInputChange}
        newTodo={newTodo}
        HandleSubmit={HandleSubmit}
        validateErrors={validateErrors}
        editingId={editingId}
      />

      <div
        style={{
          display: "",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {todos.map((todo) => (
          <ListTask
            key={todo.id}
            todos={todo}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;
