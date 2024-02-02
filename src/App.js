// import logo from './logo.svg';
import { Header } from './Header';
import { Footer } from './Footer';
import Card from './Card';
import './App.css';

function App() {
  return (
    <div className="main">
      <Header />
      <div className='row1'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card>
        </Card>
      </div>
      <Footer />
    </div>

  );
}

export default App;

