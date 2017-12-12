import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import MessageInputContainer from './MessageInputContainer';

const App = () => {
  return (
    <div className="App">
      <CommentsListContainer />
      <MessageInputContainer />
    </div>
  );
};

export default App;