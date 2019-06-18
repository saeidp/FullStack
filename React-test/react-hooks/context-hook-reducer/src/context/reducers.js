const initialState = {
  techs: ["TypeScript", "React Hooks"]
};

const types = {
  SET: "SET",
  ADD: "ADD",
  REMOVE: "REMOVE"
};

const reducer = (state = initialState, action) => {
  console.log({ oldState: state, type: action.type, payload: action.payload });
  switch (action.type) {
    case "SET":
      return {
        ...state,
        techs: action.payload
      };
    case "ADD":
      return {
        ...state,
        techs: [...state.techs, action.payload]
      };
    case "REMOVE":
      return {
        ...state,
        techs: state.techs.filter(tech => tech !== action.payload)
      };
    default:
      throw new Error("Unexpected action");
  }
};
export { initialState, types, reducer };
