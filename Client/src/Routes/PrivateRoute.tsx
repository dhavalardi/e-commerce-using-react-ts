import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';


const PrivateRoute = () => {
    
  const { isAuthenticated } = useAuth();

  // console.log("isAuth in private route ==>",isAuthenticated );
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/signup" replace />;
};

export default PrivateRoute;
