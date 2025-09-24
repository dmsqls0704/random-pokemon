import React from 'react';
import Layout from './Layout';
import ma from '../assets/images/ma.png';
import textbox from '../assets/images/textbox.png';
import ball from '../assets/images/ball.png'
import './Ball.css'

const BallScreen = ({ onNext }) => {
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
            여기에 몬스터볼이 있다!{"\n"}몬스터볼을 눌러보도록 하거라
          </p>
        <img
          src={ball}
          alt="ball"
          onClick={onNext}
          className="shake-ball"
          style={{
            position: 'absolute',
            bottom: '160px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100px',
            zIndex: 2,
          }}
        />
        </div>
      </div>
    </Layout>
  );
};

export default BallScreen;