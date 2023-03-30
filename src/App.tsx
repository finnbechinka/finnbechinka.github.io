import "./App.css";
import githubLogo from "./assets/github.svg";
import linkedinLogo from "./assets/linkedin.svg";
import stackoverflowLogo from "./assets/stackoverflow.svg";

function App() {
  return (
    <div className="App">
      <div className="banner">
        <h1>Finn's GitHub Page</h1>
        <p>:)</p>
      </div>
      <div className="socials">
        <a href="https://www.linkedin.com/in/finn-b-178a2b18b" target="_blank">
          <img src={linkedinLogo} className="logo" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/finnbechinka" target="_blank">
          <img src={githubLogo} className="logo" alt="GitHub logo" />
        </a>
        <a href="https://stackoverflow.com/users/16952372" target="_blank">
          <img src={stackoverflowLogo} className="logo" alt="Stack Overflow logo" />
        </a>
      </div>
    </div>
  );
}

export default App;
