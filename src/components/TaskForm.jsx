import { useEffect, useState } from "react";
import { connect } from "react-redux";

import * as action from "./../actions/index";

function TaskForm(props) {
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: false,
  });
  useEffect(() => {
    if (props.itemEditing) {
      setTask({
        id: props.itemEditing.id,
        name: props.itemEditing.name,
        status: props.itemEditing.status,
      });
    }
    if (!props.itemEditing) {
      setTask({
        id: "",
        name: "",
        status: 0,
      });
    }
  }, [props.itemEditing]);
  const onClose = () => {
    props.onClose();
  };

  const onChange = (event) => {
    var target = event.target;
    var value = target.value;
    var name = target.name;

    setTask({
      ...task,
      [name]: value,
    });
  };
  const onClear = () => {
    setTask({
      id: "",
      name: "",
      status: false,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.onSaveTask(task);
    onClear();
    onClose();
  };

  if (!props.isDisplay) return "";

  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title">
          {task.id !== "" ? "Sửa Công Việc" : "Thêm Công Việc"}
          <span className="fa fa-times-cricle text-right" onClick={onClose}>
            <i class="fas fa-window-close"></i>
          </span>
        </h3>
      </div>
      <div className="panel-body">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Tên :</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={task.name}
              onChange={onChange}
            />
          </div>
          <label>Trạng Thái :</label>

          <select
            className="form-control"
            name="status"
            value={task.status}
            onChange={onChange}
          >
            <option value={true}>Kích Hoạt</option>
            <option value={false}>Ẩn</option>
          </select>
          <br />
          <div className="text-center">
            <button type="submit" className="btn btn-warning">
              {task.id !== "" ? "Sửa" : "Thêm "}
            </button>
            &nbsp;
            <button type="button" className="btn btn-danger" onClick={onClear}>
              Hủy Bỏ
            </button>
          </div>
        </form>
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
    onSaveTask: (task) => {
      dispatch(action.saveTask(task));
    },
    onCloseForm: () => {
      dispatch(action.closeForm());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
