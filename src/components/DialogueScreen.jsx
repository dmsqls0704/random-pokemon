import React, { useState } from 'react';
import Layout from './Layout';
import ma from '../assets/images/ma.png';
import textbox from '../assets/images/textbox.png';

const DialogueScreen = ({ onNext }) => {
  const dialogues = [
    "포켓몬스터의 세계에 온 것을 환영한다!\n내 이름은 마박사!",
    "전설의 포켓몬과 환상의 포켓몬을\n포함할 것인가?",
  ];

  const [currentDialogue, setCurrentDialogue] = useState(0);

  const nextDialogue = () => {
    if (currentDialogue < dialogues.length - 1) {
      setCurrentDialogue(currentDialogue + 1);
    } else {
      onNext(); 
    }
  };


  return (
    <Layout>
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <img
          src={ma}
          alt="ma"
          style={{
            position: 'absolute',
            bottom: '45px',
            left: '50%',
            transform: 'translateX(-30%)',
            width: '200px',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '100px', 
            width: '295px',
            height: '50px',
            backgroundImage: `url(${textbox})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '0 20px',
            boxSizing: 'border-box',
            zIndex: 1,
          }}
        >
          <p
            style={{
              fontSize: '12px',
              fontFamily: 'Galmuri11',
              color: '#000',
              margin: 0,
              whiteSpace: 'pre-line',
              textAlign: 'left',
              paddingRight: '30px',
              cursor: 'pointer',
            }}
          >
            {dialogues[currentDialogue]}
          </p>

            <button
              onClick={nextDialogue}
              style={{
                position: 'absolute',
                bottom: '15px',
                right: '20px',
                background: 'none',
                border: 'none',
                fontSize: '12px',
                fontFamily: 'Galmuri11',
                cursor: 'pointer',
                color: '#000',
                fontWeight: 'bold',
                padding: 0,
              }}
            >
              ▼
            </button>
        </div>
      </div>
    </Layout>
  );
};

export default DialogueScreen;