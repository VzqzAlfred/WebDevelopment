const Header = ({theme, handleTheme}) => {
     return (
          <header className={theme}>
               <h2>My header</h2>
               <select name="language">
                    <option value="es">ES</option>
                    <option value="en">EN</option>
               </select>
               <input type="radio" name="theme" id="light" onClick={handleTheme} value="light" />
               <label htmlFor="light">Light</label>
               
               <input type="radio" name="theme" onClick={handleTheme} id="dark" value="dark" />
               <label htmlFor="dark">Dark</label>
               <button>Log in</button>
          </header>
     )
}

export default Header
