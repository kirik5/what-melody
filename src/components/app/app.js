import React from "react";
import PropTypes from "prop-types";
import HelloContainer from "./hello-container/hello-container";
import ErrorContainer from "./error-container/error-container";
import ResultContainer from "./result-container/result-container";
import GenreQuestion from "./genre-question/genre-question.js";
import ArtistQuestion from "./artist-question/artist-question";


const App = ({isStartScreen, isNotEndOfQuestions, isNotGameOver, statusOfFetchingQuestions, typeOfQuestion}) => {

    const getScreen = (isStartScreen, isNotEndOfQuestions, isNotGameOver, statusOfFetchingQuestions, typeOfQuestion) => {

        if (statusOfFetchingQuestions === "loading") {
            return (
                <div>Loading...</div>
            )
        }

        if (isStartScreen) {
            return (
                <HelloContainer/>
            )
        }

        if (isNotGameOver) {

            if (isNotEndOfQuestions) {

                if (typeOfQuestion === `genre`) {
                    return (
                        <GenreQuestion/>
                    )
                }

                if (typeOfQuestion === `artist`) {
                    return (
                        <ArtistQuestion/>
                    )
                }

            } else {
                return <ResultContainer/>
            }
        } else {
            return <ErrorContainer/>
        }
    };

    return getScreen(isStartScreen, isNotEndOfQuestions, isNotGameOver, statusOfFetchingQuestions, typeOfQuestion);
};

App.propTypes = {
    isStartScreen: PropTypes.bool.isRequired,
    isNotEndOfQuestions: PropTypes.bool.isRequired,
    isNotGameOver: PropTypes.bool.isRequired,
    statusOfFetchingQuestions: PropTypes.string.isRequired,
    typeOfQuestion: PropTypes.string,
}

export default App;
