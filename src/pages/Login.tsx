import { Button } from '../components/ui/button';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const hanleOnLogin = () => {
    login();
    navigate('/');
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <Button onClick={hanleOnLogin}>Login</Button>
    </div>
  );
};

export default Login;
