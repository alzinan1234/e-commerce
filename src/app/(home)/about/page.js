import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <nav className="navbar">
        <a href="#" className="nav-cta-btn">
          Get Started
        </a>
      </nav>
      <div className="section">
        <div className="video-visual">
          <video
            className="video"
            autoplay
            loop
            muted
            poster=""
            role="none"
            aria-label="background gradient animation"
          >
            <source
              src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/bg-gradient-animation.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="section-wrapper">
          <div className="content-wrapper">
            <div className="content content-1">
              <div className="mobile-visual">
                <img
                  className="card-img"
                  src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-1.avif"
                  alt="Fantasy warrior  - Video game character"
                />
              </div>
              <div className="meta">
                <h2 className="headline">
                  Unleash Your
                  <span className="text-highlight"> Inner Warrior</span>
                </h2>
                <p className="desc">
                  Join the battle and conquer the arena with unmatched skill and
                  strategy.
                </p>
              </div>
            </div>
            <div className="content content-2">
              <div className="mobile-visual">
                <img
                  className="card-img"
                  src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-2.avif"
                  alt="Green haired ninja in armor - Video game character"
                />
              </div>
              <div className="meta">
                <h2 className="headline">
                  Embark on Your
                  <span className="text-highlight">Legendary Journey</span>
                </h2>
                <p className="desc">
                  Immerse Yourself in a World Where Legends Clash and Heroes
                  Rise to Glory.
                </p>
              </div>
            </div>
            <div className="content content-3">
              <div className="mobile-visual">
                <img
                  className="card-img"
                  src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-3.avif"
                  alt="Female warrior in armor - Video game character"
                />
              </div>
              <div className="meta">
                <h2 className="headline">
                  Master the
                  <span className="text-highlight">Art of Magic</span>
                </h2>
                <p className="desc">
                  Harness powerful spells and enchantments to dominate your foes
                  and change the course of battle.
                </p>
              </div>
            </div>
            <div className="content content-4">
              <div className="mobile-visual">
                <img
                  className="card-img"
                  src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-4.avif"
                  alt="Agile warrior - Video game character"
                />
              </div>
              <div className="meta">
                <h2 className="headline">
                  Rise as the <span className="text-highlight">Champion</span>
                </h2>
                <p className="desc">
                  Lead your team to victory with unparalleled strength and
                  unwavering determination.
                </p>
              </div>
            </div>
          </div>
          <div className="visual">
            <div className="card-wrapper">
              <div className="card card-1">
                <img
                  className="card-img"
                  src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-1.avif"
                  alt="Fantasy warrior  - Video game character"
                />
              </div>
              <div className="card card-2">
                <img
                  className="card-img"
                  src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-2.avif"
                  alt="Green haired ninja in armor - Video game character"
                />
              </div>
              <div className="card card-3">
                <img
                  className="card-img"
                  src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-3.avif"
                  alt="Female warrior in armor - Video game character"
                />
              </div>
              <div className="card card-4">
                <img
                  className="card-img"
                  src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-4.avif"
                  alt="Agile warrior - Video game character"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
