import Facturacion from './pages/facturacion';
import './App.css'
import Account from './pages/account.tsx';
import Layout from './pages/layout.tsx';
function App() {
  return (
    <div className='contenedor'>
      <Layout />
      <main className='main-content'>
        <Account />
      </main>
    </div>
    )
}

export default App;