import { useEffect, useRef, useCallback } from 'react';
import profilePic from './assets/profile.jpg';
import './App.css';

interface SocialCardProps {
  platform: 'ig' | 'tt';
  href: string;
  target: number;
  icon: React.ReactNode;
}

function formatCount(n: number): string {
  if (n >= 1000) {
    const k = n / 1000;
    return k % 1 === 0 ? k.toFixed(0) + 'K' : k.toFixed(1) + 'K';
  }
  return n.toLocaleString();
}

function SocialCard({ platform, href, target, icon }: SocialCardProps) {
  const countRef = useRef<HTMLDivElement>(null);

  const animate = useCallback(() => {
    const el = countRef.current;
    if (!el) return;

    const duration = 1800;
    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      if (el) el.textContent = formatCount(current);
      if (progress < 1) requestAnimationFrame(step);
      else if (el) el.textContent = formatCount(target);
    }

    requestAnimationFrame(step);
  }, [target]);

  useEffect(() => {
    const timer = setTimeout(animate, 400);
    return () => clearTimeout(timer);
  }, [animate]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`card card--${platform}`}
    >
      <div className="card-icon">{icon}</div>
      <div className="card-info">
        <div className="card-count" ref={countRef}>0</div>
        <div className="card-label">Followers</div>
      </div>
    </a>
  );
}

const InstagramIcon = (
  <svg viewBox="0 0 24 24">
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
  </svg>
);

const TikTokIcon = (
  <svg viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.28 8.28 0 0 0 4.85 1.56V7.01a4.84 4.84 0 0 1-1.09-.32z" />
  </svg>
);

function App() {
  return (
    <div className="container">
      <div className="avatar-wrapper">
        <div className="avatar">
          <img src={profilePic} alt="Professor KPOP" />
        </div>
      </div>

      <h1 className="name">Professor KPOP</h1>
      <p className="handle">@professor.kpop</p>

      <div className="cards">
        <SocialCard
          platform="ig"
          href="https://instagram.com/professor.kpop"
          target={33700}
          icon={InstagramIcon}
        />
        <SocialCard
          platform="tt"
          href="https://tiktok.com/@professor.kpop"
          target={12200}
          icon={TikTokIcon}
        />
      </div>
    </div>
  );
}

export default App;
