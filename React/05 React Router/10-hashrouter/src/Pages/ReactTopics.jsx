import {Link, Route, Switch, useParams, useRouteMatch} from 'react-router-dom';

const Topic = () => {
     let {topic} = useParams();

     return(
          <div>
               <h4>{topic}</h4>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam odio dolorem accusantium, possimus quaerat asperiores ducimus impedit eaque non amet alias modi aspernatur rem veniam sint dolorum a ex adipisci.</p>
          </div>
     );
}


const ReactTopics = () => {
     // let match = useRouteMatch();
     // console.log(match);

     /* 'path': Nos permite construir rutas relativas <Route>

     'url': Nos permite construir enlaces relativos <link> o <NavLink>
     */

     let {path, url} = useRouteMatch();
     return (
          <div>
               <h3>Temas de React</h3>
               <ul>
                    <li>
                         <Link to={`${url}/jsx`}>JSX</Link>
                    </li>
                    <li>
                         <Link to={`${url}/props`}>Props</Link>
                    </li>
                    <li>
                         <Link to={`${url}/state`}>State</Link>
                    </li>
                    <li>
                         <Link to={`${url}/components`}>Components</Link>
                    </li>
               </ul>
               <Switch>
                    <Route exact path={path}>
                         <h4>Elige un tema de React</h4>
                         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quam id eius dolorem enim esse, amet aperiam fuga beatae fugiat odio. Atque minima nam officia consequatur laudantium perspiciatis in sed!</p>
                    </Route>

                    <Route path={`${path}/:topic`} component={Topic}>

                    </Route>
               </Switch>
          </div>
     )
}

export default ReactTopics;