import { useEffect } from 'react';

function SnowEffect() {
  useEffect(() => {
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

    const interval = setInterval(createSnowflake, 200);

    return () => clearInterval(interval);
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

        /* Additional Christmas decorations */
        .christmas-lights {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 10px;
          background: linear-gradient(
            90deg,
            #ff0000 0%,
            #00ff00 25%,
            #0000ff 50%,
            #ffff00 75%,
            #ff0000 100%
          );
          opacity: 0.3;
          z-index: 999;
          animation: lightsMove 3s linear infinite;
        }

        @keyframes lightsMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
      <div className="christmas-lights" />
    </>
  );
}

export default SnowEffect;
