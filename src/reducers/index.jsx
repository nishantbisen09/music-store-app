import * as ACTION from "../constants";

const initialState = {
	albums: [],
	lessAlbums: [],
	albumsInCart: [],
	cartAmount: 0
};

const allAlbumReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION.SET_ALBUMS:
			return { ...state, albums: action.albums };

		case ACTION.ADD_ALBUM_TO_CART:
			return {
				...state,
				albums: action.payload.allAlbums,
				albumsInCart: action.payload.albumsInCart,
				lessAlbums: action.payload.lessAlbums
			};
		case ACTION.REMOVE_ALBUM_FROM_CART:
			return {
				...state,
				albums: action.payload.allAlbums,
				albumsInCart: action.payload.albumsInCart,
				lessAlbums: action.payload.lessAlbums
			};

		case ACTION.SET_QUANTITY:
			return {
				...state,
				albumsInCart: action.payload
			};
		case ACTION.CART_TOTAL:
			return {
				...state,
				cartAmount: action.payload
			};
		case ACTION.LESS_ALBUMS:
			return {
				...state,
				lessAlbums: action.payload
			};
		default:
			return { ...state };
	}
};

export default allAlbumReducer;
