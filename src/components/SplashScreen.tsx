import React, { useEffect, useState } from 'react';
import dakshLogo from '../../icons/daksh.png';

interface SplashScreenProps {
  onFinish: () => void;
}

export function SplashScreen({ onFinish }: SplashScreenProps) {
  const [phase, setPhase] = useState<'visible' | 'fadeOut'>('visible');

  useEffect(() => {
    // Show splash for 2.6s then fade out
    const showTimer = setTimeout(() => setPhase('fadeOut'), 2600);
    // Notify parent after fade-out animation (0.5s)
    const doneTimer = setTimeout(() => onFinish(), 3100);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(doneTimer);
    };
  }, [onFinish]);

  return (
    <div
      className="splash-overlay"
      style={{
        animationDelay: phase === 'fadeOut' ? '0s' : '9999s',
        animationPlayState: phase === 'fadeOut' ? 'running' : 'paused',
      }}
    >
      {/* Ambient background blobs */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      {/* Logo with ripple rings */}
      <div className="splash-logo-wrap">
        <div className="splash-ripple" />
        <div className="splash-ripple" />
        <div className="splash-ripple" />
        <img src={dakshLogo} alt="Daksh Dynamics" className="splash-logo" />
      </div>

      {/* Company Name */}
      <div className="splash-company">Daksh Dynamics</div>

      {/* Tagline */}
      <div className="splash-tagline">Empowering Learners Everywhere</div>

      {/* Divider line */}
      <div className="splash-divider" />

      {/* Powered by */}
      <div className="powered-text">Powered by Daksh Dynamics</div>
    </div>
  );
}
