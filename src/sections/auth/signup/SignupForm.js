import { useState } from 'react';
import { useRouter } from 'next/router';

// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function SignupForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = (e) => {

    e.preventDefault(); // Prevent default form submission
    router.replace('/login');
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField name="full_name" label="Full Name" />

        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          name="password2"
          label="Confirm Password"
          type={showPassword ? 'text' : 'password2'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
      <FormControlLabel
          value="end"
          control={<Checkbox  name="remember"/>}
          label="Remember Me"
          labelPlacement="end"
        />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Signup
      </LoadingButton>
    </>
  );
}
