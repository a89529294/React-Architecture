import { useState } from "react";
import { connect } from "react-redux";
import { counterButtonClicked } from "./actions";

export const CounterButton = ({ numberOfClicks, dispatch }) => {
  const [incrementBy, setIncrementBy] = useState(1);

  return (
    <>
      <p>You have clicked the button {numberOfClicks} times.</p>
      <label>
        Increment By:
        <input
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
          type="number"
        />
      </label>
      <button onClick={() => dispatch(counterButtonClicked(incrementBy))}>
        Click
      </button>
    </>
  );
};

const mapStateToProps = (state) => ({ numberOfClicks: state.numberOfClicks });

export default connect(mapStateToProps)(CounterButton);
