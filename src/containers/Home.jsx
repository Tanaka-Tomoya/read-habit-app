import { connect } from 'react-redux';
import home from 'src/templates/Home';
import { fetchUser } from 'src/redux/actions/home';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(home);
