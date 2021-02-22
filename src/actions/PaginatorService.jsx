class PaginatorService {
	start = 0;
	paginator = (albums, cursor) => {
		let noOfAlbums = albums.length;
		switch (cursor) {
			case "next":
				this.start = (this.start + 9) % noOfAlbums;
				break;
			case "prev":
				if (this.start === 0) {
					this.start = noOfAlbums - 9;
				} else {
					this.start -= 9;
				}
				break;
			default:
				if (this.start !== 0) this.start = (this.start + 9) % noOfAlbums;
				break;
		}
		let lessAlbums = albums.filter(
			(album, index) => index >= this.start && index <= this.start + 9
		);
		return lessAlbums;
	};
}

export default new PaginatorService();
