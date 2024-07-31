// src/ShopList.tsx
import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, MenuItem, Select, FormControl, InputLabel, Button, Container, Pagination } from '@mui/material';
import axios from 'axios';
import { Product } from 'src/types/Product';
import ProductCard from 'src/components/ProductCard';
import Banner from 'src/components/Banner';



const ShopList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    const getAllProduct = async () => {
        try {
          setLoading(true);
          const response = await axios.get("/products",
            {
              params: {
                page: page,
                limit: 12,
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

    return (
        <>
        <Banner/>
      <Container>
      <Box sx={{ p: 4 }}>
           
           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                   <Typography variant="body2">Showing 1–8 of 32 results</Typography>
                   <FormControl variant="outlined" size="small" sx={{ minWidth: 80 }}>
                       <InputLabel>Show</InputLabel>
                       <Select label="Show" defaultValue={16}>
                           <MenuItem value={16}>16</MenuItem>
                           <MenuItem value={32}>32</MenuItem>
                           <MenuItem value={48}>48</MenuItem>
                       </Select>
                   </FormControl>
                   <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
                       <InputLabel>Sort by</InputLabel>
                       <Select label="Sort by" defaultValue="default">
                           <MenuItem value="default">Default</MenuItem>
                           <MenuItem value="price">Price</MenuItem>
                           <MenuItem value="popularity">Popularity</MenuItem>
                           <MenuItem value="rating">Rating</MenuItem>
                       </Select>
                   </FormControl>
               </Box>
               <Button variant="contained">Filter</Button>
           </Box>
           <Grid container spacing={2}>
               {products.map((product, index) => (
                   <ProductCard key={index} product={product} />
               ))}
           </Grid>
       </Box>
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
      </Container>
        </>
    );
};

export default ShopList;
