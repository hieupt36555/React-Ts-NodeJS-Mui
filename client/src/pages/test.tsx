import React from 'react';
import { Container, Grid, Typography, TextField, Button, Paper } from '@mui/material';

const CheckoutPage = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        {/* Phần thông tin cá nhân */}
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: 16 }}>
            <Typography variant="h6" gutterBottom>
              Thông tin cá nhân
            </Typography>
            <TextField
              fullWidth
              label="Họ và tên"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Số điện thoại"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Địa chỉ"
              margin="normal"
              variant="outlined"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <Typography variant="h6" gutterBottom>
                Sản phẩm
            </Typography>
            <Typography variant="h6" gutterBottom>
              Số Lượng: 
            </Typography>
            <Typography variant="h4" gutterBottom>
              Tổng: 
            </Typography>
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
