import {
  Alert,
  Box,
  Button,
  Container,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Snackbar,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConfirmDialog from "src/components/ConfirmDialog";
import { useLoading } from "src/contexts/loading";
import { Product } from "src/types/Product";
import Swal from "sweetalert2";

function AdminProductList() {
  const [query, setQuery] = useState<string>('');
  const { setLoading } = useLoading();
  const [showFlash, setShowFlash] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [idDelete, setIdDelete] = useState<string | null>(null);
  const [sort, setSort] = useState<string>('asc');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);


  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    if (event.target.value.length > 1) {
      const response = await axios.get(`/products?q=${event.target.value}`);
      setProducts(response.data.products);
    } else {
      setProducts([]);
    }
  };


  const getAllProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/products",
        {
          params: {
            page: page,
            limit: 5,
          }
        }

      );
      setProducts(response.data.products);
      setTotalPages(response.data.pages);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, [page]);

  const handleConfirm = (id: string) => {
    setConfirm(true);
    setIdDelete(id);
  };

  const handleDelete = async () => {
    try {
      await axios.delete("/products/" + idDelete);
      setShowFlash(true);

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
        title: "Xoa Thanh Cong!"
      });
      getAllProduct();
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
        title: "Xoa That Bai!" + error
      });
    }
  };

  return (
    <>
      <TextField
        fullWidth
        label="Search Products"
        value={query}
        onChange={handleSearch}
        variant="outlined"
        margin="normal"
      />


      <Select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        displayEmpty
        inputProps={{ 'aria-label': 'Sort products' }}
      >
        <MenuItem value="asc">Price: Low to High</MenuItem>
        <MenuItem value="desc">Price: High to Low</MenuItem>
      </Select>


      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Image</TableCell>
              <TableCell >Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Desc</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Options</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center"> <img src={product.image} alt="" className='img-url' style={{ width: "100px" }} /></TableCell>
                <TableCell component="th" scope="row">
                  {product.title}
                </TableCell>
                <TableCell align="center">{product.price}</TableCell>
                <TableCell align="center">{product.description}</TableCell>
                <TableCell align="center">{product.category.name}</TableCell>
                <TableCell align="center">
                  <Stack
                    direction={"row"}
                    gap={3}
                    justifyContent={"center"}
                  >
                    <Link to={`/admin/product/edit/${product._id}`}>
                      <Button variant="contained" sx={{ bgcolor: "blue" }}>
                        Edit
                      </Button>
                    </Link>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "red" }}
                      onClick={() => handleConfirm(product._id)}
                    >
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ConfirmDialog
          confirm={confirm}
          onConfirm={setConfirm}
          onDelete={handleDelete}
        />
       <Box
        display="flex"
        justifyContent="center"
        marginTop={2}
      >
        <Pagination
          sx={{padding: '20px'}}
          count={totalPages}
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
          shape="rounded"
        />
      </Box>
      </TableContainer>
    </>
  );
}

export default AdminProductList;
