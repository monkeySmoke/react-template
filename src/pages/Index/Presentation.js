import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import AsyncComponent from '@/components/AsyncComponent';
import Layout from './layouts/Layout/Layout';
import PrivateRoute from './components/PrivateRoute';

const Blacklist = AsyncComponent(() => import(/* webpackChunkName: "Blacklist" */ './router/Blacklist'));
const Exchequer = AsyncComponent(() => import(/* webpackChunkName: "Exchequer" */ './router/Exchequer'));
const Expend = AsyncComponent(() => import(/* webpackChunkName: "Expend" */ './router/Expend'));

const Index = () => (
  <Layout>
    <Switch>
      <PrivateRoute path="/blacklist" component={Blacklist} />
      <PrivateRoute path="/exchequer" component={Exchequer} />
      <PrivateRoute path="/expend" component={Expend} />
      <Redirect to="/exchequer" />
    </Switch>
  </Layout>
);

export default Index;
