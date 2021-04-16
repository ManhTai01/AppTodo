import { useState } from "react";
import { connect } from "react-redux";
import * as action from "./../actions/index";

function SearchForm(props) {
  const [key, setKey] = useState("");
  const onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    setKey(value);
  };
  const onSearch = () => {
    props.onSearch(key);
  };
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="input-group">
        <input
          type="text"
          value={key}
          className="form-control"
          placeholder="Nhập từ khóa..."
          onChange={onChange}
        />
        <span className="input-group-btn">
          <button className="btn btn-primary" type="button" onClick={onSearch}>
            <span className="fa fa-search mr-5"></span>Tìm
          </button>
        </span>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: (key) => {
      dispatch(action.search(key));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
