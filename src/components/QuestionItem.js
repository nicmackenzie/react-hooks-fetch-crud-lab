import React from 'react';

function QuestionItem({ question, onSetQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const deleteHandler = () => {
    onSetQuestion(prev => prev.filter(qn => qn.id !== id));
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE',
    });
  };

  const changeHandler = e => {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ correctIndex: e.target.value }),
    })
      .then(rs => rs.json())
      .then(data => console.log(data));
  };

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={changeHandler}>
          {options}
        </select>
      </label>
      <button onClick={deleteHandler}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
