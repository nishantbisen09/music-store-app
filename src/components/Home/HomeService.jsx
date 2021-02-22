export const toggleCartItem = (albumItem, props) => {
	const {
		albumsInCart,
		addAlbumToCart,
		removeAlbumFromCart,
		albums,
		lessAlbums
	} = props;
	if (albumItem.inCart) {
		let cartItems = albumsInCart.filter(cartItem => {
			return cartItem.id !== albumItem.id;
		});
		let allItems = setCartStatus(albums, albumItem.id);
		let fewItems = setCartStatus(lessAlbums, albumItem.id);
		removeAlbumFromCart(allItems, cartItems, fewItems);
	} else {
		let allItems = setCartStatus(albums, albumItem.id);
		let fewItems = setCartStatus(lessAlbums, albumItem.id);
		let newAlbumsInCart = albumsInCart;
		newAlbumsInCart.push({ ...albumItem, quantity: 1, price: 300 });
		addAlbumToCart(allItems, newAlbumsInCart, fewItems);
	}
};

const setCartStatus = (albums, id) => {
	let newAlbums = albums;
	return newAlbums.map(album => {
		if (album.id === id) {
			return { ...album, inCart: !album.inCart };
		} else {
			return album;
		}
	});
};
