import { getQueryParam } from '../utils/utility';

const initialState = {
  activeSlide: Number(getQueryParam('slide')) || 1,
};
export default initialState;
