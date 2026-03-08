import { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, dark, oneDark, coldarkDark, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../../style/projects/FootballRatings.css'
import Navbar from "../Navbar";
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex'
import teamCode from "./code/TeamCode.js"
import { FaLinkedin, FaGithub, FaGitlab, FaFilePdf, FaEnvelope } from 'react-icons/fa'

/* Images */
import listTeams from '../../assets/images/Projects/FootballRatings/home.png'; 
import graph from '../../assets/images/Projects/FootballRatings/graph.png'; 
import increasing from '../../assets/images/Projects/FootballRatings/increasing.png'; 
import darkmode from '../../assets/images/Projects/FootballRatings/darkmode.png'; 
import chances from '../../assets/images/Projects/FootballRatings/chances.png'; 
import calender from '../../assets/images/Projects/FootballRatings/calender.png'; 


function FootballRatings() {

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  /* Carousel */
  const features = [
    { image: calender, text: "Full match calendar with all scheduled games." },
    { image: graph, text: "Dynamic rating graph showing team progression." },
    { image: chances, text: "Calculated win, draw and loss probabilities." },
    { image: increasing, text: "Showing rankings differently." },
    { image: darkmode, text: "Fully implemented dark mode support." }
  ];

  const [currentFeature, setCurrentFeature] = useState(0);

  const nextFeature = () => {
    if (currentFeature < features.length - 1) {
      setCurrentFeature(currentFeature + 1);
    }
  };

  const prevFeature = () => {
    if (currentFeature > 0) {
      setCurrentFeature(currentFeature - 1);
    }
  };

  useEffect(() => {
    setIsVisible(true); 
  }, []);
  return (
    <>
    <Navbar/>
    <div className="FootballRatings">
      <div className={`content ${isVisible ? 'animate-in' : ''}`} ref={containerRef}>
        <h1>Football Ratings</h1>
        <p>
          I haven't always liked football, but started to enjoy if when watching with friends and family. I started watching it 
          in early 2022. At this time i also enjoyed learning & watching chess. In chess you have a rating, where you can calculate the chances
          of a win/draw/loss agains your opponent. I therefore got the idea, to add this to each Premie leauge team. 
          I calculated the chances, with the following math:
          </p>
          <ul className="course-list">
            <li> The expected score <InlineMath math="E" /> is the probability of a team winning against another team. This is based on their difference in rating, and is calculated as: 
              <BlockMath math={`E = \\frac{1}{1 + 10^{\\frac{\\Delta Elo}{400}}}`} /></li>
            <li>The draw probability <InlineMath math="D"/> is the probability of two teams drawing. 
            Here i set the two teams max draw chance to <InlineMath math="D_{max} = 0.5"/> and the decay constant <InlineMath math="k = 0.004"/></li>
            <BlockMath math={"D = D_{max} \\cdot e^{-k \\cdot |\\Delta Elo|} "}/>
            <li>I can now calculate the winning <InlineMath math="W"/>, drawing <InlineMath math="D"/> and losing <InlineMath math="L"/> - chances. I derive the win <InlineMath math="W"/>
             and loss <InlineMath math="L"/> chances from the expected score <InlineMath math="E"/> and <InlineMath math="D"/></li>
             <BlockMath math={"W = E - \\frac{D}{2}, \\quad L = 1 - W - D"}/>
          </ul>
          <p>
            There are a ton of ways to calculate this, but since i liked chess i tried this one.
            I also have a plan to implement this with Linear algebra by doing an eigenvector-based ranking, which is inspired from the PageRank-algorithm. 
          </p>
          <h2>My project</h2>
          <p>
            I wanted to use object-oriented-programming principles(since I just learned it back then) to develop this project. I also used java. 
            For UI I used javaFx, Maven for building the projects and football-data.org as the API. 
            <br/>
            I started by creating a structure for a Team. Since each team has a name, logo, games played and a rating I created such an abstract class. 
          </p>            
          <div className="fade-in-up delay-2">
            <SyntaxHighlighter language="java" style={oneDark}>
              {teamCode}
            </SyntaxHighlighter>
          </div>
          <p>
            After implementing the different getters and setters for the abstract teams, I made a class for every team. Now i could finaly create a list for the teams. 
          </p>
          <div className="homeList fade-in-up delay-2">
            <img src={listTeams}/>
          </div>
          <p>
            Now I could implement match simulations between two teams. However, instead of 
            checking my phone or browsing the web for match statistics, I found a football 
            data API called{" "}
            <a 
              href="https://www.football-data.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="api-link"
            >
              football-data.org
            </a>.
            Using the API I fetched comprehensive match data — such as scheduled dates, final results, and the two competing teams — 
            which I then used in my simulations and ranking calculations          
            </p>
            <h2>Features</h2>
            <p>
            Rather than diving into technical details, this section highlights the main features of the project.
            Each feature demonstrates a key functionality or design choice that enhances the user experience.
            </p>

            {/* Carousel */}
            <div className="carousel">

              <button
                className="arrow"
                onClick={prevFeature}
                disabled={currentFeature === 0}
              >
                ❮
              </button>

              <div className="carousel-window fade-in-up delay-3">
                <div
                  className="carousel-track"
                  style={{ transform: `translateX(-${currentFeature * 100}%)` }}
                >
                  {features.map((feature, index) => (
                    <div className="slide" key={index}>
                      <img src={feature.image} alt="Feature preview" />
                      <p>{feature.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="arrow"
                onClick={nextFeature}
                disabled={currentFeature === features.length - 1}
              >
                ❯
              </button>
            </div>
            <p>
              I haven't worked on the following project in about four months. 
              However im planning to implement an automatic update of teams ranking after every game.
              I would also like to implement new ways of ranking the teams, instead of chess ranking. 
              This would open up to adding new leauges such as bundes liga, champions leauge etc. 
              This project isn't my finest work, but I learnt a lot developing it. 
              Feel free to check the project out on my Gitlab or contact me on my social media profiles. 
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/christian-egelund-hansen-94586a298/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://github.com/Egelund48" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
              </a>            
              <a href="https://gitlab.sdu.dk/chhan24" target="_blank" rel="noopener noreferrer">
                <FaGitlab className="social-icon" />
              </a>
              <a href="/CV_main.pdf" target="_blank" rel="noopener noreferrer">
                <FaFilePdf className="social-icon" />
                <span>CV</span>
              </a>
              <a href="mailto:christianegelundhansen@hotmail.com">
                  <FaEnvelope className="social-icon"/>
              </a>
            </div>
      </div>
    </div>
    </>
  );
}

export default FootballRatings;