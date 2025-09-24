import React from "react";
import Layout from './Layout';
import logo from '../assets/images/pokemon-logo.png';
import textbox from '../assets/images/textbox.png' 

const StartScreen = ({ onStart }) => {
    return (
        <Layout>
            <img 
                src={logo} 
                alt="logo" 
                style={{ 
                    width: '250px', 
                    position: 'absolute', 
                    top: '150px' 
                }}
            />
            <h1 style={{ 
                fontFamily: 'Galmuri11', 
                fontSize: '16px',
                color: '#fff',
                position: 'absolute',
                top: '250px',
                textShadow: `
                    -2px -2px 0 #000,
                    2px -2px 0 #000,
                    -2px 2px 0 #000,
                    2px 2px 0 #000
                `
            }}>
                포켓몬 파티 구성하기
            </h1>
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
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0 20px',
                    boxSizing: 'border-box',
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
                    }}
                >
                    포켓몬과 함께 여행을 {"\n"}떠나시겠습니까?
                </p>
                <button
                    onClick={onStart}
                    style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '12px', 
                        fontFamily: 'Galmuri11',
                        cursor: 'pointer',
                        color: '#000',
                        fontWeight: 'bold',
                    }}
                >
                    ▶ START
                </button>
            </div>
        </Layout>
    );
};

export default StartScreen;