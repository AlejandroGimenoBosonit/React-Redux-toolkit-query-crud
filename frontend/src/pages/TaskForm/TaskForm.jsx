import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { useCreateTaskMutation } from "../../api/appSlice";

import "./TaskForm.css";

const TaskForm = () => {
  const [createTask] = useCreateTaskMutation();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const params = useParams();

  const checkHandler = () => setChecked(!checked);

  const handleSubmit = (e) => {
    e.preventDefault();

    // prepare data
    const name = e.target.elements.name.value.trim();
    const description = e.target.elements.description.value.trim();
    const completed = checked;

    // console.log(name, description, completed);
    createTask({ name, description, completed });

    // navigate
    navigate("/");
  };

  return (
    <Card className="card-container" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{params.id ? "Edit" : "Create"} Task </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Task Data</Card.Subtitle>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            // not neccessary
            // onChange={handleChange}
            // value={task.title}
            autoFocus
          />
          <textarea
            name="description"
            placeholder="Description"
            // not neccessary
            // onChange={handleChange}
            // value={task.description}
          ></textarea>

          <div className="check-completed">
            <input
              type="checkbox"
              id="completed"
              checked={checked}
              onChange={checkHandler}
            />
            <label htmlFor="completed"> Completed?</label>
          </div>

          <Button variant="success" type="submit">
            {params.id ? "Edit" : "Create"} Task
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
};

export default TaskForm;
