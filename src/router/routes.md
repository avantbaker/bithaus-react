<Router>
  <Route path="/signin" component={Login}/>
  <PrivateRoute path="/" component={Dashboard}/>
</Router>