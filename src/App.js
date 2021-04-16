import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as action from "./actions/index";

function App(props) {
  const [tasks, setTasks] = useState([]);
  const [taskEditing, setTaskEditing] = useState(null);
  const [filter, setFilter] = useState({
    name: "",
    status: -1,
  });
  useEffect(() => {}, []);
  const handleAddTask = () => {
    if (props.itemEditing && props.itemEditing != null) {
      props.onOpenForm();
    } else {
      props.onToggleForm();
    }
    props.onClearTask({
      id: "",
      name: "",
      status: false,
    });
  };
  // const onGenerateData = () => {
  //   var tasks = [
  //     {
  //       id: RandomString.generate(10),
  //       name: "hoc react",
  //       status: true,
  //     },
  //     {
  //       id: RandomString.generate(10),
  //       name: "hoc react",
  //       status: true,
  //     },
  //     {
  //       id: RandomString.generate(10),
  //       name: "hoc react",
  //       status: true,
  //     },
  //   ];
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // };

  const onClose = () => {
    props.onCloseForm();
  };
  const onShowForm = () => {
    props.onOpenForm();
  };

  const findIndex = (id) => {
    var item = [...tasks];
    var x = -1;
    item.forEach((task, index) => {
      if (task.id === id) {
        x = index;
      }
    });
    return x;
  };
  // const onUpdateStatus = (id) => {
  //   var item = [...tasks];
  //   var index = findIndex(id);
  //   if (index !== -1) {
  //     item[index].status = tasks[index].status === 0 ? 0 : 1;
  //     setTasks(item);
  //   }
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // };

  const onUpdate = (id) => {
    var item = [...tasks];
    var index = findIndex(id);
    var taskEdit = item[index];
    setTaskEditing(taskEdit);
    onShowForm();
  };
  const onFilter = (filterName, filterStatus) => {
    var status = parseInt(filterStatus, 10);
    setFilter({
      name: filterName.toLowerCase(),
      status: status,
    });
  };

  useEffect(() => {
    filterTask();
  }, [filter]);

  const filterTask = () => {
    // if (filter) {
    //   if (localStorage && localStorage.getItem("tasks")) {
    //     var tasks = JSON.parse(localStorage.getItem("tasks"));
    //   }
    //   setTasks(tasks);
    //   var item = [...tasks];
    //   if (filter.name) {
    //     item = tasks.filter((task) => {
    //       return task.name.toLowerCase().indexOf(filter.name) !== -1;
    //     });
    //     setTasks(item);
    //   }
    //   item = tasks.filter((task) => {
    //     if (filter.status === -1) {
    //       return task;
    //     } else {
    //       return task.status === filter.status;
    //     }
    //   });
    //   setTasks(item);
    // }
  };

  const onSearch = (key) => {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
    }
  };
  return (
    <div className="container">
      <div className="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr />
        {/* <button
        type="button"
        className="btn btn-danger ml-15"
        onClick={onGenerateData}
        ></button> */}
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <TaskForm onClose={onClose}></TaskForm>
        </div>
        <div
          className={
            props.isDisplay
              ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
              : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
          }
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddTask}
          >
            <span class="fa fa-plus mr-5"></span>Thêm Công Việc
          </button>

          <Control></Control>
          <div className="row mt-15">
            <TaskList onUpdate={onUpdate} onFilter={onFilter}></TaskList>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isDisplay: state.isDisplay,
    itemEditing: state.itemEditing,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(action.toggleForm());
    },
    onCloseForm: () => {
      dispatch(action.closeForm());
    },
    onOpenForm: () => {
      dispatch(action.openForm());
    },
    onClearTask: (task) => {
      dispatch(action.editTask(task));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
