import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EntryRoomPage } from '../pages/EntryRoomPage';
import { ChatRoomPage } from '../pages/ChatRoomPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { useUser } from '../hooks/useUser';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRouter = () => {
  const user = useUser();
  const canActivate = user.userData.email && user.userData.room ? true : false;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<EntryRoomPage />} />
        <Route
          element={<ProtectedRoute canActivate={canActivate} redirectPath="" />}
        >
          <Route path="room" element={<ChatRoomPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
