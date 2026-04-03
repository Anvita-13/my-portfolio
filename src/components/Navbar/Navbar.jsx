// Navbar.jsx
import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About',           id: 'about'           },
  { label: 'Education',       id: 'education'       },
  { label: 'Skills',          id: 'skills'          },
  { label: 'Projects',        id: 'projects'        },
  { label: 'Accomplishments', id: 'accomplishments' },
  { label: 'Interests',       id: 'interests'       },
  { label: 'Contact',         id: 'contact'         },
];

export default function Navbar({ name }) {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeId,   setActiveId]   = useState('');

  // Show shadow when scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight active section via IntersectionObserver
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.id);
    const targets = ids.map(id => document.getElementById(id)).filter(Boolean);
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id); });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    targets.forEach(t => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar__inner">
          {/* Clicking the logo scrolls to top/hero */}
          <span className="navbar__logo" onClick={scrollToTop} role="button" tabIndex={0}>
            {name.split(' ')[0]}
          </span>

          {/* Desktop links */}
          <ul className="navbar__links">
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <button
                  className={`navbar__link ${activeId === link.id ? 'active' : ''}`}
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger (mobile) */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(link => (
          <button
            key={link.id}
            className={`navbar__drawer-link ${activeId === link.id ? 'active' : ''}`}
            onClick={() => scrollTo(link.id)}
          >
            {link.label}
          </button>
        ))}
      </div>
    </>
  );
}
