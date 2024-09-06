export const changeHandlerHelper = (
  e,
  state,
  setState,
  customChangesFn = () => {}
) => {
  const prevState = { ...state };
  let { name, value, type, files, checked } = e.target;

  if (type === 'number') {
    value *= 1;
  } else if (type === 'file') {
  } else {
    prevState[name] = value;
  }

  setState(prevState);
  customChangesFn(prevState, e.target);
};
