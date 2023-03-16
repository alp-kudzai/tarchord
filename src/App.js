// import logo from './logo.svg';
import './App.css';

function App() {

  const API = "https://api.uberchord.com/v1/embed/chords?nameLike="
  function submitSearch(e){
    e.preventDefault()
    let term = document.getElementById("searchbar").value
    let chordSpace = document.getElementById("ChordSpace")
    let newIframe = document.createElement("iframe")
    newIframe["class"] = "chordFrames"
    newIframe["src"] = API+term
    newIframe["title"] = "Chords"
    
    chordSpace.appendChild(newIframe)
  }
  return (
    <div className="App">
      <header>
        <h1 id="TitleBar">Tarchord</h1>
        <h3 id="subtitleBar">Google for Guitar chords</h3>
        <input type="text" id="searchbar"/>
        <button id="submitButton" onClick={submitSearch}>O_O</button>
      </header>
      
      <div id="ChordSpace">

      </div>
    </div>
  );
}

export default App;
