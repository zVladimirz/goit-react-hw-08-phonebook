import { Routes, Route, Navigate } from 'react-router-dom';
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';
import AppBar from 'components/AppBar';
import Login from 'pages/Login';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import Loader from 'components/Loader';

const Contacts = lazy(() => import('pages/Contacts'));
const Register = lazy(() => import('pages/Register'));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <Navigate to="/login" />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <Suspense fallback={null}>
                  <Register />
                </Suspense>
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <Suspense fallback={null}>
                  <Contacts />
                </Suspense>
              </PrivateRoute>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
