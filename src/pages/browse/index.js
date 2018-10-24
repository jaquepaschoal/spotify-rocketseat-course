import React, { Component } from "react";
import Proptypes from "prop-types";

import { Container, Title, List, Playlist } from "./style";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";

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
      )
    }).isRequired
  };
  componentDidMount() {
    this.props.getPlaylistsRequest();
  }
  render() {
    return (
      <Container>
        <Title>Navegar</Title>
        <List>
          {this.props.playlists.data.map(playlist => (
            <Playlist to={`/playlits/${playlist.id}`}>
              <img src={playlist.thumbnail} alt={playlist.title} />
              <strong>{playlist.title}</strong>
              <p>{playlist.description}</p>
            </Playlist>
          ))}
          <Playlist to="/playlists/1">
            <img
              src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
              alt="Playlist"
            />
            <strong>Rock dos bons</strong>
            <p>
              Relaxe enquanto você programa ouvindo apenas as melhores do rock!
            </p>
          </Playlist>
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
