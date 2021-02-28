import React from "react";
import PropTypes from "prop-types";
import HelloContainer from "./hello-container/hello-container";
import GenreQuestionContainer from "./genre-question-container/genre-question-container";
import ArtistQuestionContainer from "./artist-question-container/artist-question-container";
import ErrorContainer from "./error-container/error-container";
import ResultContainer from "./result-container/result-container";

const App = ({activeQuestionNumber, mistakes, maxMistakes, questions, willEndGame}) => {

    const getScreen = (activeQuestionNumber, mistakes, maxMistakes, questions, willEndGame) => {
        if (activeQuestionNumber === -1) {
            return (
                <HelloContainer/>
            )
        }


        if ((mistakes < maxMistakes) && (!willEndGame)) {
            if (questions.length > activeQuestionNumber) {

                if (questions[activeQuestionNumber].type === `genre`) {
                    return (
                        <GenreQuestionContainer/>
                    )
                }

                if (questions[activeQuestionNumber].type === `artist`) {
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

    return getScreen(activeQuestionNumber, mistakes, maxMistakes, questions, willEndGame);
};

App.propTypes = {
    activeQuestionNumber: PropTypes.number.isRequired,
    mistakes: PropTypes.number.isRequired,
    maxMistakes: PropTypes.number.isRequired,
    questions: PropTypes.array.isRequired,
    willEndGame: PropTypes.bool.isRequired,
}

export default App;
