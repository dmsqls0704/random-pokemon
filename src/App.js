import React, { useState, useRef } from 'react';
import StartScreen from './components/StartScreen';
import DialogueScreen from './components/DialogueScreen';
import OptionScreen from './components/OptionScreen';
import BallScreen from './components/BallScreen';
import PartyScreen from './components/PartyScreen'
import bgm from './assets/audio/Introduction.mp3';
// App.js
import './App.css';

function App() {
  const [screen, setScreen] = useState('start'); 
  const [options, setOptions] = useState({ legendary: false, mythical: false });
  const audioRef = useRef(null);

  const startBgm = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log("브라우저가 자동재생을 막았어요.");
      });
    }
  };
  
  return (
    <div 
      className="App"
      style={{
        width: '394px',
        height: '704px',
        margin: '50px auto',  
        border: '3px solid #3662a3ff', 
        borderRadius: '20px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <audio ref={audioRef} src={bgm} loop />
      {screen === 'start' && (
        <StartScreen 
          onStart={() => {
            setScreen('dialogue');
            startBgm(); 
          }}
        />
      )}
      {screen === 'dialogue' && (
        <DialogueScreen onNext={() => setScreen('option')} />
      )}
      {screen === 'option' && (
          <OptionScreen
            options={options}
            setOptions={setOptions}
            onNext={() => setScreen('ball')}
          />
      )}
      {screen === 'ball' && (
          <BallScreen onNext={() => setScreen('party')}/>
        )}

      {screen === 'party' && (
              <PartyScreen 
              options={options} 
              onNext={() => { setOptions({ legendary: false, mythical:false })
              setScreen('start') }}/>
      )}
    </div>
  );
}

export default App;
