import { useState } from "react";

export default function App() {
  const toDo = [
    { name: "task1", description: "description1", iscompleted: false },
    { name: "task1", description: "description1", iscompleted: true },
    { name: "task1", description: "description1", iscompleted: false },
  ];
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [toDoList, setToDoList] = useState(toDo);
  const [edit, setEdit] = useState(false);
  const [editedTask, setEditedTask] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || description === "") return;

    const newTask = { name, description, iscompleted: false };

    setToDoList([...toDoList, newTask]);

    setName("");
    setDescription("");
  }
  function handleDelete(index) {
    const updatedToDoList = [...toDoList];
    updatedToDoList.splice(index, 1);
    setToDoList(updatedToDoList);
  }
  function handleCompletedState(index) {
    const updatedToDoList = [...toDoList];
    updatedToDoList[index].iscompleted = !updatedToDoList[index].iscompleted;
    setToDoList(updatedToDoList);
  }
  function ShowNotCompleted() {
    const updatedToDoList = [...toDoList];
    const ShowNotCompleted = updatedToDoList.filter(
      (v) => v.iscompleted === false
    );
    setToDoList(ShowNotCompleted);
  }

  function handleEdit(index) {
    setEdit(!edit);
    const updatedToDoList = [...toDo];
    updatedToDoList[index] = editedTask;
    setToDoList(updatedToDoList);
  }

  return (
    <>
      <div className="container-fluid text-success h4 mt-5 py-4">
        <p style={{ textAlign: "center" }}>My Todo</p>
      </div>
      <div className="d-flex container-fluid justify-content-around">
        <form>
          <input
            className="ms-5"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="ms-5"
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="ms-5 btn btn-success "
            type="Submit"
            value="submit"
            onClick={(e) => handleSubmit(e)}
          />
        </form>
      </div>
      <button
        onClick={() => ShowNotCompleted()}
        className={`btn btn-success my-2 float-end me-5`}
      >
        Show Not Completed
      </button>
      <div>
        <ul className="nav">
          {toDoList.map((tD, index) => (
            <ToDoCard
              tD={tD}
              index={index}
              handleDelete={handleDelete}
              handleCompletedState={handleCompletedState}
              setEdit={setEdit}
              edit={edit}
              editedTask={editedTask}
              handleEdit={handleEdit}
            />
          ))}
        </ul>
      </div>
      {edit && (
        <Edit setEditedTask={setEditedTask} setEdit={setEdit} edit={edit} />
      )}
    </>
  );
}

function ToDoCard({
  tD,
  index,
  handleDelete,
  handleCompletedState,
  setEdit,
  edit,
  editedTask,
  handleEdit,
}) {
  return (
    <>
      <li>
        <div
          class="card"
          style={{ width: "300px", text: "white", backgroundColor: "#CDFFDD" }}
        >
          <div class="card-body">
            <p class="card-title h5 py-2" style={{ textAlign: "left" }}>
              Name: {tD.name}
            </p>
            <p
              class="card-text"
              style={{ textAlign: "left", fontSize: "16px" }}
            >
              Description: {tD.description}
            </p>{" "}
            <p
              class="card-text"
              style={{ textAlign: "left", fontSize: "16px" }}
            >
              Status: {tD.iscompleted ? "Completed" : "Not Completed"}
            </p>
            Change Status:
            <button
              onClick={() => handleCompletedState(index)}
              className={`btn ${
                tD.iscompleted ? "btn-success" : "btn-danger"
              } my-2`}
            >
              {tD.iscompleted ? "Completed" : "Not Completed"}
            </button>
            <div className="ms-5">
              <button
                className="btn btn-danger"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="btn btn-success ms-5"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

function Edit({ setEditedTask, edit, setEdit }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || description === "") return;
    const newTask = { name, description, iscompleted: false };
    setEditedTask(newTask);
    setName("");
    setDescription("");
    setEdit(!edit);
  }
  return (
    <div className="container-fluid ">
      <form>
        <input
          className="ms-5"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="ms-5"
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="ms-5 btn btn-success "
          type="Submit"
          value="submit"
          onClick={(e) => handleSubmit(e)}
        />
      </form>
    </div>
  );
}
