import * as types from'./../constants/ActionsType';
import RandomString from 'randomstring';

var data =JSON.parse(localStorage.getItem("tasks"));
var initialState =data ? data :[];
 var findIndex = (tasks,id) => {
    
    var x = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        x = index;
      }
    });
    return x;
  };


var myReducer=(state = initialState,action)=>{
     switch(action.type){
         case types.LIST_ALL:
             return state;
        case types.ADD_TASK:
            var newTask={
                id:RandomString.generate(10),
                name :action.task.name,
                status : action.task.status === 'true' ? true :false,
            }
            state.push(newTask);
            localStorage.setItem('tasks',JSON.stringify(state))
            return [...state];
       case types.UPDATE_STATUS:
          
    var index = findIndex(state,action.id);
            var tasks={...state};
            // tasks[index].status=!tasks[index].status;
    localStorage.setItem("tasks", JSON.stringify(tasks));
        default: return state;
     }
     

    return state;
}
export default myReducer;