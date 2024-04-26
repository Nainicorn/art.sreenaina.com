import Portfolio from './Portfolio.js'
function App() {
  return (
    <div className="app">
      <header>
        <div class="nav">
          <ul>
            <a href="test.html">Projects</a>
            <a href="/home">Purchase</a>
            <a href="/home">Contact</a>
          </ul>
        </div>
      </header>
      <div class="box">
        <div class="naina">Naina's</div>
        <div class="portfolio">ART PORTFOLIO</div>
      </div>
      <div class="gallery">GALLERY</div>
      <div class="images"></div>
      <Portfolio />
    </div>
  );
}

export default App;
