import { useSelector } from 'react-redux';
import { IStore } from '../../redux/store/storeStateModel';
import { Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../private-route/PrivateRoute';

const PagesNavigation = (): JSX.Element => {
  const { currentUser } = useSelector((state: IStore) => state.auth);
  return (
    <Switch>
      //ToDo: components
      <Route exact path='/' />
      <Route path='/login' />
      <Route path='/register' />
      <PrivateRoute
        isLoggedIn={!!currentUser}
        path='/water-jug-solution'
        //ToDo: component={}
      />
      <Route>
        <Redirect to='/water-jug-solution' />
      </Route>
    </Switch>
  );
};

export default PagesNavigation;
