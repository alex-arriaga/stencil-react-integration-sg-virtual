import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <h1 className="mt-5 mb-4">Temas: Programación e IoT</h1>
                      <sg-card-list></sg-card-list>
                  </div>
              </div>
          </div>
      </header>
    </div>
  );
}

export default App;
