/* global history, window */

export function stateToUrl(state) {
  const { protocol, hostname, pathname, port } = window.location;
  const { activeSlide } = state;
  const url = `${protocol}//${hostname}:${port}${pathname}?slide=${activeSlide}`;
  history.replaceState({}, 'Slides', url);
}

export const uriMiddleware = ({ getState }) => next => (action) => {
  next(action);
  const state = getState();
  stateToUrl(state);
};
