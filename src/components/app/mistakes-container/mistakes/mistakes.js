import React from "react";
import PropTypes from "prop-types";

const Mistakes = ({countOfMistakes}) => {
  const mistakes = new Array(countOfMistakes).fill(null);

  return (
    <div className="game__mistakes" style={{width: '260px'}}>
      {mistakes.map((it, i) => (<div className="wrong" key={`mistakes-${i}`}></div>))}
    </div>
  )
};

Mistakes.propTypes = {
  countOfMistakes: PropTypes.number.isRequired,
};

export default Mistakes;
