import React from 'react';
import QuestionItem from './QuestionItem';

function QuestionList({ questions, onSetQuestion }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.length > 0 &&
          questions.map(question => (
            <QuestionItem
              key={question.id}
              question={question}
              onSetQuestion={onSetQuestion}
            />
          ))}
      </ul>
    </section>
  );
}

export default QuestionList;
