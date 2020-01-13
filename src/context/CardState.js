import React, { useReducer } from "react";
import CardContext from "./cardContext";
import CardReducer from "./cardReducer";
import axios from "axios";
import {
  GET_IMAGES,
  SET_GRID,
  TOGGLE_START,
  TOGGLE_BOARD,
  TOGGLE_OVER,
  FLIP_CARD,
  REMOVE_FLIPPED_CARDS,
  ADD_MATCH,
  INC_MOVE,
  INC_MATCH,
  RESET_GAME,
  SET_USER_TIME,
  SET_LOADING
} from "./types";

const CardState = props => {
  const initialState = {
    images: [],
    flippedCards: [],
    matchedCards: [],
    move: 0,
    match: 0,
    userTime: 0,
    grid: null,
    startToggled: true,
    boardToggled: false,
    overToggled: false,
    loading: false
  };

  const [state, dispatch] = useReducer(CardReducer, initialState);

  // Get Images
  const getImages = async difficulty => {
    setLoading();

    const res = await axios.get("./data/cards.json");

    // Shuffle all images and get as many as needed
    let arr1 = shuffle(res.data);
    let arr2 = arr1.slice(0, Math.pow(difficulty, 2) / 2);
    // Double the array and shuffle again
    let arr3 = [...arr2, ...arr2];
    let arr4 = shuffle(arr3);

    dispatch({
      type: GET_IMAGES,
      payload: arr4
    });

    setGrid(difficulty);

    toggleBoard(true);
  };

  // Set Grid
  const setGrid = difficulty => {
    dispatch({
      type: SET_GRID,
      payload: difficulty
    });
  };

  // Toggle Start
  const toggleStart = () => {
    dispatch({
      type: TOGGLE_START
    });
  };

  // Toggle Board
  const toggleBoard = condition => {
    dispatch({
      type: TOGGLE_BOARD,
      payload: condition
    });
  };

  // Toggle Over
  const toggleOver = () => {
    dispatch({
      type: TOGGLE_OVER
    });
  };

  // Flip Card
  const flipCard = (index, id) => {
    if (state.flippedCards.length < 2) {
      if (!state.flippedCards.includes(index)) {
        dispatch({
          type: FLIP_CARD,
          payload: index
        });
      }
    }
  };

  // Check If There Is A Match
  const checkIfMatch = () => {
    if (
      state.images[state.flippedCards[0]].cardId ===
      state.images[state.flippedCards[1]].cardId
    ) {
      setTimeout(() => {
        // console.log("MATCH");
        removeFlippedCards();
        addMatch(state.images[state.flippedCards[0]].cardId);
        increaseMatch();
        increaseMove();
      }, 700);
    } else {
      setTimeout(() => {
        // console.log("NOT MATCH!!!");
        removeFlippedCards();
        increaseMove();
      }, 700);
    }
  };

  // Reset Flipped Cards
  const removeFlippedCards = () => {
    dispatch({
      type: REMOVE_FLIPPED_CARDS
    });
  };

  // Hide Match
  const addMatch = cardId => {
    dispatch({
      type: ADD_MATCH,
      payload: cardId
    });
  };

  // Increase Move
  const increaseMove = () => {
    dispatch({
      type: INC_MOVE
    });
  };

  // Increase Match
  const increaseMatch = () => {
    dispatch({
      type: INC_MATCH
    });
  };

  // Reset Game
  const resetGame = () => {
    dispatch({
      type: RESET_GAME
    });
  };

  // Set User Time
  const setUserTime = t => {
    dispatch({
      type: SET_USER_TIME,
      payload: t
    });
  };

  // Set Loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  // Shuffle Array
  const shuffle = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  return (
    <CardContext.Provider
      value={{
        images: state.images,
        grid: state.grid,
        move: state.move,
        match: state.match,
        userTime: state.userTime,
        startToggled: state.startToggled,
        boardToggled: state.boardToggled,
        overToggled: state.overToggled,
        matchedCards: state.matchedCards,
        flippedCards: state.flippedCards,
        loading: state.loading,
        getImages,
        toggleStart,
        toggleBoard,
        toggleOver,
        flipCard,
        checkIfMatch,
        resetGame,
        setUserTime
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardState;
