import { connect } from 'react-redux';
import setVisibilityFilter from '../ActionCreators/visibilityFilters';

import Link from '../Components/Link';
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});
const LinkContainer = connect(mapStateToProps, mapDispatchToProps)(Link);
export default LinkContainer;
