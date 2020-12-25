const NEW_ACTIVE_PLAYER = 'NEW_ACTIVE_PLAYER';
const RESET_PLAYING_ALL = 'RESET_PLAYING_ALL';
const LOADED_TRACK_ALL = 'LOADED_TRACK_ALL';
const UPDATING_TIME_TO_PLAY_ALL = 'UPDATING_TIME_TO_PLAY_ALL';
// const ENDED_PLAYING = 'ENDED_PLAYING'

const initialState = {
  players: [
    {
      isLoading: true,
      isPlaying: false,
      progress: 0,
    },
    {
      isLoading: true,
      isPlaying: false,
      progress: 0,
    },
    {
      isLoading: true,
      isPlaying: false,
      progress: 0,
    },
    {
      isLoading: true,
      isPlaying: false,
      progress: 0,
    }],
};

export const audioPlayersReducer = (state = initialState, action) => {
  switch (action.type) {

    case NEW_ACTIVE_PLAYER: {
      const newPlayers = [
        ...state.players.map((player, i) => {
          if (i !== action.numberOfActivePlayer) {
            player = {
              isLoading: player.isLoading,
              isPlaying: false,
              progress: player.progress,
            }
          } else {
            player = {
              isLoading: player.isLoading,
              isPlaying: !player.isPlaying,
              progress: player.progress,
            }
          }
          return player;
        })
      ]
      return {
        ...state,
        players: newPlayers,
      };
    }

    case LOADED_TRACK_ALL: {
      const newPlayer = {...state.players[action.numberOfActivePlayer], isLoading: false,};
      const newPlayers = [...state.players];
      newPlayers[action.numberOfActivePlayer] = newPlayer;

      return {
        ...state,
        players: newPlayers,
      }
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

    case UPDATING_TIME_TO_PLAY_ALL: {
      const newPlayer = {...state.players[action.numberOfActivePlayer], progress: action.progress};
      const newPlayers = [...state.players];
      newPlayers[action.numberOfActivePlayer] = newPlayer;
      return {
        ...state,
        players: newPlayers,
      }
    }

    case RESET_PLAYING_ALL: {
      return initialState;
    }

    default:
      return state;
  }
}

export const newActivePlayerActionCreator = (number) => (
  {
    type: NEW_ACTIVE_PLAYER,
    numberOfActivePlayer: number,
  }
);

export const resetPlayingAllActionCreator = () => (
  {
    type: RESET_PLAYING_ALL,
  }
);

export const loadedTrackAllActionCreator = (number) => (
  {
    type: LOADED_TRACK_ALL,
    numberOfActivePlayer: number,
  }
);

export const updateTimeToPlayAllActionCreator = (number, time) => (
  {
    type: UPDATING_TIME_TO_PLAY_ALL,
    numberOfActivePlayer: number,
    progress: time,
  }
);

// export const endedPlayingActionCreator = (number) => {
//   return {
//     type: ENDED_PLAYING,
//     numberOfActivePlayer: number,
//   }
// }



