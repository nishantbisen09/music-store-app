import axios from "axios";

const appleMusicApi = 'https://rss.itunes.apple.com/api/v1/us/apple-music/
new-releases/all/100/explicit.json';

class NetworkManager {
	getAllMusicAlbums = () => {
		return axios.get(appleMusicApi);
	};
}

//singleton object
export default new NetworkManager();
