import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Seo = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          lang
          description
          siteUrl
          locale
          fbappid
        }
      }
    }
  `)

  const title = props.pagetitle
    ? `${props.pagetitle} | ${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title

  const description = props.pagedesc || data.site.siteMetadata.description

  const url = props.pagepath
    ? `${data.site.siteMetadata.siteUrl}${props.pagepath}`
    : data.site.siteMetadata.siteUrl

  const imgurl = props.pageimg
    ? `${data.site.siteMetadata.siteUrl}${props.pageimg}`
    : props.blogimg || `${data.site.siteMetadata.siteUrl}/thumb.jpg`
  const imgw = props.pageimgw || 1280
  const imgh = props.pageimgh || 640

  return (
    <Head
      title={title}
      description={description}
      url={url}
      imgurl={imgurl}
      imgw={imgw}
      imgh={imgh}
      lang={data.site.siteMetadata.lang}
      site_name={data.site.siteMetadata.title}
      locale={data.site.siteMetadata.locale}
      fbappid={data.site.siteMetadata.fbappid}
    />
  )
}
export default Seo

 // この部分 Gatsby Head APIはHead関数内に記載する
export const Head = (seo_data) => {
  return (
    <>
      <html lang={seo_data.lang} />
      <title>{seo_data.title}</title>
      <meta name="description" content={seo_data.description} />

      <link rel="canonical" href={seo_data.url} />

      <meta property="og:site_name" content={seo_data.title} />
      <meta property="og:title" content={seo_data.title} />
      <meta property="og:description" content={seo_data.description} />
      <meta property="og:url" content={seo_data.url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={seo_data.locale} />
      <meta property="fb:app_id" content={seo_data.fbappid} />

      <meta property="og:image" content={seo_data.imgurl} />
      <meta property="og:image:width" content={seo_data.imgw} />
      <meta property="og:image:height" content={seo_data.imgh} />

      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}
