import React, { useState } from 'react';

const MaxVotes = (props) => {
  const maxvote = Math.max(...props.vote);
  const maxindex = props.vote.indexOf(maxvote);

  if (maxvote === 0) {
    return <p> no votes </p>;
  }
  return (
    <>
      <p>{props.anecdotes[maxindex]}</p>
      <p>has {maxvote} votes</p>
    </>
  );
};

const Header = ({ name }) => <h2>{name}</h2>;

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(7).fill(0));

  const handleVotes = () => {
    const copy = [...vote];
    copy[selected] += 1;
    setVote(copy);
  };

  const handleAnecdotes = () => {
    setSelected(Math.floor(Math.random() * 7));
  };

  return (
    <>
      <div>
        <Header name="Anecdote of the day" />
        <p>{anecdotes[selected]}</p>
        <p>has {vote[selected]} votes</p>
        <Button handleClick={handleVotes} text="Vote" />
        <Button handleClick={handleAnecdotes} text="Next Anecdote" />
      </div>
      <div>
        <Header name="Anecdote with most votes" />
        <MaxVotes vote={vote} anecdotes={anecdotes} />
      </div>
    </>
  );
};

export default App;
