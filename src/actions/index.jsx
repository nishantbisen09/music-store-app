import _networkManager from "../NetworkManager";
import * as ACTION from "../constants";

import paginatorService from "./PaginatorService";
import store, { load } from "../config/storeConfig";

const setAllMusicAlbums = albums => {
	return {
		type: ACTION.SET_ALBUMS,
		albums
	};
};

export const addAlbumToCart = (allAlbums, albumsInCart, lessAlbums) => {
	return {
		type: ACTION.ADD_ALBUM_TO_CART,
		payload: { allAlbums, albumsInCart, lessAlbums }
	};
};

export const removeAlbumFromCart = (allAlbums, albumsInCart, lessAlbums) => {
	return {
		type: ACTION.REMOVE_ALBUM_FROM_CART,
		payload: { allAlbums, albumsInCart, lessAlbums }
	};
};

export const setAlbumQuantity = albumsInCart => {
	return {
		type: ACTION.SET_QUANTITY,
		payload: albumsInCart
	};
};

export const setCartAmount = cartAmount => {
	return {
		type: ACTION.CART_TOTAL,
		payload: cartAmount
	};
};

export const setLessAlbums = (albums, action) => {
	return dispatch => {
		dispatch(setLessAlbum(paginatorService.paginator(albums, action)));
	};
};

const setLessAlbum = lessAlbums => {
	return {
		type: ACTION.LESS_ALBUMS,
		payload: lessAlbums
	};
};

// Adding Cart Status to the api response
const addCartStatusToAlbums = albums => {
	return albums.map(album => {
		return {
			...album,
			inCart: false,
			price: 300
		};
	});
};

//managing api calls through redux thunk
export const getMusicAlbums = () => {
	return dispatch => {
		load(store).then(({ albums }) => {
			return !albums
				? _networkManager.getAllMusicAlbums().then(({ data }) => {
						//dispatching few albums to display initially
						dispatch(
							setLessAlbums(
								paginatorService.paginator(
									addCartStatusToAlbums(data.feed.results),
									ACTION.DEFAULT
								)
							)
						);
						dispatch(
							setAllMusicAlbums(addCartStatusToAlbums(data.feed.results))
						);
				  })
				: console.log("LOADING DATA FROM REDUX_STORAGE");
		});
	};
};
