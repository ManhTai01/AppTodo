import { useEffect, useState } from "react";

function TaskForm(props) {
  useEffect(() => {
    if (props.task) {
      setTask({
        id:props.task.id,
        name: props.task.name,
        status:props.task.status
      })
    } 
    if (!props.task) {
      setTask({
        id: '',
        name: '',
        status:0
      })
    }
  },[props.task])
  const onClose = () => {
    props.onClose();
  };
  const [task, setTask] = useState({
    name: "",
    status: 0,
  });
  const onChange = (event) => {
    var target = event.target;
    var value = target.value;
    var name = target.name;
    if (name === "status") {
      value=target.value === "1" ? 1 :0
    }
    setTask({
      ...task,
      [name]: value,
    });
  };
  const onClear = () => {
    setTask({
      name: '',
      status:0
    })
  }
  const onSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(task);
    onClear();
    onClose();
  };
  var { id } = task;
  return (
   
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title">
          {id !== '' ? 'Sửa Công Việc' : 'Thêm Công Việc'}
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
         
          <select className="form-control" 
            name='status'
            value={task.status}
            onChange={onChange}>
                  <option value={1} >Kích Hoạt</option>
            <option value={0}>Ẩn</option>
                </select> 
          <br />
          <div className="text-center">
            <button type="submit" className="btn btn-warning" >
              {id !== '' ? 'Sửa' : 'Thêm '}
            
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
export default TaskForm;
