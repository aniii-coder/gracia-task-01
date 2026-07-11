import logo from './logo.svg';
import './App.css';
import RootLayout from './root-layout/RootLayout';
import Home from './features/home/Home';

function App() {
  return (
    <RootLayout>

      <Home />
    </RootLayout>
  );
}

export default App;
