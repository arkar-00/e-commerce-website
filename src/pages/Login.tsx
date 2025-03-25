import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginFormData = z.infer<typeof LoginSchema>;

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  const handleOnLogin = (data: LoginFormData) => {
    login({ email: data.email, username: 'Arkar Oo' });
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleOnLogin)}>
            <div className="flex flex-col justify-center gap-4">
              {/* username field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* password field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* button */}
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
