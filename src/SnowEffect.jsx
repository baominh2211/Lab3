import { useEffect } from 'react';

function SnowEffect() {
  useEffect(() => {
    // Create falling snowflakes
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = ['❄', '❅', '❆'][Math.floor(Math.random() * 3)];
      snowflake.style.left = Math.random() * 100 + '%';
      snowflake.style.animationDuration = Math.random() * 3 + 7 + 's';
      snowflake.style.opacity = Math.random() * 0.6 + 0.4;
      snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
      
      document.getElementById('snow-container')?.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 10000);
    };

    const snowInterval = setInterval(createSnowflake, 200);

    // Create floating Christmas decorations
    const createDecoration = () => {
      const decorations = ['🎁', '🔔', '⭐', '🕯️', '🎀', '🧦'];
      const decoration = document.createElement('div');
      decoration.className = 'floating-decoration';
      decoration.innerHTML = decorations[Math.floor(Math.random() * decorations.length)];
      decoration.style.left = Math.random() * 100 + '%';
      decoration.style.animationDuration = Math.random() * 5 + 10 + 's';
      decoration.style.fontSize = Math.random() * 20 + 20 + 'px';
      
      document.getElementById('decorations-container')?.appendChild(decoration);

      setTimeout(() => {
        decoration.remove();
      }, 15000);
    };

    const decorationInterval = setInterval(createDecoration, 3000);

    return () => {
      clearInterval(snowInterval);
      clearInterval(decorationInterval);
    };
  }, []);

  return (
    <>
      <div id="snow-container" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden'
      }} />
      <div id="decorations-container" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2,
        overflow: 'hidden'
      }} />
      
      {/* Static 3D Christmas scene elements */}
      <div className="christmas-scene-static">
        {/* Giant Santa on left */}
        <div className="giant-santa left">🎅</div>
        {/* Giant Christmas tree on right */}
        <div className="giant-tree right">🎄</div>
        {/* Nutcracker soldier */}
        <div className="nutcracker">🥜</div>
        {/* Gingerbread house center */}
        <div className="gingerbread-house">🏠</div>
        {/* Reindeer */}
        <div className="reindeer">🦌</div>
        {/* Presents scattered */}
        <div className="present gift-1">🎁</div>
        <div className="present gift-2">🎁</div>
        <div className="present gift-3">🎁</div>
      </div>
      
      {/* Christmas lights garland */}
      <div className="christmas-garland-top" />
      
      {/* Bottom decoration floor */}
      <div className="christmas-decorations-bottom">
        🎄 🎁 ⛄ 🎅 🦌 🔔 🕯️ ⭐ 🍪 🥛 🎄 🎁 ⛄ 🎅 🦌 🔔 🕯️ ⭐
      </div>
      
      <style>{`
        .snowflake {
          position: absolute;
          top: -20px;
          color: white;
          user-select: none;
          pointer-events: none;
          animation: fall linear infinite;
          z-index: 1;
        }

        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }

        .floating-decoration {
          position: absolute;
          top: -50px;
          user-select: none;
          pointer-events: none;
          animation: floatDown linear infinite;
          z-index: 2;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
        }

        @keyframes floatDown {
          to {
            transform: translateY(100vh) rotate(180deg);
            opacity: 0;
          }
        }

        /* 3D Christmas Scene Elements */
        .christmas-scene-static {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 0;
        }

        .giant-santa {
          position: absolute;
          font-size: 150px;
          left: 5%;
          bottom: 10%;
          animation: santaWave 3s ease-in-out infinite;
          filter: drop-shadow(0 10px 30px rgba(255, 0, 0, 0.5));
          transform-origin: bottom center;
        }

        @keyframes santaWave {
          0%, 100% {
            transform: rotate(-5deg) scale(1);
          }
          50% {
            transform: rotate(5deg) scale(1.05);
          }
        }

        .giant-tree {
          position: absolute;
          font-size: 180px;
          right: 5%;
          bottom: 10%;
          animation: treeShine 4s ease-in-out infinite;
          filter: drop-shadow(0 10px 40px rgba(0, 255, 0, 0.4));
        }

        @keyframes treeShine {
          0%, 100% {
            filter: drop-shadow(0 10px 40px rgba(0, 255, 0, 0.4)) brightness(1);
          }
          50% {
            filter: drop-shadow(0 15px 50px rgba(255, 215, 0, 0.6)) brightness(1.2);
          }
        }

        .nutcracker {
          position: absolute;
          font-size: 80px;
          left: 20%;
          bottom: 15%;
          animation: marchInPlace 2s steps(2) infinite;
          filter: drop-shadow(0 5px 15px rgba(139, 69, 19, 0.5));
        }

        @keyframes marchInPlace {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .gingerbread-house {
          position: absolute;
          font-size: 100px;
          left: 50%;
          transform: translateX(-50%);
          bottom: 20%;
          animation: houseGlow 3s ease-in-out infinite;
          filter: drop-shadow(0 8px 25px rgba(139, 69, 19, 0.6));
        }

        @keyframes houseGlow {
          0%, 100% {
            filter: drop-shadow(0 8px 25px rgba(139, 69, 19, 0.6));
          }
          50% {
            filter: drop-shadow(0 12px 35px rgba(255, 200, 100, 0.8));
          }
        }

        .reindeer {
          position: absolute;
          font-size: 90px;
          right: 25%;
          bottom: 15%;
          animation: reindeerJump 2s ease-in-out infinite;
          filter: drop-shadow(0 5px 20px rgba(139, 69, 19, 0.4));
        }

        @keyframes reindeerJump {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(-5deg);
          }
        }

        .present {
          position: absolute;
          font-size: 60px;
          animation: presentShake 3s ease-in-out infinite;
          filter: drop-shadow(0 5px 15px rgba(255, 0, 0, 0.3));
        }

        .gift-1 {
          left: 15%;
          bottom: 12%;
          animation-delay: 0s;
        }

        .gift-2 {
          right: 15%;
          bottom: 12%;
          animation-delay: 1s;
        }

        .gift-3 {
          left: 45%;
          bottom: 15%;
          animation-delay: 2s;
        }

        @keyframes presentShake {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }

        /* Christmas lights garland */
        .christmas-garland-top {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          background: 
            repeating-linear-gradient(
              90deg,
              #ff0000 0px,
              #ff0000 40px,
              #00ff00 40px,
              #00ff00 80px,
              #0000ff 80px,
              #0000ff 120px,
              #ffff00 120px,
              #ffff00 160px
            );
          opacity: 0.15;
          z-index: 999;
          animation: garlandPulse 2s ease-in-out infinite;
          border-bottom: 3px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }

        .christmas-garland-top::before {
          content: '🔴 🟢 🔵 🟡 🔴 🟢 🔵 🟡 🔴 🟢 🔵 🟡 🔴 🟢 🔵 🟡 🔴 🟢 🔵 🟡';
          position: absolute;
          top: 10px;
          left: 0;
          right: 0;
          font-size: 24px;
          text-align: center;
          animation: lightsGlow 1.5s ease-in-out infinite;
        }

        @keyframes garlandPulse {
          0%, 100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.25;
          }
        }

        @keyframes lightsGlow {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.5);
          }
        }

        .christmas-decorations-bottom {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          text-align: center;
          font-size: 35px;
          pointer-events: none;
          z-index: 999;
          opacity: 0.95;
          padding: 15px 0;
          background: linear-gradient(
            to top,
            rgba(139, 69, 19, 0.7) 0%,
            rgba(101, 67, 33, 0.4) 50%,
            transparent 100%
          );
          animation: bottomDecorationFloat 4s ease-in-out infinite;
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
          border-top: 3px solid rgba(139, 69, 19, 0.5);
        }

        @keyframes bottomDecorationFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.02);
          }
        }

        /* Checkered floor pattern like in the image */
        body::after {
          content: '';
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 150px;
          background: 
            repeating-linear-gradient(
              90deg,
              rgba(139, 0, 0, 0.1) 0px,
              rgba(139, 0, 0, 0.1) 40px,
              rgba(0, 100, 0, 0.1) 40px,
              rgba(0, 100, 0, 0.1) 80px
            ),
            repeating-linear-gradient(
              0deg,
              rgba(139, 0, 0, 0.05) 0px,
              rgba(139, 0, 0, 0.05) 40px,
              rgba(0, 100, 0, 0.05) 40px,
              rgba(0, 100, 0, 0.05) 80px
            );
          pointer-events: none;
          z-index: 0;
          opacity: 0.3;
        }
      `}</style>
    </>
  );
}

export default SnowEffect;
