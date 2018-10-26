import React, { Component } from "react";

import { Container, Header, SongList } from "./style";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistDetailsActions } from "../../store/ducks/playlistDetails";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

class Playlist extends Component {
  componentDidMount() {
    this.loadPlaylistDetails();
  }

  loadPlaylistDetails = () => {
    const { id } = this.props.match.params;

    this.props.getPlaylistDetailsRequest(id);
  };

  render() {
    return (
      <Container>
        <Header>
          <img
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
            alt="Playlist"
          />
          <div>
            <span> PLAYLIST</span>
            <h1>Rock Forever</h1>
            <p>13 músicas</p>
            <button>PLAY</button>
          </div>
        </Header>
        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th />
              <th>Título</th>
              <th>Artista</th>
              <th>Álbum</th>
              <th>
                <img src={ClockIcon} alt="Duração" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={PlusIcon} alt="Adicionar" />
              </td>
              <td>PApercut</td>
              <td>Linkin Park</td>
              <td>Hybrid Theory</td>
              <td>3:26</td>
            </tr>
            <tr>
              <td>
                <img src={PlusIcon} alt="Adicionar" />
              </td>
              <td>PApercut</td>
              <td>Linkin Park</td>
              <td>Hybrid Theory</td>
              <td>3:26</td>
            </tr>
          </tbody>
        </SongList>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlists
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
