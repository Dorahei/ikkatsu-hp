import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUtensils, faCheckSquare } from "@fortawesome/free-solid-svg-icons"

import Seo from "../components/seo"

const About = ({ data, location}) => (
  <Layout>
    {/* <Seo
      pagetitle="一克 について"
      pagedesc="勝山の炭火 串焼き 串揚げのお店"
      pagepath={location.pathname}
      pageimg={data.about.childImageSharp.original.src}
      pageimgw={data.about.childImageSharp.original.width}
      pageimgh={data.about.childImageSharp.original.height}
    /> */}
    <div className="eyecatch">
      <figure>
        <GatsbyImage
          fluid={data.about.childImageSharp.gatsbyImageData}
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
            美しさと美味しさが一克(括)。<br /><br />
            お店に着くとまず食欲をそそる焼き鳥の香ばしい匂いがお出迎え<br />
            店内はカウンター席と小上がりの座敷があります。<br /><br />
            落ち着いた雰囲気でお食事を楽しめます。<br />
            カウンターの目の前で炭火で焼く串焼きは見て食べて２度美味しいです。<br /><br />
            お一人様でも大人数でもＯＫ！！<br /><br />
            特に女子会でのご利用は大好評！<br />
            いろいろなメニューの中でも野菜巻きはヘルシー感が受けて女性に人気
          </p>
          <h2>
            <FontAwesomeIcon icon={faCheckSquare} />
            店舗について
          </h2>
          <ul>
            <li>カウンター席 9席</li>
            <li>テーブル 12～14席</li>
            <li>トイレ 男女別</li>
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
          <h2>
            <FontAwesomeIcon icon={faCheckSquare} />
            定休日
          </h2>
          <div className="biz-time">
          <p>
            <span>日曜日</span>
            <br/>※翌日祝日の場合営業
            <br/>（月曜日祝日の場合は月曜日休み）
          </p>
          <hr/>
          <p>
            <span>営業時間</span>　17：00 ~ 23：00 
            <br/>（ラストオーダー 22：00）
          </p>
          <p>気長にお付き合いいただければ幸いです。</p>
          </div>
        </div>
      </div>
    </article>
  </Layout>
)

export default About

export const query = graphql`
  query {
    about: file(relativePath: { eq: "shop_image.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
        original {
          src
          height
          width
        }
      }
    }
  }
`

export const Head = ({ location, data }) => (
    <Seo
      pagetitle="一克 について"
      pagedesc="勝山の炭火 串焼き 串揚げのお店"
      pagepath={location.pathname}
      pageimg={data.about.childImageSharp.original.src}
      pageimgw={data.about.childImageSharp.original.width}
      pageimgh={data.about.childImageSharp.original.height}
    />
 )
