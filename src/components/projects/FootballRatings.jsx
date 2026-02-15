import { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, dark, oneDark, coldarkDark, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../../style/projects/FootballRatings.css'
import Navbar from "../Navbar";
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex'
import teamCode from "./code/TeamCode.js"


function FootballRatings() {

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true); // triggers CSS animation
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
            <li>I can now calculate the winning <InlineMath math="W"/>, drawing <InlineMath math="D"/> and losing <InlineMath math="L"/> -chances. I derive the win <InlineMath math="W"/>
             and loss <InlineMath math="L"/>chances from the expected score <InlineMath math="E"/> and <InlineMath math="D"/></li>
             <BlockMath math={"W = E - \\frac{D}{2}, \\quad L = 1 - W - D"}/>
          </ul>
          <p>
            There are a ton of ways to calculate this, but since i liked chess i tried this one.
            I also have a plan to implement this with Linear algebra by doing an eigenvector-based ranking, which is inspired from the PageRank-algorithm. 
          </p>
          <h2>My project</h2>
          <p>
            I wanted to use object-oriented-programming principles(since i just learned it) to develop this project. I also used java. 
            For UI I used javaFx, Maven for building the projects and football-data.org as the API. 
            <br/>
            I started by creating a structure for a Team. Since each team has a name, logo, games played and a rating I created such an abstract class. 
          </p>            
          <div className="fade-in-up delay-2">
            <SyntaxHighlighter language="java" style={oneDark}>
              {teamCode}
            </SyntaxHighlighter>
          </div>
      </div>
    </div>
    </>
  );
}

export default FootballRatings;