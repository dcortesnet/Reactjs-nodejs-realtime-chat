import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EntryRoomPage } from '../pages/EntryRoomPage';
import { ChatRoomPage } from '../pages/ChatRoomPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { useUser } from '../hooks/useUser';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<EntryRoomPage />} />
        <Route element={<ProtectedRoute canActivate={true} redirectPath="" />}>
          <Route path="room" element={<ChatRoomPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
