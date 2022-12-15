import { useSelector } from 'react-redux';

import './App.css';
import MemeForm from './MemeForm';
import Meme from './Meme';


function App() {
  const memes = useSelector(store => store.memes);
  return (
    <div className="App">
      <header className="App-header">
        <section className='meme-generator'>
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
      </header>
    </div>
  );
}

export default App;
