// import redux toolkit query slice to use our http request functions
import {
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
} from "../../api/appSlice";
import { Button } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../Error/Error";
import "./TaskList.css";

const TaskList = () => {
  // redux toolkit query request result
  const { data: tasks, isError, isLoading, error } = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  const handleDelete = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <Error error={error} />
      ) : (
        <div className="list-container">
          <ListGroup className="list-group" as="ol" numbered>
            {tasks.map((task) => (
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start task-item"
                key={task.id}
              >
                <div className="ms-2 me-auto task-info">
                  <header>
                    <h3 className="fw-bold task-title">
                      {task.name.replace(/\w\S*/g, function (txt) {
                        return (
                          txt.charAt(0).toUpperCase() +
                          txt.substr(1).toLowerCase()
                        );
                      })}
                    </h3>
                  </header>

                  <p className="task-desc">{task.description}</p>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id={task.id}
                    checked={task.completed}
                    onChange={(e) => {
                      updateTask({ ...task, completed: e.target.checked });
                    }}
                  />
                  <label htmlFor={task.id}>Completed</label>
                </div>
                <div className="badge">
                  <Badge bg="danger">
                    <Button
                      type="button"
                      variant="danger"
                      className="task-button"
                      onClick={() => handleDelete(task.id)}
                    >
                      Done!
                    </Button>
                  </Badge>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )}
    </>
  );
};

export default TaskList;
