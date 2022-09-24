import { todoAtom } from '@/atoms';
import Listener from '@/components/Listener';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import * as yup from 'yup';

interface ILogin {
  username: string;
  password: string;
}

const Login = () => {
  const validationSchema = React.useMemo(() => {
    return yup.object({
      username: yup.string().required('username is required'),
      password: yup.string().required('password is required'),
    });
  }, []);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ILogin>({
    resolver: yupResolver(validationSchema),
  });

  console.log('errors ', errors);

  const customHandleSubmit = (data: ILogin) => {
    console.log('form submitted ', data);
  };

  const [todo, setTodo] = useRecoilState(todoAtom);

  return (
    <>
      <form onSubmit={handleSubmit(customHandleSubmit)}>
        <TextField
          error={!!errors.username}
          // id='outlined-error'
          label="username"
          // defaultValue='Hello World'
          {...register('username')}
          helperText={errors.username?.message}
        />
        <TextField
          error={!!errors.password}
          // id='outlined-error-helper-text'
          label="password"
          // defaultValue='Hello World'
          helperText={errors.password?.message}
          {...register('password')}
          type="password"
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>

      <div>
        <TextField
          onChange={(e) => setTodo(e.target.value)}
          label="Todo"
          variant="standard"
        />
        <Listener />
      </div>
    </>
  );
};

export default Login;
