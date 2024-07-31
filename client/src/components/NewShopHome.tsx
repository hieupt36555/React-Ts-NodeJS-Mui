import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const NewShopHome = () => {
  return (
    <Container>
      {/* New Section */}
      <Typography variant="h4" gutterBottom>
        New
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia
              component="img"
              alt="Syttherine"
              height="230"
              image="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_509_4_.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Rog Zephyrus
              </Typography>
              <Typography variant="body2" color="text.secondary">
              </Typography>
              <Typography variant="h6" color="text.primary">
                $2,500.00
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia
              component="img"
              alt="Levisa"
              height="230"
              image="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_509_61_.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Rog Zephyrus V2
              </Typography>
              <Typography variant="body2" color="text.secondary">
              </Typography>
              <Typography variant="h6" color="text.primary">
                $2,500.00
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia
              component="img"
              alt="Lolito"
              height="230"
              image="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_509_56_.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Rog Zephyrus Flip
              </Typography>
              <Typography variant="body2" color="text.secondary">
              </Typography>
              <Typography variant="h6" color="text.primary">
                $2,500.00
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia
              component="img"
              alt="Respira"
              height="230"
              image="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_509_8_.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Rog Zephyrus RGB
              </Typography>
              <Typography variant="body2" color="text.secondary">
              </Typography>
              <Typography variant="h6" color="text.primary">
                $5,000.00
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Shop Section */}
      <Typography variant="h4" gutterBottom>
        Shop
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt="Product 1"
              height="300"
              image="https://cdn.tgdd.vn//News/1434839//top-10-laptop-dep-nhat-hien-nay-duoc-ua-chuong-ma-ban-nen-1-800x450-1.jpg"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt="Product 2"
              height="300"
              image="https://hacom.vn/media/lib/12-06-2023/laptop-asus-vivobook-pro-16x-oled-m7600re.jpg"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt="Product 3"
              height="300"
              image="https://www.anphatpc.com.vn/media/news/0312_vnphng3.jpg"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt="Product 4"
              height="300"
              image="https://cdn.nguyenkimmall.com/images/companies/_1/dell-vostro-5568-thiet-ke-dep.jpg"
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewShopHome;
