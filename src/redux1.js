const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
      break;
  }

  return {
    counter: state.counter + 1,
  };
};

const store = redux.createStore(counterReducer);

console.log(store.getState());

store.subscribe(() => {
  console.log("current state: ", store.getState());
});

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "INCREMENT" });
