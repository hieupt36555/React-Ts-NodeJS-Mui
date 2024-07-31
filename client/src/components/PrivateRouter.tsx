import React from 'react';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const token = localStorage.getItem('token');

  return (
    token ? <>{children}</> : <Navigate to="/login" state={{ message: 'Bạn Chưa đăng nhập!' }} />
    
  );
};

export default PrivateRoute;
