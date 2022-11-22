import { Link, useMatch, useResolvedPath } from "react-router-dom"
import styles from './App.module.css';


export default function Navbar() {
  return (
    <nav className={styles.containerFluid}>
      <a className={styles.navbarBrand}>
                <img src="/logo.png" alt="" width={500} />
              </a>
              <div className={styles.header}>
              <ul>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/firstfloor">firstfloor</CustomLink>
                    <CustomLink to="/secondfloor">secondfloor</CustomLink>
                    <CustomLink to="/thirdfloor">thirdfloor</CustomLink>
                    <CustomLink to="/fourthfloor">fourthfloor</CustomLink>
      </ul>
              </div>
      
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}