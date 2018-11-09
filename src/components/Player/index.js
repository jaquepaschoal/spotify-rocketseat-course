import React, { Fragment } from "react";
import Slider from "rc-slider";
import Sound from "react-sound";
import Proptypes from "prop-types";

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgresSlider
} from "./style";

import VolumeIcon from "../../assets/images/volume.svg";
import ShuffleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import PauseIcon from "../../assets/images/pause.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

import { connect } from "react-redux";
import { Creators as PlayerActions } from "../../store/ducks/player";
import { bindActionCreators } from "redux";

const Player = ({ player, play, pause, next, prev }) => (
  <Container>
    {!!player.currentSong && (
      <Sound
        url={player.currentSong.file}
        playStatus={player.status}
        onFinishedPlaying={next}
      />
    )}
    <Current>
      {!!player.currentSong && (
        <Fragment>
          <img
            src={player.currentSong.thumbnail}
            alt={player.currentSong.title}
          />
          <div>
            <span>{player.currentSong.title}</span>
            <small>{player.currentSong.author}</small>
          </div>
        </Fragment>
      )}
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button onClick={prev}>
          <img src={BackwardIcon} alt="Backward" />
        </button>
        {!!player.currentSong && player.status === Sound.status.PLAYING ? (
          <button onClick={pause}>
            <img src={PauseIcon} alt="Pause" />
          </button>
        ) : (
          <button onClick={play}>
            <img src={PlayIcon} alt="Play" />
          </button>
        )}
        <button onClick={next}>
          <img src={ForwardIcon} alt="Forward" />
        </button>
        <button>
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>
      <Time>
        <span>0:40</span>
        <ProgresSlider>
          <Slider
            railStyle={{ background: "#404040", borderRadius: 10 }}
            trackStyle={{ background: "#1ed766" }}
            handleStyle={{ border: 0 }}
          />
        </ProgresSlider>
        <span>1:40</span>
      </Time>
    </Progress>
    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: "#404040", borderRadius: 10 }}
        trackStyle={{ background: "#fff" }}
        handleStyle={{ display: "none" }}
        value={100}
      />
    </Volume>
  </Container>
);

Player.Proptypes = {
  player: Proptypes.shape({
    currentSong: Proptypes.shape({
      file: Proptypes.string,
      thumbnail: Proptypes.string,
      title: Proptypes.string,
      author: Proptypes.string
    }),
    status: Proptypes.string
  }).isRequired,
  play: Proptypes.func.isRequired,
  pause: Proptypes.func.isRequired,
  next: Proptypes.func.isRequired,
  prev: Proptypes.func.isRequired
};

const mapStateToProps = state => ({
  player: state.player
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
