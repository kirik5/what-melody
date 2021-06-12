import React, {useEffect} from "react"
import HelloContainer from "./hello-container/hello-container"
import ErrorContainer from "./error-container/error-container"
import ResultContainer from "./result-container/result-container"
import GenreQuestion from "./genre-question/genre-question.js"
import ArtistQuestion from "./artist-question/artist-question"
import {useDispatch, useSelector} from "react-redux"
import {
    fetchQuestions,
    getQuestionsStatus,
    getTypeOfQuestion,
    isNotEndOfQuestions,
    isStartScreen
} from "../../reducers/question-slice"
import {isNotGameOver} from "../../reducers/game-action-thunk"
import {getIsAuthorized} from "../../reducers/authorization-slice"
import Login from "./login/login"
import Loading from "./loading/loading";


const App = () => {
    const notEndOfQuestions = useSelector(isNotEndOfQuestions);
    const notGameOver = useSelector(isNotGameOver);
    const statusOfFetchingQuestions = useSelector(getQuestionsStatus);
    const typeOfQuestion = useSelector(getTypeOfQuestion);
    const startScreen = useSelector(isStartScreen);
    const authorization = useSelector(getIsAuthorized);
    const dispatch = useDispatch();

    useEffect(() => {
        if (authorization) {dispatch(fetchQuestions());}
    }, [authorization, dispatch]);

    const getScreen = (isStartScreen, isNotEndOfQuestions, isNotGameOver, statusOfFetchingQuestions, typeOfQuestion, isAuthorization) => {

        if (!isAuthorization) {return <Login/>}

        if (statusOfFetchingQuestions === "loading") {
            return <Loading/>
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

    return getScreen(startScreen, notEndOfQuestions, notGameOver, statusOfFetchingQuestions, typeOfQuestion, authorization);
}


export default App
