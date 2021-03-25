import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

function TaskList(props) {
  const [filter, setFilter] = useState({
    name: '',
    status: -1,
  });
  const onChange = (event)=> {
    var target = event.target;
    var name = target.name;
    var value = target.value;

    
    setFilter({
      ...filter,
      [name]:value

    })
    props.onFilter(
      name === "name" ? value : filter.name,
      name === "status" ? value : filter.status
    )
   
  

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
          {
            props.tasks &&
            props.tasks.map((task, index) => {
            return (
              <TaskItem
                key={task.id}
                index={index}
                task={task}
                onUpdateStatus={props.onUpdateStatus}
                onUpdate={props.onUpdate}
                onDelete={props.onDelete}
              ></TaskItem>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default TaskList;
