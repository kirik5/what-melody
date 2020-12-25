const ACTIVE_PLAYER = 'ACTIVE_PLAYER';
const RESET_PLAYING = 'RESET_PLAYING';
const LOADED_TRACK = 'LOADED_TRACK';
const UPDATING_TIME_TO_PLAY = 'UPDATING_TIME_TO_PLAY';
// const ENDED_PLAYING = 'ENDED_PLAYING'

const initialState = {
  player: {
    isLoading: true,
    isPlaying: false,
    progress: 0,
  }
};

export const audioPlayerReducer = (state = initialState, action) => {
  switch (action.type) {

    case ACTIVE_PLAYER: {
      return {
        ...state,
        player: {
          ...state.player,
          isPlaying: !(state.player.isPlaying),
        }
      };
    }

    case LOADED_TRACK: {
      return {
        ...state,
        player: {
          ...state.player,
          isLoading: false,
        }
      };
    }

    // case ENDED_PLAYING: {
    //   const newPlayer = {...state.players[action.numberOfActivePlayer], isPlaying: false};
    //   const newPlayers = [...state.players];
    //   newPlayers[action.numberOfActivePlayer] = newPlayer;
    //
    //   return {
    //     ...state,
    //     players: newPlayers,
    //   }
    // }

    case UPDATING_TIME_TO_PLAY: {
      return {
        ...state,
        player: {
          ...state.player,
          progress: action.progress,
        }
      };
    }

    case RESET_PLAYING: {
      return initialState;
    }

    default:
      return state;
  }
};

export const activePlayerActionCreator = () => (
  {
    type: ACTIVE_PLAYER,
  }
);

export const resetPlayingActionCreator = () => (
  {
    type: RESET_PLAYING,
  }
);

export const loadedTrackActionCreator = () => (
  {
    type: LOADED_TRACK,
  }
);

export const updateTimeToPlayActionCreator = (time) => (
  {
    type: UPDATING_TIME_TO_PLAY,
    progress: time,
  }
);

// export const endedPlayingActionCreator = (number) => {
//   return {
//     type: ENDED_PLAYING,
//     numberOfActivePlayer: number,
//   }
// }



