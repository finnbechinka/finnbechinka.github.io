import "./App.css";
import githubLogo from "./assets/github.svg";
import linkedinLogo from "./assets/linkedin.svg";
import stackoverflowLogo from "./assets/stackoverflow.svg";
import MouseEffect from "./components/MouseEffect";

function App() {
  return (
    <>
      <div className="App">
        <MouseEffect />
        <div className="centerContainer">
          <div className="banner">
            <h1>Finn's GitHub Page</h1>
            <p>:)</p>
          </div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/finn-b-178a2b18b" target="_blank">
              <img src={linkedinLogo} className="logo linkedin" alt="LinkedIn logo" />
            </a>
            <a href="https://github.com/finnbechinka" target="_blank">
              <img src={githubLogo} className="logo github" alt="GitHub logo" />
            </a>
            <a href="https://stackoverflow.com/users/16952372" target="_blank">
              <img
                src={stackoverflowLogo}
                className="logo stackoverflow"
                alt="Stack Overflow logo"
              />
            </a>
          </div>
        </div>
        <MouseEffect />
      </div>
    </>
  );
}

export default App;
