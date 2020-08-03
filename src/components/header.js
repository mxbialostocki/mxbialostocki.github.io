import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `none`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, textDecoration: 'none' }}>
      <ul>
        <li>
            <Link
            to="/"
            style={{
              color: `#ffffff`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}  
          </Link>
          </li>
          <span>
            &nbsp;&nbsp;&nbsp;
          </span> 
          <li><Link to="/photography"
            style={{
              color: `#ffffff`,
              textDecoration: `none`,
            }}
            >
              photography  
            </Link>
            </li><span>
            &nbsp;&nbsp;&nbsp;
          </span>
            <li><Link to="/code"
            style={{
              color: `#ffffff`,
              textDecoration: `none`,
            }}
            >
              code  
            </Link>
          </li>
        </ul>
        
        
          
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
