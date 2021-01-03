import React from "react";
import PropTypes from "prop-types";
import HelloContainer from "./hello-container/hello-container";
import GenreQuestionContainer from "./genre-question-container/genre-question-container";
import ArtistQuestionContainer from "./artist-question-container/artist-question-container";
import ErrorContainer from "./error-container/error-container";
import ResultContainer from "./result-container/result-container";

const App = ({activeQuestionNumber, mistakes, maxMistakes, questions, wilEndGame}) => {

    const getScreen = (activeQuestionNumber, mistakes, maxMistakes, questions, wilEndGame) => {
        if (activeQuestionNumber === -1) {
            return (
                <HelloContainer/>
            )
        }


        if ((mistakes < maxMistakes) && (wilEndGame)) {
            if (questions.length > activeQuestionNumber) {

                if (questions[activeQuestionNumber].type === `genre`) {
                    return (
                        <GenreQuestionContainer
                            key={activeQuestionNumber}
                        />
                    )
                }

                if (questions[activeQuestionNumber].type === `artist`) {
                    return (
                        <ArtistQuestionContainer
                            key={activeQuestionNumber}
                        />
                    )
                }

            } else {
                return <ResultContainer/>
            }
        } else {
            return <ErrorContainer/>
        }
    };

    return getScreen(activeQuestionNumber, mistakes, maxMistakes, questions, wilEndGame);
};

App.propTypes = {
    activeQuestionNumber: PropTypes.number.isRequired,
    mistakes: PropTypes.number.isRequired,
    maxMistakes: PropTypes.number.isRequired,
    questions: PropTypes.array.isRequired,
    wilEndGame: PropTypes.bool.isRequired,
}

export default App;
