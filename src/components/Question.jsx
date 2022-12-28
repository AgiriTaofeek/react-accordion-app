import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Button from './UI/Button';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleToggle = () => {
    setShowInfo((prevShowInfo) => !prevShowInfo);
  };
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <Button css="btn" onClick={handleToggle}>
          {showInfo ? <AiOutlineMinus/>: <AiOutlinePlus/>}
        </Button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
