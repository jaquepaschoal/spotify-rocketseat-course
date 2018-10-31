import React from "react";
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

const Player = ({ player }) => (
  <Container>
    {!!player.currentSong && (
      <Sound url={player.currentSong.file} playStatus={player.status} />
    )}
    <Current>
      <img
        src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
        alt="Cover"
      />
      <div>
        <span>Times like these</span>
        <small>Foo Fighters</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button>
          <img src={BackwardIcon} alt="Backward" />
        </button>
        <button>
          <img src={PlayIcon} alt="Play" />
        </button>
        <button>
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
      file: Proptypes.string
    }),
    status: Proptypes.string
  }).isRequired
};

const mapStateToProps = state => ({
  player: state.player
});

export default connect(mapStateToProps)(Player);
