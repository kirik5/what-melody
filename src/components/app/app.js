import React from "react";
import PropTypes from "prop-types";
import HelloContainer from "./hello-container/hello-container";
import GenreQuestionContainer from "./genre-question-container/genre-question-container";
import ArtistQuestionContainer from "./artist-question-container/artist-question-container";
import ErrorContainer from "./error-container/error-container";
import ResultContainer from "./result-container/result-container";

const App = ({numberOfActiveQuestion, isNotEndOfQuestions, isNotGameOver, statusOfFetchingQuestions, typeOfQuestion}) => {

    const getScreen = (numberOfActiveQuestion, isNotEndOfQuestions, isNotGameOver, statusOfFetchingQuestions, typeOfQuestion) => {

        if (statusOfFetchingQuestions === "loading") {
            return (
                <div>Loading...</div>
            )
        }

        if (numberOfActiveQuestion === -1) {
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

    return getScreen(numberOfActiveQuestion, isNotEndOfQuestions, isNotGameOver, statusOfFetchingQuestions, typeOfQuestion);
};

App.propTypes = {
    numberOfActiveQuestion: PropTypes.number.isRequired,
    isNotEndOfQuestions: PropTypes.bool.isRequired,
    isNotGameOver: PropTypes.bool.isRequired,
    statusOfFetchingQuestions: PropTypes.string.isRequired,
    typeOfQuestion: PropTypes.string,
}

export default App;
