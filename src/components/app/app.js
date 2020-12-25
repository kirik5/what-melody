import React from "react";
import HelloContainer from "./hello-container/hello-container";
import GenreQuestionContainer from "./genre-question-container/genre-question-container";
import ArtistQuestionContainer from "./artist-question-container/artist-question-container";
import ErrorContainer from "./error-container/error-container";
import ResultContainer from "./result-container/result-container";
// import Hello from "./hello-container/hello/hello";
// import GenreQuestion from "./genre-question/genre-question";
// import ArtistQuestion from "./artist-question/artist-question";
// import PropTypes from "prop-types";
// import {connect} from "react-redux";
// import {ActionCreator} from "../../reducers/root-reducer";

// class App extends React.PureComponent {
// static getScreen = (numberOfActiveQuestion, gameTime, errorCount, questions, onWelcomeScreen, onUserAnswer, mistakes, maxMistakes) => {
//
//   if (numberOfActiveQuestion === -1) {
//     return <Hello
//       time={gameTime}
//       errors={errorCount}
//       onStartButtonClick={onWelcomeScreen}
//     />
//   }
//
//   const activeQuetion = questions[numberOfActiveQuestion];
//
//   switch (activeQuetion.type) {
//     case `genre`:
//       return <GenreQuestion
//         question={activeQuetion}
//         onAnswer={onUserAnswer}
//         numberOfQuestion={numberOfActiveQuestion}
//         mistakes={mistakes}
//         maxMistakes={maxMistakes}
//         key={`question-genre-${numberOfActiveQuestion}`}
//       />;
//     case `artist`:
//       return <ArtistQuestion
//         question={activeQuetion}
//         onAnswer={onUserAnswer}
//         numberOfQuestion={numberOfActiveQuestion}
//         mistakes={mistakes}
//         maxMistakes={maxMistakes}
//         key={`question-artist-${numberOfActiveQuestion}`}
//       />;
//     default:
//       return null;
//   }
// }
//
// render() {
//   <div>
//     app screen...
//   </div>

// return App.getScreen(this.props.numberOfActiveQuestion, this.props.gameTime, this.props.errorCount, this.props.questions, this.props.onWelcomeScreen, this.props.onUserAnswer, this.props.mistakes, this.props.errorCount);
//   }
// }

// App.propTypes = {
//   gameTime: PropTypes.number.isRequired,
//   errorCount: PropTypes.number.isRequired,
//   questions: PropTypes.array.isRequired
// };

// const mapStateToProps = (state) => ({
//   numberOfActiveQuestion: state.numberOfActiveQuestion,
//   mistakes: state.mistakes,
// });
//
// const mapDispatchToProps = (dispatch) => ({
//   onWelcomeScreen: () => {
//     dispatch(ActionCreator.incrementActiveQuesiton());
//     setTimeout(function tick() {
//       dispatch(ActionCreator.subTime());
//       setTimeout(tick, 1000);
//     }, 1000)
//   },
//   onUserAnswer: (numberOfQuestion, question, userAnswer, mistakes, maxMistakes) => {
//     dispatch(ActionCreator.incrementActiveQuesiton());
//     dispatch(ActionCreator.incrementMistakes(numberOfQuestion, question, userAnswer, mistakes, maxMistakes))
//   }
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);

const App = ({activeQuestionNumber, mistakes, maxMistakes, questions, time}) => {

  const getScreen = (activeQuestionNumber, mistakes, maxMistakes, questions, time) => {
    if (activeQuestionNumber === -1) {
      return (
        <HelloContainer />
      )
    };

    if ((mistakes < maxMistakes) && (time > 0)) {
      if (questions.length > activeQuestionNumber) {

        if (questions[activeQuestionNumber].type === `genre`) {
          return (
            <GenreQuestionContainer
              key={activeQuestionNumber}
            />
          )
        };
        if (questions[activeQuestionNumber].type === `artist`) {
          return (
            <ArtistQuestionContainer
              key={activeQuestionNumber}
            />
          )
        };
      } else {
        return <ResultContainer/>
      }
    } else {
      return <ErrorContainer/>
    }


  };

  return getScreen(activeQuestionNumber, mistakes, maxMistakes, questions, time);
};

export default App;
