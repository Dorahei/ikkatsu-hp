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
      pagetitle="一克 について"
      pagedesc="勝山の炭火 串焼き 串揚げのお店"
      pagepath={location.pathname}
      pageimg={data.about.childImageSharp.original.src}
      pageimgw={data.about.childImageSharp.original.width}
      pageimgh={data.about.childImageSharp.original.height}
    />
    <div className="eyecatch">
      <figure>
        <Img
          fluid={data.about.childImageSharp.fluid}
          alt="一克店舗"
        />
      </figure>
    </div>
    <article className="content">
      <div className="container">
        <h1 className="bar">一克について</h1>
        <aside className="info">
          <div className="subtitle">
            <FontAwesomeIcon icon={faUtensils} />
            ABOUT IKKATSU
          </div>
        </aside>
        <div className="postbody">
          <p>
            美しさと美味しさが一克(括)。お店に着くとまず食欲をそそる焼き鳥の香ばしい匂いがお出迎え店内はカウンター席と小上がりの座敷があります。
            落ち着いた雰囲気でお食事を楽しめます。カウンターの目の前で炭火で焼く串焼きは見て食べて２度美味しいです
            お一人様でも大人数でもＯＫ！！特に女子会でのご利用は大好評！いろいろなメニューの中でも野菜巻きはヘルシー感が受けて女性に人気
          </p>
          <h2>
            <FontAwesomeIcon icon={faCheckSquare} />
            公開している記事
          </h2>
          <p>
            これらについて、次のような記事やレシピなどを書いて公開しています。
          </p>
          <ul>
            <li>サンプルテキスト</li>
            <li>サンプルテキスト</li>
            <li>サンプルテキスト</li>
          </ul>
          <h2>
            <FontAwesomeIcon icon={faCheckSquare} />
            よく聞かれること
          </h2>
          <p>
            駐車場に関して
          </p>
          <ul>
            <li>第一駐車場　2台</li>
            <li>第二駐車場　4台</li>
            <li>満車の場合は勝山中央駐車場をご利用ください。
            </li>
          </ul>
          <p>気長にお付き合いいただければ幸いです。</p>
        </div>
      </div>
    </article>
  </Layout>
)

export const query = graphql`
  query {
    about: file(relativePath: { eq: "shop_image.jpg" }) {
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
  }
`
