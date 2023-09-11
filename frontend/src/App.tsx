import { UserProvider } from './contexts/UserContext';
import { AppRouter } from './routes/AppRouter';

function App() {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
}

export default App;
