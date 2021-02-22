import { ALBUM_PRICE } from "../../constants";

export const getQuantity = ({ target }, id, props) => {
	const { albumsInCart } = props;
	let quantity = parseFloat(target.value);
	let newAlbumsInCart = albumsInCart.map(albumInCart => {
		return albumInCart.id === id ? { ...albumInCart, quantity } : albumInCart;
	});
	props.setAlbumQuantity(newAlbumsInCart);
};

export const calculateCartTotal = props => {
	const { albumsInCart } = props;
	let subTotal = 0;
	albumsInCart.forEach(album => (subTotal += album.quantity * ALBUM_PRICE));
	props.setCartAmount(subTotal);
	return subTotal;
};
