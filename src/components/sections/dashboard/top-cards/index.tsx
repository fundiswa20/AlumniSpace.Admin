import Grid from '@mui/material/Grid';
import TopCard from './TopCard';
//import IconifyIcon from 'components/base/IconifyIcon';
const cardsData = [
  {
    id: 1,
    title: 'Registered Alumni',
    value: '257',
    icon: "material-symbols:person-add"
  },
  {
    id: 2,
    title: 'Donors',
    value: '232',

    icon: 'carbon:favorite-filled',
  },
  {
    id: 3,
    title: 'Attendees',
    value: '156',
    icon: 'mingcute:user-2-fill',
  },
  {
    id: 4,
    title: 'Volunteers',
    value: '58',
    icon:"material-symbols-light:volunteer-activism-outline"
   
  },
];

const TopCards = () => {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3, lg: 3.75 }}>
      {cardsData.map((item) => {
        return (
          <TopCard
            key={item.id}
            title={item.title}
            value={item.value}
            icon={item.icon} isUp={false}          />
        );
      })}
    </Grid>
  );
};

export default TopCards;
