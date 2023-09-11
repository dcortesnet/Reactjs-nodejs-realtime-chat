import { SocketProvider } from './contexts/SocketContext';
import { UserProvider } from './contexts/UserContext';
import { AppRouter } from './routes/AppRouter';

function App() {
  return (
    <SocketProvider>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </SocketProvider>
  );
}

export default App;
