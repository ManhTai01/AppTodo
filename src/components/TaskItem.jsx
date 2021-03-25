function TaskItem(props) {
  var index = props.index;
  var task = props.task;
  const onUpdateStatus = () => {
    props.onUpdateStatus(props.task.id);
  }
  const onDelete = () => {
    props.onDelete(props.task.id)
  }
   const onUpdate = () => {
    props.onUpdate(props.task.id)
  }
    return (
        <tr>
            <td>  {index + 1 }</td>
            <td>{ task.name}</td>
                    <td className="text-center">
                <span onClick={onUpdateStatus} className={task.status === 1 ? 'label label-danger' : 'label label-success'}>{ task.status === 1 ?"Kích Hoạt" :"Ẩn"}  </span>
                    </td>
                    <td className="text-center">
                      <button type="button" className="btn btn-warning" onClick={onUpdate}>
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
export default TaskItem;