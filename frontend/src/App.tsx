import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChatRoomPage } from './pages/ChatRoomPage';
import { EntryRoomPage } from './pages/EntryRoomPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SocketProvider } from './contexts/SocketContext';

function App() {
  return (
    <SocketProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<EntryRoomPage />} />
          <Route path="/room" element={<ChatRoomPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </SocketProvider>
  );
}

export default App;
