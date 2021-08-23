import { Redirect, Route } from "react-router-dom"

// const PrivateRoute = (props) => {
//      return (
//           <div>
//                <Route exact={props.exact} path={props.path} component={props.component} />
//           </div>
//      )
// }

// const PrivateRoute = (props) => {
//      return <Route {...props} />;
// }



// Simulación de autenticación

let auth;
auth = null;
auth = true;

const PrivateRoute = ({component: Component, ...rest}) => {
     return <Route {...rest}>
          {auth ?  <Component/> : <Redirect to="/login" />}
     </Route>
}

export default PrivateRoute
