// import logo from './logo.svg';
import './App.css';

function App() {

  const API = "https://api.uberchord.com/v1/embed/chords?nameLike="
  function submitSearch(e){
    e.preventDefault()
    let term = document.getElementById("searchbar").value
    let chordSpace = document.getElementById("ChordSpace")
    let newIframe = document.createElement("iframe")
    newIframe["src"] = API+term
    newIframe["title"] = "Chords"
    newIframe["class"] = "chordFrames"
    chordSpace.appendChild(newIframe)
  }
  return (
    <div className="App">
      <header>
        <h1 id="TitleBar">Tarchord</h1>
        <h3 id="subtitleBar">Google for Guitar chords</h3>
        <input type="text" id="searchbar"/>
        <input type="submit" id="submitButton" onClick={submitSearch}/>
      </header>
      
      <div id="ChordSpace">

      </div>
    </div>
  );
}

export default App;
