import { Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductForm from "src/components/ProductForm";
import { useLoading } from "src/contexts/loading";
import { ProductFormParams } from "src/types/Product";
import Swal from "sweetalert2";

function AdminProductAdd() {
  const nav = useNavigate();
  const { setLoading } = useLoading();

  const onSubmit = async (values: ProductFormParams) => {
    try {
      setLoading(true);
      await axios.post("/products", values);
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
        title: "Them San Pham Thanh Cong!"
      });
      // nav("/admin");
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
        title: "Them San Pham That Bai!"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container>
        <Stack gap={2}>
          <Typography variant="h3" textAlign={"center"}>
            Add Product
          </Typography>
          <ProductForm onSubmit={onSubmit} initialValues={{ isShow: true }} />
        </Stack>
      </Container>
    </>
  );
}

export default AdminProductAdd;
