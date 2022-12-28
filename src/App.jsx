import { useState } from 'react';
import Data from './Data';
import Wrapper from './components/UI/Wrapper';
import Question from './components/Question';

function App() {
  const [questions, setQuestions] = useState(Data);

  const question = questions.map((question) => {
    return <Question key={question.id} {...question} />;
  });

  return (
    <main>
      <Wrapper>
        <h3>Questions and answers about login</h3>
        {question}
      </Wrapper>
    </main>
  );
}

export default App;
