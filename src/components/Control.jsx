import Search from './Search';
import Sort from './Sort';


function Control(props) {
    return (
        <div class="row mt-15">
            <Search onSearch={props.onSearch}></Search>
            <Sort></Sort>    
         </div>
    );
}
export default Control;