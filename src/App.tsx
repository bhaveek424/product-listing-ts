import { Navbar } from './components/Navbar';
import { Store } from './components/Store';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Store />
    </ShoppingCartProvider>
  );
}

export default App;
