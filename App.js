import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

function reducer(state, action) {
  switch (action) {
    case ACTIONS.DECREMENT:
      return state-1;
    case ACTIONS.INCREMENT:
      return state+1;
    default:
      return state;
  }
}

function useCounter(count) {
  const [state, dispatch] = useReducer(reducer, count);

  const decrement = (() => {
    return dispatch(ACTIONS.DECREMENT)
  })
  const increment = (() => {
    return dispatch(ACTIONS.INCREMENT)
  })
  
  return [state, decrement, increment]
}

function Counter() {
  const [count, decrement, increment] = useCounter(0)

  return (
    <div>
      <button onClick={() => decrement()}> Minus </button>
      {count}
      <button onClick={() => increment()}> Plus </button>
    </div>
  );
}

function App() {
  return (
    <Counter />
  )
}

export default App;