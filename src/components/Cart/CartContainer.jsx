//redux imports
import { connect } from "react-redux";
import * as actionCreators from "../../actions";
import Cart from "./index";

const mapStateToProps = state => {
	return {
		albumsInCart: state.albumsInCart
	};
};

export default connect(
	mapStateToProps,
	actionCreators
)(Cart);
