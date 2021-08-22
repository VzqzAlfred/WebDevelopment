import { Link, NavLink } from "react-router-dom";

export const MenuConcepts = () => {
     return (
          <nav>
               <ol>
                    <li>
                         <span>Enlaces HTML (No recomendado): </span>
                         <a href="/">Home</a>
                         <a href="/acerca">Acerca</a>
                         <a href="/contacto">Contacto</a>
                    </li>

                    <li>
                         <span>Componente Link: </span>
                         <Link to="/">Home</Link>
                         <Link to="/acerca">Acerca</Link>
                         <Link to ="/contacto">Contacto</Link>
                         <Link to="/no-existe">Error 404</Link>
                    </li>

                    <li>
                         <span>Componente NavLink: </span>
                         <NavLink exact to="/" activeClassName="active">
                              Home
                         </NavLink>
                          <NavLink exact to="/acerca" activeClassName="active">
                              Acerca
                         </NavLink>
                          <NavLink exact to="/contacto" activeClassName="active">
                              Contacto
                         </NavLink>
                         <NavLink exact to="/no-existe" activeClassName="active">
                              Error 404
                         </NavLink>
                    </li>

                    <li>Parámetros: 
                         <NavLink to="/user/Alfred" activeClassName="active">Alfred</NavLink>
                         <NavLink to="/user/Gretchen" activeClassName="active">Gretchen</NavLink>
                    </li>

                    <li>
                         <span>Parámetros de consulta: </span>
                         <Link to="/productos">Productos</Link>
                    </li>

                    <li>
                         <span>Redirecciones: </span>
                         <NavLink to="/about" activeClassName="active">About</NavLink>
                         <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                    </li>
               </ol>
          </nav>
     )
}
