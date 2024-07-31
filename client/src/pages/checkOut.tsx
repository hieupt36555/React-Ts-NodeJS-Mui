import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Banner from "src/components/Banner";
import { useNavigate } from "react-router-dom";
import { useLoading } from "src/contexts/loading";
import axios from "axios";
import { Field, Form } from "react-final-form";
import { InputText } from "src/components/elements/InputText";
import { useCart } from "src/contexts/cart";
import { useMemo } from "react";
import { useUser } from "src/contexts/user";
import { useProductCart } from "src/hooks/useProductCart";
import { red } from "@mui/material/colors";
import Swal from "sweetalert2";

type CheckoutFormParams = {
  name: string;
  phone: string;
  address: string;
  payment: string;
};

function Checkout() {
  const nav = useNavigate();
  const { setLoading } = useLoading();
  const { cart } = useCart();
  const { user } = useUser();
  const { getCartUser } = useProductCart();

  const totalPrice = useMemo(
    () =>
      cart
        ? cart.products.reduce(
          (total, { product, quantity }) => total + product.price * quantity,
          0
        )
        : 0,
    [cart]
  );

  const onSubmit = async (values: CheckoutFormParams) => {
    if (!user || !cart || !cart?.products.length) return;
    try {
      setLoading(true);
      await axios.post("/orders", {
        ...values,
        products: cart.products,
        user: user._id,
        totalPrice,
      });
      await getCartUser();
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
        title: "CheckOut Thanh Cong!"
      });
      nav("/");
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
        title: "CheckOut That Bai!"
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Banner />


      <Container sx={{ marginTop: '20px' }} >
        <Grid container spacing={2}>
          {/* Phần thông tin cá nhân */}
          <Grid item xs={12} sm={6}>
            <Form
              onSubmit={onSubmit}
              initialValues={{
                payment: "COD",
              }}
              render={({ values }) => {
                return (
                  <Stack gap={3}>
                    <Field
                      name="name"
                      render={({ input, meta }) => (
                        <InputText
                          input={input}
                          label={"Name"}
                          messageError={meta.touched && meta.error}
                        />
                      )}
                    />
                    <Field
                      name="phone"
                      render={({ input, meta }) => (
                        <InputText
                          input={input}
                          label={"Phone"}
                          messageError={meta.touched && meta.error}
                        />
                      )}
                    />
                    <Field
                      name="address"
                      render={({ input, meta }) => (
                        <InputText
                          input={input}
                          label={"Address"}
                          messageError={meta.touched && meta.error}
                        />
                      )}
                    />
                    <Field<string>
                      name="payment"
                      render={({ input }) => {
                        return (
                          <FormControl>
                            <FormLabel> Payment</FormLabel>
                            <RadioGroup {...input}>
                              <FormControlLabel
                                value="COD"
                                control={<Radio />}
                                label="COD"
                              />
                              <FormControlLabel
                                value="BANK"
                                control={<Radio />}
                                label="BANK"
                              />
                            </RadioGroup>
                          </FormControl>
                        );
                      }}
                    />
                    <Button variant="contained" onClick={() => onSubmit(values)}>
                      Submit
                    </Button>
                  </Stack>
                );
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper style={{ padding: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Sản phẩm
              </Typography>
              <Typography variant="h6" gutterBottom>
                Số Lượng: 
              </Typography>
              <Typography variant="h4" gutterBottom >
                Tổng: ${totalPrice}
              </Typography>
              <Typography  gutterBottom>
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Checkout;

const Wrapper = styled(Stack)({
  paddingTop: 72,
});

const LabelWrapper = styled(Stack)(({ theme }) => ({
  background: "#F9F1E7",
  height: 55,
}));