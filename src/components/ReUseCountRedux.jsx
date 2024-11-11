/* eslint-disable react/prop-types */
import { connect } from "react-redux";
function ReUseCountRedux({count}) {
  return (
    <div>
      <p>{count}</p>
    </div>
  );
}

const mapStateToProps=(state)=>({
  count: state.count
})

export default connect (mapStateToProps(ReUseCountRedux))