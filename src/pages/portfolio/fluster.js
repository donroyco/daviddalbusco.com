import React from "react"
import SEO from "../../components/seo/seo"
import Layout from "../../components/layout/layout"
import { graphql, StaticQuery } from "gatsby"

import Chapter from "../../components/chapter/chapter"
import Slider from "../../components/slider/slider"
import Projects from "../../components/projects/projects"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class FlusterPage extends React.Component {

  render() {
    const images = [
      this.props.data.flusterScreenshot1.childImageSharp.fluid,
      this.props.data.flusterScreenshot2.childImageSharp.fluid,
      this.props.data.flusterScreenshot3.childImageSharp.fluid,
      this.props.data.flusterScreenshot4.childImageSharp.fluid,
    ]

    return <Layout fixNav={true}>
      <SEO title="Fluster"/>

      <section className="project extrabigspace">
        <main>
          <Chapter img={this.props.data.flusterImage.childImageSharp.fluid}>
            <h1>Fluster</h1>
          </Chapter>

          <article className="info">
            <div>
              <p>I used to develop "Fluster" as a personal project.</p>
              <p>When I moved to Zürich I was struggling to find flat and roommates, that's why I tried to develop my
                own platform to help others and myself to solve such problems.</p>
              <p>The startup itself failed but, it allowed me to become a freelancer and to start my own company,
                therefore I consider the all experience as a win.</p>
            </div>

            <Slider images={images}/>
          </article>
        </main>
      </section>

      <section className="factsheet">
        <main>
          <Chapter icon="info-circle">
            <h2>Fact sheet</h2>
          </Chapter>

          <article>
            <div>
              <p><strong>Discontinued:</strong> Used to be available as Progressive Web Apps and in the Apple Store and Google Play</p>
              <p><strong>Infrastructure:</strong> <a href="https://aws.amazon.com/ec2/">Amazon EC2</a> and <a
                href="https://aws.amazon.com/fr/sns/">Amazon SNS</a></p>
              <p><strong>Database:</strong> <a href="https://www.mongodb.com">MongoDB</a></p>
            </div>

            <div>
              <p><strong>Technology (application):</strong> <a href="http://ionicframework.com">Ionic</a>, <a
                href="http://angular.io">Angular</a> and <a href="http://cordova.apache.org">Cordova</a></p>
              <p><strong>Technology (website):</strong>: <a href="http://angular.io">Angular</a>, <a
                href="https://material.angular.io/">Angular Material</a> and <a href="https://angular.io/guide/universal">Angular
                Service-side Rendering (SSR)</a></p>
              <p><strong>Technology (backend, API):</strong> <a href="https://nodejs.org/">NodeJS</a> and <a
                href="https://expressjs.com">ExpressJS</a></p>
            </div>
          </article>
        </main>
      </section>

      <section className="open-source">
        <main>
          <Chapter icon="book-spells">
            <h2>Open source</h2>
          </Chapter>

          <article>
            <p>This project is open source and available on <a href="https://github.com/fluster">Github<FontAwesomeIcon
              icon={["fab", "github"]}/></a></p>
          </article>
        </main>
      </section>

      <Projects filter={"fluster"}/>
    </Layout>
  }

}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        flusterImage: file(relativePath: { eq: "portfolio/fluster-icon-pink.png" }) {
          childImageSharp {
            fluid(maxWidth: 240) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        flusterScreenshot1: file(relativePath: { eq: "portfolio/fluster/screenshot1.png" }) {
          childImageSharp {
            fluid(maxWidth: 540) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        flusterScreenshot2: file(relativePath: { eq: "portfolio/fluster/screenshot2.png" }) {
          childImageSharp {
            fluid(maxWidth: 540) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        flusterScreenshot3: file(relativePath: { eq: "portfolio/fluster/screenshot3.png" }) {
          childImageSharp {
            fluid(maxWidth: 540) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        flusterScreenshot4: file(relativePath: { eq: "portfolio/fluster/screenshot4.png" }) {
          childImageSharp {
            fluid(maxWidth: 540) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <FlusterPage data={data}/>
    )}
  />
)
