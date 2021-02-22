import axios from "axios";

//projxy server that adds Cross Origin Headers to the Response to allow access on browser
const proxyServer = "https://cors-anywhere.herokuapp.com/";

const appleMusicApi = `${proxyServer}https://rss.itunes.apple.com/api/v1/us/apple-music/
new-releases/all/100/explicit.json`;

class NetworkManager {
	getAllMusicAlbums = () => {
		return axios.get(appleMusicApi);
	};
}

//singleton object
export default new NetworkManager();
