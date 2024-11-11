/* eslint-disable react/prop-types */
import { Increment, Decrement, Reset } from "../actions/CountActions";
import { connect } from "react-redux";

function CountSuscribe({count, Increase, decrease, reset}) {
  return (
    <div>
    <p>{count}</p>
    <button onClick={Increase}>increase</button>
      <button onClick={decrease}>Decrease</button>
      <br />
      <button onClick={reset}>Reset</button>

    </div>
  );
}
const mapStateToProps=state=>({
  count: state.count
})

const mapDispatchToProps = {
  Increase: Increment,
  decrease: Decrement,
  reset: Reset,
};

export default connect (mapStateToProps, mapDispatchToProps)(CountSuscribe)
