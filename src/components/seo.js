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
    <>
      <html lang={data.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={data.locale} />
      <meta property="fb:app_id" content={data.fbappid} />

      <meta property="og:image" content={imgurl} />
      <meta property="og:image:width" content={imgw} />
      <meta property="og:image:height" content={imgh} />

      <meta name="twitter:card" content="summary_large_image" />

     </>
  )
}
export default Seo

 // この部分 Gatsby Head APIはHead関数内に記載する
// export const Head = (data) => {
//   return (
//     <>
//       <html lang={data.lang} />
//       <title>{data.title}</title>
//       <meta name="description" content={data.description} />

//       <link rel="canonical" href={data.url} />

//       <meta property="og:site_name" content={data.title} />
//       <meta property="og:title" content={data.title} />
//       <meta property="og:description" content={data.description} />
//       <meta property="og:url" content={data.url} />
//       <meta property="og:type" content="website" />
//       <meta property="og:locale" content={data.locale} />
//       <meta property="fb:app_id" content={data.fbappid} />

//       <meta property="og:image" content={data.imgurl} />
//       <meta property="og:image:width" content={data.imgw} />
//       <meta property="og:image:height" content={data.imgh} />

//       <meta name="twitter:card" content="summary_large_image" />
//     </>
//   )
// }
