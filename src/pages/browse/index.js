import React, { Component } from "react";
import Proptypes from "prop-types";

import { Container, Title, List, Playlist } from "./style";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";

import Loading from "../../components/Loading";

class Browse extends Component {
  static Proptypes = {
    getPlaylistsRequest: Proptypes.func.isRequired,
    playlists: Proptypes.shape({
      data: Proptypes.arrayOf(
        Proptypes.shape({
          id: Proptypes.number,
          title: Proptypes.string,
          thumbnail: Proptypes.string,
          description: Proptypes.string
        })
      ),
      loading: Proptypes.bool
    }).isRequired
  };
  componentDidMount() {
    this.props.getPlaylistsRequest();
  }
  render() {
    return (
      <Container>
        <Title>Navegar {this.props.playlists.loading && <Loading />}</Title>

        <List>
          {this.props.playlists.data.map(playlist => (
            <Playlist to={`/playlits/${playlist.id}`} key={playlist.id}>
              <img src={playlist.thumbnail} alt={playlist.title} />
              <strong>{playlist.title}</strong>
              <p>{playlist.description}</p>
            </Playlist>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
