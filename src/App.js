import logo from './logo.svg';

import './App.css';
import './Comtonents/Info/info.css';
import './Comtonents/Main/main.css';
import './Comtonents/Footer/footer.css';
import Info from './Comtonents/Info/info.js';
import Main from './Comtonents/Main/main.js';
import Footer from './Comtonents/Footer/footer.js';

function App() {
  return (
    <div class="container">
      <Info />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
