import { connect } from 'react-redux';
import {
  incrementSlide,
  decrementSlide
} from '../../services/actions';
import App from './component.jsx';

const mapStateToProps = state => ({
  activeSlide: state.activeSlide,
});

const mapDispatchToProps = dispatch => ({
  incrementSlide: () => {
    dispatch(incrementSlide());
  },
  decrementSlide: () => {
    dispatch(decrementSlide());
  },
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
