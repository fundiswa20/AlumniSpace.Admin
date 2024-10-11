import { fontFamily } from 'theme/typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Product from './Product';

const productsData = [
  {
    id: 1,
    name: 'Humanities Gala Dinner',
    inStock: 52,
    price: '1,099.00',
  },
  {
    id: 2,
    name: 'ICT Academic Awards',  
    inStock: 320,
    price: '799.00',
  },
  {
    id: 3,
    name: 'Orientation',  
    inStock: 20,
    price: '799.00',
  },
];

const Products = () => {
  return (
    <Stack direction="column" gap={3.75} component={Paper} height={300}>
      <Typography variant="h6" fontWeight={400} fontFamily={fontFamily.workSans}>
        Events
      </Typography>

      {/* <Stack justifyContent="space-between">
        <Typography variant="caption" fontWeight={400}>
          Name of event
        </Typography>
        <Typography variant="caption" fontWeight={400}>
          Responses
        </Typography>
      </Stack> */}

      {productsData.map((item) => {
        return <Product key={item.id} data={item} />;
      })}
    </Stack>
  );
};

export default Products;
