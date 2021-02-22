import { connect } from "react-redux";
import * as actionCreators from "../../actions";
import Home from "./index";

const mapStateToProps = state => {
	return {
		albums: state.albums,
		albumsInCart: state.albumsInCart,
		lessAlbums: state.lessAlbums
	};
};

export default connect(
	mapStateToProps,
	actionCreators
)(Home);
