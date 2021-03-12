import React, {
    useEffect
} from "react";
import {
    useDispatch,
    useSelector} from "react-redux";
import App from "./app";
import {
    fetchQuestions,
    getQuestionsStatus, getTypeOfQuestion,
    isNotEndOfQuestions, isStartScreen
} from "../../reducers/question-slice";
import {isNotGameOver} from "../../reducers/game-action-thunk";
import {getIsAuthorized} from "../../reducers/authorization-slice";


const AppContainer = () => {
    const notEndOfQuestions = useSelector(isNotEndOfQuestions);
    const notGameOver = useSelector(isNotGameOver);
    const statusOfFetchingQuestions = useSelector(getQuestionsStatus);
    const typeOfQuestion = useSelector(getTypeOfQuestion);
    const StartScreen = useSelector(isStartScreen);
    const isAuthorization = useSelector(getIsAuthorized);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthorization) {dispatch(fetchQuestions());}
    }, [isAuthorization]);

    return (
        <App
            isStartScreen={StartScreen}
            isNotEndOfQuestions={notEndOfQuestions}
            isNotGameOver={notGameOver}
            statusOfFetchingQuestions={statusOfFetchingQuestions}
            typeOfQuestion={typeOfQuestion}
            isAuthorization={isAuthorization}
        />
    )
};

export default AppContainer;