import { fontFamily } from 'theme/typography';
// import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface ProductInfoProps {
  data: {
    
    name: string;
    inStock: number | string;
    //price: number | string;
  };
}

const Product = ({ data }: ProductInfoProps) => {
  const { name, inStock,  } = data;

  return (
    <Stack alignItems="center" justifyContent="space-between">
      <Stack spacing={2} alignItems="center">
        {/* <Box height={46} width={46} bgcolor="info.dark" borderRadius={1.25}>
          
        </Box> */}

        <Stack direction="column">
          <Typography variant="body2" fontWeight={600}>
            {name}
          </Typography>
          <Typography variant="caption" color="text.secondary" fontWeight={500}>
            {inStock} responses
          </Typography>
        </Stack>
        
      </Stack>

      <Typography variant="caption" fontWeight={400} fontFamily={fontFamily.workSans}>
      <Button
          variant="contained"
          color="primary"
          size="medium"
          // endIcon={<IconifyIcon icon="mingcute:arrow-down-line" />}
          sx={{ py: 0.875, zIndex: 1000 }}
        >
          View Responses
        </Button>
      </Typography>
    </Stack>
  );
};

export default Product;
