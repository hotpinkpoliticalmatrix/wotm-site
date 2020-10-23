import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import HeaderLinks from "./Header/HeaderLinks"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

export const PureLayout = props => {
  return (
    <>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "primary",
        }}
        siteTitle={props.data.site.siteMetadata.title}
      />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return <PureLayout {...props} data={data} />
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// import React from "react"
// import { Link } from "gatsby"

// const Layout = ({ location, title, children }) => {
//   const rootPath = `${__PATH_PREFIX__}/`
//   const isRootPath = location.pathname === rootPath
//   let header

//   if (isRootPath) {
//     header = (
//       <h1 className="main-heading">
//         <Link to="/">{title}</Link>
//       </h1>
//     )
//   } else {
//     header = (
//       <Link className="header-link-home" to="/">
//         {title}
//       </Link>
//     )
//   }

//   return (
//     <div className="global-wrapper" data-is-root-path={isRootPath}>
//       <header className="global-header">{header}</header>
//       <main>{children}</main>
//       <footer>
//         © {new Date().getFullYear()}, Built with
//         {` `}
//         <a href="https://www.gatsbyjs.com">Gatsby</a>
//       </footer>
//     </div>
//   )
// }

// export default Layout
