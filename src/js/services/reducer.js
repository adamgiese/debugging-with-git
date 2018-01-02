const handleActions = (state = [], action) => {
  const { type } = action;
  switch (type) {
    case 'INCREMENT_SLIDE':
      return { ...state, activeSlide: state.activeSlide + 1 };
    case 'DECREMENT_SLIDE':
      return { ...state, activeSlide: Math.max(state.activeSlide - 1, 1) };
    default:
      return state;
  }
};
export default handleActions;
