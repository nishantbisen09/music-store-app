import React, { Component } from "react";
import Album from "../Album/Album";
import AlbumLoader from "../Loader";
import Footer from "../Footer";
import Features from "../Features";
import Paginator from "../Paginator";
import Header from "../Header";
import { toggleCartItem } from "./HomeService";

class Home extends Component {
	start = 0;
	toggleCartItem = albumItem => {
		toggleCartItem(albumItem, this.props);
	};

	componentDidMount() {
		this.props.getMusicAlbums
			? this.props.getMusicAlbums()
			: console.log("props not yet received");
	}

	handlePage = (action, albums) => {
		this.props.setLessAlbums(albums, action);
	};

	render() {
		const { albums, lessAlbums } = this.props;
		return (
			<>
				<Header />
				{lessAlbums ? (
					<>
						<div className="main-wrapper">
							<div className="header-content">
								<span>Purchase Songs Online</span>
								<p>
									Rock out while you’re at work. Kick back and relax at home.
									Create playlists for your next party. Or tune in free to Beats
									1 radio and let real live DJs take care of the mix. iTunes is
									sure to have something to fit your every mood. Or something to
									change it.
								</p>
							</div>

							<div className="album-wrapper">
								{lessAlbums.map((album, index) => {
									return (
										<Album
											key={index}
											album={album}
											add={this.toggleCartItem}
										/>
									);
								})}
							</div>
							<Paginator handlePage={this.handlePage} albums={albums} />
						</div>
						<hr />
						<Features />
						<Footer />
					</>
				) : (
					<AlbumLoader />
				)}
			</>
		);
	}
}

export default Home;
