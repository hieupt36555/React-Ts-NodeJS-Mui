import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import axios from "axios";
import { ValidationErrors } from "final-form";
import { Field, Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { InputText } from "src/components/elements/InputText";
import { MIN_PASSWORD } from "src/consts";
import Swal from "sweetalert2";
import isEmail from "validator/lib/isEmail";

type RegisterFormParams = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const nav = useNavigate();
  const validate = (values: RegisterFormParams) => {
    const { username, email, password } = values;
    const errors: ValidationErrors = {};
    if (!username) errors.username = "Can nhap username vao";
    if (!email) errors.email = "Can nhap email vao";
    if (email && !isEmail(email)) errors.email = "Chua dung dinh dang email";
    if (!password) errors.password = "Can nhap password vao";
    if (password && password.length < MIN_PASSWORD)
      errors.password = `Can nhap password toi thieu ${MIN_PASSWORD} ky tu`;
    return errors;
  };

  const onSubmit = async (data: RegisterFormParams) => {
    try {
      await axios.post("/auth/register", data);
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
        title: "Dang Ky Thanh Cong!"
      });
      nav("/login");
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
        title: "Dang Ky Thai Bai!"
      });
    }
  };

  return (
    <Container maxWidth="sm" >

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        // alignItems="center"
        minHeight="50vh"
      >

        <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
          Đăng Ký
        </Typography>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ values }) => {
            return (
              <Stack gap={2}>
                <Field
                  name="username"
                  render={({ input, meta }) => (
                    <InputText
                      input={input}
                      label={"Username"}
                      messageError={meta.touched && meta.error}
                    />
                  )}
                />
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
                  Bạn đã có tài khoản?{' '}
                  <Link href="/login" variant="body2">
                    Đăng nhập ngay
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

export default Register;
