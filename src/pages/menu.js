import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUtensils, faCheckSquare } from "@fortawesome/free-solid-svg-icons"

import SEO from "../components/seo"

export default ({ data, location }) => (
  <Layout>
    <SEO
      pagetitle="メニュー"
      pagedesc="一克お品書き"
      pagepath={location.pathname}
      pageimg={data.about.childImageSharp.original.src}
      pageimgw={data.about.childImageSharp.original.width}
      pageimgh={data.about.childImageSharp.original.height}
    />
    <div className="eyecatch">
      <figure>
        <Img
          fluid={data.about.childImageSharp.fluid}
          alt="一克メニュー"
        />
      </figure>
    </div>
    <article className="content">
      <div className="container">
        <h1 className="bar">一克のメニュー</h1>
        <aside className="info">
          <div className="subtitle">
            <FontAwesomeIcon icon={faUtensils} />
            一克のこだわり
          </div>
        </aside>
        <div className="postbody">
          <ul>
            <li>国産鶏を使用</li>
            <li>国産炭を使用</li>
            <li>日替わりの創作やきとりもあります!!</li>
          </ul>
          <h2>
            <FontAwesomeIcon icon={faCheckSquare} />
            お客様の目と胃袋を刺激する串焼きは必見必須！<br/>
          </h2>
          <Img
            fluid={data.food_menu.childImageSharp.fluid}
            alt="一克メニュー|食べ物1"
          />
          <Img
            fluid={data.food_menu2.childImageSharp.fluid}
            alt="一克メニュー|食べ物2"
          />
          <h2>
            <FontAwesomeIcon icon={faCheckSquare} />
            飲み物
          </h2>
          <Img
            fluid={data.drink_menu.childImageSharp.fluid}
            alt="一克メニュー|飲み物1"
          />
          <Img
            fluid={data.drink_menu2.childImageSharp.fluid}
            alt="一克メニュー|飲み物2"
          />
          <h2>
            <FontAwesomeIcon icon={faCheckSquare} />
            お持ち帰り
          </h2>
          <Img
            fluid={data.takeout.childImageSharp.fluid}
            alt="一克メニュー|持ち帰り"
          />
          <Img
            fluid={data.takeout_sample.childImageSharp.fluid}
            alt="持ち帰りサンプル"
          />
          <p>お持ち帰りもできます。</p>
          <p>※オードブルは5000円 ～ 承ります。</p>
          <p>気長にお付き合いいただければ幸いです。</p>
        </div>
      </div>
    </article>
  </Layout>
)

export const query = graphql`
  query {
    about: file(relativePath: { eq: "food_sample24.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
        original {
          src
          height
          width
        }
      }
    }
    food_menu: file(relativePath: { eq: "food_menu.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    food_menu2: file(relativePath: { eq: "food_menu2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    drink_menu: file(relativePath: { eq: "drink_menu.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    drink_menu2: file(relativePath: { eq: "drink_menu2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    takeout: file(relativePath: { eq: "takeout_menu.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    takeout_sample: file(relativePath: { eq: "takeout_sample.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
  }
`
