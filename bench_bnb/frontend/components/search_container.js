import {connect} from 'react-redux';
import Search from './search';
import {fetchBenches} from '../actions/bench_actions';

const mapSTP = (state) => {
  return {
    benches: Object.values(state.entities.benches)
  };
};

const mapDTP = (dispatch) => {
  return {
    fetchBenches: () => dispatch(fetchBenches())
  };
};

export default connect(mapSTP, mapDTP)(Search);
