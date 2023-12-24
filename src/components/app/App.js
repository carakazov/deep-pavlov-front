import './App.css';
import Header from "../header/Header";
import Main from "../main/Main";

function App() {
  return (
    <div className={'app-container'}>
      <header className={'header-container'}>
        <Header/>
      </header>
      <main>
          <Main/>
      </main>
    </div>
  );
}

export default App;
