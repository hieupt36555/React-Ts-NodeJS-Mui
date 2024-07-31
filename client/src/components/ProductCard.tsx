import { FC } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "src/types/Product";
import { Link } from "react-router-dom";
import { CompareArrows, FavoriteBorder, Share } from "@mui/icons-material";

type ProductCardProps = {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    // <Card sx={{ maxWidth: 345 }}>
    //   <CardMedia
    //     component="img"
    //     alt="green iguana"
    //     height="140"
    //     image={product.image}
    //     sx={{ objectFit: "contain" }}
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       {product.title}
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       {product.description}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Share</Button>
    //     <Link to={`/product/${product._id}`}>
    //       <Button size="small" variant="contained">
    //         Detail
    //       </Button>
    //     </Link>
    //   </CardActions>
    // </Card>
   <Link to={`/product/${product._id}`} >
   
   <Card sx={{border: '1px solid #ccc', borderRadius: '5px' , width: '250px' , height: '350px',margin: '10px'}} >
      <Box sx={{position: 'relative', height: '60%' }}>
        <CardMedia component="img"  image={product.image} alt={product.title}  sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body2" color="textSecondary">{product.description}</Typography>
        <Typography variant="h6" color="red">${product.price}</Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 1 }}>
            <Share fontSize="small" style={{ color: 'black' }} />
            <CompareArrows fontSize="small" style={{ color: 'black' }} />
            <FavoriteBorder fontSize="small" style={{ color: 'black' }} />
          </Box>
      </CardContent>
    </Card>
    </Link>
  );
};

export default ProductCard;
