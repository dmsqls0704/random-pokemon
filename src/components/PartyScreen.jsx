import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import ball from '../assets/images/ball.png';
import textbox from '../assets/images/textbox.png'

const PartyScreen = ({ options, onNext }) => {
  const [party, setParty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(0); // 애니메이션용

  useEffect(() => {
    const fetchParty = async () => {
      setLoading(true);
      setVisibleCount(0);

      // 모든 포켓몬 목록 가져오기
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
      const data = await res.json();
      const allPokemons = data.results;

      // 전설/환상 여부 확인
      const filtered = [];
      for (let p of allPokemons) {
        const speciesRes = await fetch(p.url.replace('pokemon', 'pokemon-species'));
        const speciesData = await speciesRes.json();

        if (!options.legendary && speciesData.is_legendary) continue;
        if (!options.mythical && speciesData.is_mythical) continue;

        filtered.push({ name: p.name, id: speciesData.id });
      }

      // 랜덤 6마리 선택
      const selected = [];
      const copy = [...filtered];
      while (selected.length < 6 && copy.length > 0) {
        const idx = Math.floor(Math.random() * copy.length);
        selected.push(copy[idx]);
        copy.splice(idx, 1);
      }

      // 이미지 URL 추가
      const final = selected.map(p => ({
        ...p,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`,
      }));

      setParty(final);
      setLoading(false);
    };

    fetchParty();
  }, [options]);

  // 포켓몬 등장 애니메이션
  useEffect(() => {
    if (!loading && party.length > 0) {
      const interval = setInterval(() => {
        setVisibleCount(prev => {
          if (prev >= party.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 300); // 0.3초마다 한 마리씩 등장
      return () => clearInterval(interval);
    }
  }, [loading, party]);

  if (loading) {
    return (
      <Layout>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={ball}
            alt="loading"
            style={{
              width: '100px',
              animation: 'shake 0.5s infinite',
            }}
          />
        </div>

        {/* CSS for shaking animation */}
        <style>{`
          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
            100% { transform: translateX(0); }
          }
        `}</style>
      </Layout>
    );
  }

  return (
    <Layout>
      <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            gap: '30px',
            justifyItems: 'center',
            alignItems: 'center',
            height: 'calc(100% - 200px)', // 텍스트박스 높이만큼 공간 확보
            paddingBottom: '120px'
        }}
        >
        {party.slice(0, visibleCount).map((p, index) => (
            <div
            key={index}
            style={{
                textAlign: 'center',
                opacity: 0,
                animation: 'fadeIn 0.5s forwards',
                animationDelay: `${index * 0.3}s`,
            }}
            >
            <img src={p.img} alt={`#${p.id}`} style={{ width: '100px'}} />
            <p 
                style={{ 
                    fontFamily: 'Galmuri11', 
                    color: '#fff', 
                    fontSize: '12px', 
                    marginTop: '5px', 
                    fontWeight: 'bold',
                    textShadow: `
                    -2px -2px 0 #000,
                    2px -2px 0 #000,
                    -2px 2px 0 #000,
                    2px 2px 0 #000
                    ` 
                    }}>
                #{p.id.toString().padStart(4, '0')}
            </p>
            </div>
        ))}
        </div>

      {/* CSS for fadeIn */}
      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
      
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
        흐음... 과연,{"\n"}이 포켓몬 왠지 기뻐하는 것 같군.
        </p>
        <button
            onClick={onNext}
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
    </Layout>
  );
};

export default PartyScreen;
