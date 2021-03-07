import React, {
    // useEffect
} from "react";
import {
    // useDispatch,
    useSelector} from "react-redux";
import App from "./app";
import {
    // fetchQuestions,
    getQuestionsStatus, getTypeOfQuestion,
    isNotEndOfQuestions, isStartScreen
} from "../../reducers/question-slice";
import {isNotGameOver} from "../../reducers/game-action-thunk";


const AppContainer = () => {
    const notEndOfQuestions = useSelector(isNotEndOfQuestions);
    const notGameOver = useSelector(isNotGameOver);
    const statusOfFetchingQuestions = useSelector(getQuestionsStatus);
    const typeOfQuestion = useSelector(getTypeOfQuestion);
    const StartScreen = useSelector(isStartScreen);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchQuestions());
    // }, []);

    return (
        <App
            isStartScreen={StartScreen}
            isNotEndOfQuestions={notEndOfQuestions}
            isNotGameOver={notGameOver}
            statusOfFetchingQuestions={statusOfFetchingQuestions}
            typeOfQuestion={typeOfQuestion}
        />
    )
};

export default AppContainer;