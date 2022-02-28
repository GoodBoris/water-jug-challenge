import { Button, Divider, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundScreen = (): JSX.Element => {
  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Typography variant='h2'>404 Not found</Typography>
      <Divider />
      <Link to='/'>
        <Button>Back to Home</Button>
      </Link>
    </Grid>
  );
};

export default NotFoundScreen;
