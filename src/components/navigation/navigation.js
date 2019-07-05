import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./navigation.scss"

class Navigation extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      scrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = (_$event) => {
    const scrolledSize = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    this.setState({ scrolled: scrolledSize > 60 })
  }

  render() {
    return <navigation
      style={{
        marginBottom: `1.45rem`,
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1030,
      }}
      className={this.state.scrolled ? "main-navbar-fix" : undefined}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h3 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `inherit`,
              textDecoration: `none`,
            }}
          >
            {this.props.siteTitle}
          </Link>
        </h3>
      </div>
    </navigation>
  }
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
