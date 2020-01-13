import {
  GET_IMAGES,
  SET_GRID,
  TOGGLE_START,
  TOGGLE_BOARD,
  TOGGLE_OVER,
  FLIP_CARD,
  NUM_OF_FLIPPED,
  REMOVE_FLIPPED_CARDS,
  ADD_MATCH,
  INC_MOVE,
  INC_MATCH,
  RESET_GAME,
  SET_USER_TIME,
  SET_LOADING
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        images: action.payload,
        loading: false
      };
    case SET_GRID:
      return {
        ...state,
        grid: action.payload
      };
    case TOGGLE_START:
      return {
        ...state,
        startToggled: !state.startToggled
      };
    case TOGGLE_BOARD:
      return {
        ...state,
        boardToggled: action.payload
      };
    case TOGGLE_OVER:
      return {
        ...state,
        overToggled: !state.overToggled
      };
    case FLIP_CARD:
      return {
        ...state,
        flippedCards: [...state.flippedCards, action.payload]
      };
    case NUM_OF_FLIPPED:
      return {
        ...state,
        numOfFlipped: state.numOfFlipped + 1
      };
    case REMOVE_FLIPPED_CARDS:
      return {
        ...state,
        flippedCards: []
      };
    case ADD_MATCH:
      return {
        ...state,
        matchedCards: [...state.matchedCards, action.payload]
      };
    case INC_MOVE:
      return {
        ...state,
        move: state.move + 1
      };
    case INC_MATCH:
      return {
        ...state,
        match: state.match + 1
      };
    case RESET_GAME:
      return {
        ...state,
        flippedCards: [],
        matchedCards: [],
        match: 0,
        move: 0
      };
    case SET_USER_TIME:
      return {
        ...state,
        userTime: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
