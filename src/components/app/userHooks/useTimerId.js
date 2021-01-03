import {useSelector} from "react-redux";

const useTimerId = () => {
    const timerId = useSelector(state => state.timer.timerId);

    return timerId;
};

export default useTimerId;