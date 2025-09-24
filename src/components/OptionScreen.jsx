import React, { useState } from 'react';
import Layout from './Layout';
import ma from '../assets/images/ma.png';
import textbox from '../assets/images/textbox.png';

const OptionScreen = ({ onNext }) => {
    const [options, setOptions] = useState({ legendary: false, mythical: false });
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setOptions(prev => ({ ...prev, [name]: checked }));
        onNext();
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
          <div
            style={{
                fontSize: '12px',
                fontFamily: 'Galmuri11',
                flexDirection: 'column',
                color: '#000',
                margin: 0,
                whiteSpace: 'pre-line',
                textAlign: 'left',
                paddingRight: '30px',
                cursor: 'pointer',
            }}
            >
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <input
                type="checkbox"
                name="legendary"
                checked={options.legendary}
                onChange={(e) =>
                    setOptions((prev) => ({ ...prev, legendary: e.target.checked }))
                }
                />
                전설의 포켓몬 포함
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <input
                type="checkbox"
                name="mythical"
                checked={options.mythical}
                onChange={(e) =>
                    setOptions((prev) => ({ ...prev, mythical: e.target.checked }))
                }
                />
                환상의 포켓몬 포함
            </label>
            </div>

            <button
              onClick={handleCheckboxChange}
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

export default OptionScreen;