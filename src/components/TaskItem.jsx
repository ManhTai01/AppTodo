import { useEffect } from "react";
import { connect } from "react-redux";
import * as action from "./../actions/index";

function TaskItem(props) {
  var index = props.index;
  var task = props.task;
  const onUpdateStatus = () => {
    props.onUpdateStatus(props.task.id);
  };
  const onDelete = () => {
    props.onDelete(props.task.id);
  };
  const onEditTask = () => {
    props.onOpenForm();
    props.onEditTask(props.task);
  };
  return (
    <tr>
      <td> {index + 1}</td>
      <td>{props.task.name}</td>
      <td className="text-center">
        <span
          onClick={onUpdateStatus}
          className={
            task.status === true ? "label label-danger" : "label label-success"
          }
        >
          {task.status === true ? "Kích Hoạt" : "Ẩn"}{" "}
        </span>
      </td>
      <td className="text-center">
        <button type="button" className="btn btn-warning" onClick={onEditTask}>
          <span className="fa fa-pencil mr-5"></span>Sửa
        </button>
        &nbsp;
        <button type="button" className="btn btn-danger" onClick={onDelete}>
          <span className="fa fa-trash mr-5"></span>Xóa
        </button>
      </td>
    </tr>
  );
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: (id) => {
      dispatch(action.updateStatus(id));
    },
    onDelete: (id) => {
      dispatch(action.deleteTask(id));
    },
    onCloseForm: () => {
      dispatch(action.closeForm());
    },
    onOpenForm: () => {
      dispatch(action.openForm());
    },
    onEditTask: (task) => {
      dispatch(action.editTask(task));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
