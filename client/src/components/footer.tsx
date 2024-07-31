// Footer.js
import React from 'react';
import { Box, Typography, Link, TextField, Button } from '@mui/material';
import { EmojiEvents, Verified, LocalShipping, HeadsetMic } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#f9f9f9', p: 4, mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Box sx={{ textAlign: 'center' }}>
            <EmojiEvents fontSize="large" />
            <Typography variant="body1">
              High Quality <br /> crafted from top materials
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Verified fontSize="large" />
            <Typography variant="body1">
              Warranty Protection <br /> Over 2 years
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <LocalShipping fontSize="large" />
            <Typography variant="body1">
              Free Shipping <br /> Order over 150 $
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <HeadsetMic fontSize="large" />
            <Typography variant="body1">
              24 / 7 Support <br /> Dedicated support
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Funiro.</Typography>
          <Typography variant="body2">400 University Drive Suite 200 Coral Gables, FL 33134 USA</Typography>
        </Box>
        <Box>
          <Typography variant="body1">Links</Typography>
          <Link href="#" sx={{ display: 'block', mt: 1 }}>Home</Link>
          <Link href="#" sx={{ display: 'block', mt: 1 }}>Shop</Link>
          <Link href="#" sx={{ display: 'block', mt: 1 }}>About</Link>
          <Link href="#" sx={{ display: 'block', mt: 1 }}>Contact</Link>
        </Box>
        <Box>
          <Typography variant="body1">Help</Typography>
          <Link href="#" sx={{ display: 'block', mt: 1 }}>Payment Options</Link>
          <Link href="#" sx={{ display: 'block', mt: 1 }}>Returns</Link>
          <Link href="#" sx={{ display: 'block', mt: 1 }}>Privacy Policies</Link>
        </Box>
        <Box>
          <Typography variant="body1">Newsletter</Typography>
          <Box component="form" sx={{ display: 'flex', mt: 1 }}>
            <TextField label="Enter Your Email Address" variant="outlined" size="small" sx={{ mr: 1 }} />
            <Button variant="contained" color="primary">SUBSCRIBE</Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 3, borderTop: '1px solid #ddd', pt: 2, textAlign: 'center' }}>
        <Typography variant="body2">&copy; 2023 funiro. All rights reserved</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
