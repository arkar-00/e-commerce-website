import { createContext, useContext, useState, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export type LoginFormData = {
  email: string;
  username: string;
};

interface AuthContextType {
  isAuthenticated: boolean;
  login: ({ email, username }: LoginFormData) => void;
  logout: () => void;
  profile: LoginFormData | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = (data: LoginFormData) => {
    localStorage.setItem('profile', JSON.stringify(data));
    setIsAuthenticated(true);
  };
  const logout = () => {
    localStorage.removeItem('profile');
    setIsAuthenticated(false);
  };

  const profile = localStorage.getItem('profile')
    ? (JSON.parse(localStorage.getItem('profile') as string) as LoginFormData)
    : null;

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, profile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;

// Private Route Component
export const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { profile } = useAuth();
  return profile ? children : <Navigate to="/login" />;
};
