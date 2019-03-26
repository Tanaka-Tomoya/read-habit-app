import { connect } from 'react-redux';
import home from 'src/templates/Home';

const mapStateToProps = state => {
  return state;
};

// const mapDispatchToProps = dispatch => {
//   return dispatch;
// };

export default connect(mapStateToProps)(home);
