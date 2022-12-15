import { useSelector } from 'react-redux';

import './App.css';
import MemeForm from './MemeForm';
import Meme from './Meme';
import TodoForm from './TodoForm';
import Todo from './Todo';


function App() {
  const { memes, todos } = useSelector(store => store);
  return (
    <div className="App">
      <header className="App-header">
        <section className='meme-generator'>
          <h1>Meme Generator</h1>
          <MemeForm />
          {memes.map(meme => (
            <Meme
              key={meme.id}
              topText={meme.topText}
              bottomText={meme.bottomText}
              imgURL={meme.imgURL}
              id={meme.id}
            />
          ))}
        </section>
        <hr style={{ width: '100%' }} />
        <section className='todolist'>
          <h1>Todo List</h1>
          <TodoForm />
          <ul>
            {todos.map(todo => (
              <Todo
                key={todo.id}
                task={todo.task}
                id={todo.id}
              />
            ))}
          </ul>
        </section>
      </header>
    </div>
  );
}

export default App;
