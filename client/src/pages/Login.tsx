import { Alert, Box, Button, Container, Link, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { ValidationErrors } from "final-form";
import { Field, Form } from "react-final-form";
import { useLocation, useNavigate } from "react-router-dom";
import { InputText } from "src/components/elements/InputText";
import { MIN_PASSWORD } from "src/consts";
import Swal from "sweetalert2";
import isEmail from "validator/lib/isEmail";

type LoginFormParams = {
  email: string;
  password: string;
};


const Login = () => {
  const validate = (values: LoginFormParams) => {
    const { email, password } = values;
    const errors: ValidationErrors = {};
    if (!email) errors.email = "Chua nhap email!";
    if (email && !isEmail(email)) errors.email = "Chua dung dinh dang email";
    if (!password) errors.password = "Chua nhap password";
    if (password && password.length < MIN_PASSWORD)
      errors.password = `Can nhap password toi thieu ${MIN_PASSWORD} ky tu`;
    return errors;
  };
  const nav = useNavigate()
  const location = useLocation();
  const message = location.state?.message;


  const onSubmit = async (values: LoginFormParams) => {
    try {
      const { data } = await axios.post("/auth/login", values);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user)); // luu object

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Dang Nhap Thanh Cong!"
      });
      nav('/');
    } catch (error) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: "Dang Nhap Thai Bai!: " + error
      });
    }

  };

  return (

    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        // alignItems="center"
        minHeight="50vh"
      >
        <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
          Đăng Nhập
        </Typography>
        {message && (
          <Alert severity="warning" sx={{ marginBottom: 2 }}>
            {message}
          </Alert>
        )}
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ values }) => {
            return (
              <Stack gap={2}>
                <Field
                  name="email"
                  render={({ input, meta }) => (
                    <InputText
                      input={input}
                      label={"Email"}
                      messageError={meta.touched && meta.error}
                    />
                  )}
                />
                <Field
                  name="password"
                  render={({ input, meta }) => (
                    <InputText
                      input={input}
                      label={"Password"}
                      messageError={meta.touched && meta.error}
                      type="password"
                    />
                  )}
                />
                <Typography variant="body2" sx={{ marginTop: 2 }}>
                  Bạn chưa có tài khoản?{' '}
                  <Link href="/register" variant="body2">
                    Đăng ký ngay
                  </Link>
                </Typography>
                <Button variant="contained" onClick={() => onSubmit(values)}>
                  Submit
                </Button>
              </Stack>
            );
          }}
        />
      </Box>
    </Container>

  );
};

export default Login;
