import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";
import * as action from "./../actions/index";

function TaskList(props) {
  const [filter, setFilter] = useState({
    name: "",
    status: -1,
  });

  useEffect(() => {
    props.onFilter(filter);
  }, [filter]);

  const onChange = (event) => {
    const { name, value } = event.target;

    setFilter({
      ...filter,
      [name]: name === "status" ? Number(value) : value,
    });
  };
  var { tasks, filterTable } = props;
  if (filterTable) {
    if (filterTable.name) {
      tasks = tasks.filter((task) => {
        return (
          task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1
        );
      });
      console.log(tasks);
    }
    tasks = tasks.filter((task) => {
      if (filterTable.status === -1) {
        return task;
      } else {
        return task.status === (filterTable.status === 1 ? true : false);
      }
    });
  }
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-15">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                className="form-control"
                name="name"
                value={filter.name}
                onChange={onChange}
              />
            </td>
            <td>
              <select
                className="form-control"
                name="status"
                value={filter.status}
                onChange={onChange}
              >
                <option value={-1}>Tất Cả</option>
                <option value={0}>Ẩn</option>
                <option value={1}>Kích Hoạt</option>
              </select>
            </td>
            <td></td>
          </tr>
          {tasks &&
            tasks.map((task, index) => {
              return (
                <TaskItem key={task.id} index={index} task={task}></TaskItem>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    filterTable: state.filter,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilter: (filter) => {
      dispatch(action.Filter(filter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
