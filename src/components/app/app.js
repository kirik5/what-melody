import React from "react";
import PropTypes from "prop-types";
import HelloContainer from "./hello-container/hello-container";
import GenreQuestionContainer from "./genre-question-container/genre-question-container";
import ArtistQuestionContainer from "./artist-question-container/artist-question-container";
import ErrorContainer from "./error-container/error-container";
import ResultContainer from "./result-container/result-container";


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
                        <GenreQuestionContainer/>
                    )
                }

                if (typeOfQuestion === `artist`) {
                    return (
                        <ArtistQuestionContainer/>
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
