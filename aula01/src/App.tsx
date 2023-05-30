import { Routes } from './routes/index';
import { UsuarioLogadoProvider } from './shared/contexts';

function App() {
  return (
    <div className="App">
      <UsuarioLogadoProvider>
        <Routes />
      </UsuarioLogadoProvider>
    </div>
  );
}

export default App;
