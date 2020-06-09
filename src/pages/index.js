import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO />
    <section className="hero">
      <figure>
        <Img
          fluid={data.hero.childImageSharp.fluid}
          alt="ikkatsu_pattern"
          style={{ height: "100%" }}
        />
      </figure>
      <div className="catch">
        <h1>
          炭火 串焼き 串揚げのお店
        </h1>
        <div className="logo">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512px" height="128px" viewBox="0 0 10240 2560" preserveAspectRatio="xMidYMid meet">
            <g id="layer101" fill="#000000" stroke="none">
              <path d="M8182 2370 c-154 -24 -294 -76 -378 -140 -178 -134 -199 -168 -192 -305 2 -47 2 -85 -2 -85 -3 0 -21 16 -40 35 -26 27 -42 35 -69 35 -40 0 -101 37 -101 62 0 9 -53 62 -117 117 -65 55 -152 135 -193 177 -69 71 -78 78 -122 82 -86 8 -128 -15 -128 -72 0 -40 83 -207 159 -321 70 -104 90 -125 118 -125 36 0 29 35 -27 133 -27 48 -50 89 -50 92 0 17 28 -2 68 -47 68 -75 232 -278 232 -288 0 -4 -7 -13 -15 -20 -8 -7 -15 -20 -15 -30 0 -10 -8 -24 -17 -31 -9 -8 -42 -46 -74 -86 -42 -53 -64 -92 -83 -150 -32 -96 -32 -121 -2 -175 21 -38 28 -43 60 -44 21 0 41 -7 49 -17 6 -8 39 -23 72 -31 91 -23 178 -55 186 -68 15 -23 -3 -38 -46 -38 -42 0 -87 -11 -215 -54 l-65 -21 -3 -42 c-2 -33 1 -44 16 -52 11 -6 25 -24 32 -40 15 -36 63 -61 122 -61 28 0 61 -10 93 -28 l50 -27 7 -120 c5 -66 18 -174 30 -240 22 -116 24 -120 50 -123 18 -2 28 -11 32 -28 4 -13 11 -24 17 -24 6 0 17 -7 25 -15 46 -46 180 20 262 129 73 97 83 117 87 167 3 44 7 53 42 79 63 47 89 73 112 111 27 46 27 71 -1 121 -20 35 -26 39 -53 35 -17 -2 -40 2 -54 11 -49 32 -101 92 -107 121 -7 36 -8 36 39 16 39 -16 123 -20 131 -6 3 4 20 11 37 15 47 9 141 70 188 121 53 58 80 117 81 175 0 43 -4 50 -63 110 -65 68 -188 171 -215 181 -11 4 17 24 84 62 54 31 113 70 131 87 18 16 36 30 40 30 20 0 203 216 282 333 36 53 71 142 71 181 0 25 -53 96 -72 96 -5 0 -17 9 -26 20 -34 42 -258 51 -460 20z m155 -213 c38 -38 43 -48 45 -94 2 -36 -3 -57 -14 -70 -8 -10 -26 -38 -39 -63 -31 -59 -57 -90 -97 -119 -30 -21 -33 -28 -30 -62 3 -37 2 -39 -47 -64 -28 -14 -62 -25 -77 -25 -15 0 -44 -11 -64 -25 -45 -31 -86 -32 -125 -4 l-30 21 40 20 c22 11 50 36 62 55 20 32 21 44 16 136 -6 96 -21 169 -46 216 -10 17 -6 24 26 46 64 43 250 90 313 78 14 -2 44 -23 67 -46z m-835 -710 c79 -59 124 -94 193 -153 l61 -50 -53 4 c-29 2 -59 0 -65 -6 -7 -5 -27 -13 -45 -16 -17 -4 -36 -13 -42 -20 -7 -8 -32 -10 -89 -5 -110 9 -120 14 -128 55 -5 27 -14 39 -40 52 -19 8 -34 21 -34 28 0 7 23 54 50 105 28 51 50 96 50 101 0 9 33 -13 142 -95z" />
              <path d="M2247 2243 c-4 -3 -7 -32 -7 -62 0 -48 -3 -58 -22 -66 -12 -6 -25 -21 -29 -35 -5 -19 -7 -15 -8 21 -1 53 -14 69 -55 69 -40 0 -78 -26 -127 -85 -48 -58 -54 -109 -14 -127 24 -11 41 -8 115 19 8 3 -1 -9 -21 -26 -39 -33 -59 -87 -59 -160 0 -42 25 -71 62 -71 31 0 98 32 98 46 0 18 11 18 35 0 15 -11 18 -25 17 -80 l-2 -67 52 3 53 3 3 39 c2 21 -1 43 -7 49 -24 24 -10 35 49 39 67 5 100 26 100 65 0 49 -26 69 -140 106 -8 3 10 6 41 6 78 1 111 27 107 85 -3 41 -4 41 -48 47 -25 3 -64 16 -87 28 l-43 21 0 70 0 70 -28 0 c-16 0 -32 -3 -35 -7z" />
              <path d="M3018 2226 c-6 -16 -21 -26 -37 -28 -18 -2 -27 -10 -29 -26 -5 -32 -37 -62 -66 -62 -13 0 -27 -7 -30 -16 -11 -30 -6 -77 11 -89 10 -8 12 -14 6 -18 -17 -10 -76 62 -68 82 4 9 10 46 12 84 l6 67 -35 0 c-49 0 -63 -21 -63 -91 0 -57 -1 -59 -26 -59 -30 0 -49 -33 -49 -85 0 -34 1 -35 40 -35 60 0 52 -25 -13 -44 -79 -23 -107 -49 -107 -97 0 -59 26 -79 100 -79 45 0 60 -4 60 -14 0 -16 21 -26 55 -26 33 0 55 10 55 25 0 7 7 18 14 25 13 10 15 5 13 -32 l-2 -43 42 -3 c23 -2 51 2 63 8 17 9 20 8 20 -9 0 -21 10 -26 77 -36 41 -6 80 5 95 29 15 23 8 71 -12 84 -17 10 -20 23 -20 77 0 61 1 65 23 65 13 0 28 5 35 12 15 15 16 64 2 73 -8 5 -7 11 0 20 18 22 7 59 -22 73 -26 12 -41 43 -68 150 -10 38 -14 42 -41 42 -22 0 -32 -6 -41 -24z m-88 -356 c-12 -23 -23 -25 -53 -8 l-22 12 25 7 c49 14 62 11 50 -11z" />
              <path d="M3510 2200 c0 -16 7 -55 15 -87 26 -101 17 -203 -20 -203 -8 0 -26 -5 -40 -12 -20 -9 -25 -18 -25 -46 0 -35 15 -54 57 -72 18 -7 22 -19 25 -62 3 -52 4 -53 36 -56 24 -2 41 4 63 23 21 17 35 22 43 16 6 -5 52 -11 101 -13 l90 -3 3 34 c6 58 -5 81 -37 81 -23 0 -30 5 -33 23 -2 17 -11 23 -35 25 -19 2 -33 9 -33 16 0 7 -13 30 -29 50 -17 21 -31 54 -35 80 -9 58 -50 170 -76 206 -14 19 -30 30 -46 30 -20 0 -24 -5 -24 -30z" />
              <path d="M3315 2122 c-35 -52 -45 -94 -45 -179 0 -100 11 -125 52 -121 32 3 34 6 65 93 35 101 41 167 17 213 -22 46 -56 43 -89 -6z" />
              <path d="M4625 1686 c-71 -22 -138 -63 -202 -121 -73 -66 -80 -92 -34 -131 16 -13 31 -35 35 -48 3 -13 23 -39 45 -59 49 -44 186 -90 416 -141 88 -19 207 -47 265 -61 294 -72 545 -111 780 -119 175 -6 159 -13 316 140 129 126 154 169 154 262 0 50 -3 63 -19 72 -25 13 -100 13 -237 -1 -94 -9 -112 -14 -129 -34 -44 -52 -111 -35 -280 70 -79 49 -125 58 -125 25 0 -17 -16 -8 -91 50 -98 75 -143 91 -137 46 3 -25 17 -37 280 -249 69 -56 125 -103 123 -105 -7 -8 -150 20 -170 32 -22 14 -92 27 -174 31 -29 2 -56 7 -60 12 -3 5 -46 19 -96 32 -96 24 -155 54 -155 77 0 8 -7 14 -16 14 -27 0 -104 42 -104 57 0 7 -7 13 -15 13 -8 0 -15 5 -15 10 0 13 -37 50 -49 50 -6 0 -39 20 -74 44 -60 41 -69 44 -128 44 -35 0 -82 -5 -104 -12z" />
              <path d="M1897 1523 c-4 -3 -7 -32 -7 -64 0 -48 -3 -57 -20 -62 -14 -3 -20 -14 -20 -31 0 -14 -5 -26 -10 -26 -6 0 -8 16 -4 42 8 50 -10 68 -69 68 -34 0 -45 -7 -93 -57 -57 -59 -70 -87 -60 -128 6 -22 12 -25 49 -25 23 0 61 9 85 20 23 10 42 16 42 12 0 -4 -17 -15 -38 -24 -21 -10 -45 -31 -55 -47 -23 -40 -34 -155 -17 -176 20 -24 91 -19 134 10 30 20 41 23 57 15 17 -9 19 -20 17 -78 l-3 -67 47 -3 c44 -3 48 -1 54 23 6 25 3 55 -10 86 -6 14 2 18 54 24 71 8 100 30 100 74 0 30 -38 71 -65 71 -7 0 -25 6 -40 14 -27 14 -27 14 28 21 69 9 90 29 85 81 -3 38 -4 39 -48 46 -25 3 -65 17 -90 30 l-45 25 3 66 4 67 -29 0 c-17 0 -33 -3 -36 -7z" />
              <path d="M2506 1504 c-11 -29 -6 -82 10 -94 26 -23 37 -50 24 -65 -9 -11 -15 -10 -32 7 -16 16 -29 19 -59 15 -43 -6 -42 -7 -39 69 2 48 -16 67 -57 62 -28 -3 -28 -4 -27 -68 0 -36 4 -79 8 -96 7 -28 5 -32 -16 -37 -12 -4 -38 -19 -57 -34 -28 -24 -34 -37 -39 -81 -6 -66 7 -82 63 -82 29 0 47 6 60 20 17 18 20 19 28 5 5 -9 9 -42 9 -73 -1 -81 4 -92 39 -92 45 0 72 34 67 84 -5 38 -3 42 27 58 20 10 37 13 46 7 12 -7 11 -9 -2 -9 -26 0 -61 -57 -57 -93 3 -32 4 -32 61 -35 l57 -3 0 -35 c0 -35 1 -35 38 -32 32 3 37 7 40 30 3 22 9 27 35 30 28 3 32 7 35 36 2 18 -1 39 -6 45 -11 13 7 47 26 47 12 0 22 24 22 51 0 13 -12 25 -34 34 -41 17 -55 52 -22 57 17 2 21 10 21 37 0 31 -4 36 -32 43 -38 10 -42 31 -18 78 19 37 35 38 73 5 17 -14 39 -25 51 -25 36 0 28 55 -13 96 -31 31 -39 34 -94 34 -55 0 -62 -3 -86 -31 -14 -17 -26 -35 -26 -40 0 -26 -21 -3 -37 41 -16 46 -20 50 -49 50 -20 0 -34 -6 -38 -16z m9 -258 c12 -12 11 -16 -4 -30 -23 -21 -45 -21 -37 0 3 9 6 22 6 30 0 18 17 18 35 0z" />
              <path d="M3143 1490 c-55 -11 -97 -34 -122 -66 -40 -51 -19 -114 38 -114 22 0 151 -37 151 -43 0 -1 -35 -2 -78 -3 -46 0 -89 -6 -107 -15 -26 -12 -30 -20 -30 -54 l0 -40 53 2 52 2 -35 -36 c-39 -40 -48 -64 -43 -114 3 -33 4 -34 52 -37 36 -2 54 -9 64 -23 19 -28 51 -23 110 17 66 44 86 86 77 155 -6 43 -4 52 19 80 28 33 36 99 14 117 -7 5 -40 13 -73 16 -33 4 -75 12 -93 17 l-33 11 43 21 c38 20 43 26 46 61 5 56 -13 64 -105 46z" />
              <path d="M6434 655 c-5 -21 -10 -23 -36 -18 -48 10 -65 -46 -32 -109 11 -22 13 -33 5 -41 -6 -6 -11 -25 -11 -42 0 -26 5 -33 35 -44 29 -10 35 -17 35 -41 0 -42 25 -62 74 -58 37 3 41 6 44 32 5 38 38 65 83 66 20 0 51 10 70 23 29 20 34 29 37 70 3 43 1 47 -23 53 -15 4 -44 2 -65 -5 -54 -16 -70 -14 -70 9 0 26 -26 78 -53 108 -30 32 -84 31 -93 -3z" />
              <path d="M6040 628 c0 -11 11 -36 25 -54 14 -18 25 -37 25 -43 0 -18 -33 -12 -75 14 -43 26 -94 32 -113 13 -14 -14 -16 -67 -3 -86 4 -8 19 -12 32 -11 13 2 45 -5 71 -15 64 -25 144 -18 170 14 40 50 13 151 -47 176 -52 21 -85 19 -85 -8z" />
              <path d="M5506 617 c-20 -14 -31 -60 -41 -164 l-7 -73 35 0 c40 0 67 27 67 67 0 21 5 19 43 -22 42 -44 45 -45 105 -45 51 0 65 4 92 26 28 24 31 31 28 77 -4 67 -18 75 -99 56 -53 -13 -64 -19 -69 -40 -5 -21 -8 -18 -24 26 -41 112 -35 105 -75 105 -21 0 -45 -6 -55 -13z" />
              <path d="M6990 604 c0 -16 14 -42 35 -65 37 -41 45 -76 20 -85 -8 -3 -47 10 -87 30 -91 45 -154 49 -164 12 -3 -13 -4 -37 -2 -52 3 -26 8 -30 48 -35 25 -4 67 -14 94 -23 27 -9 77 -16 112 -16 52 0 68 4 91 24 25 22 28 31 28 83 -1 44 -6 66 -23 90 -23 32 -85 63 -127 63 -20 0 -25 -5 -25 -26z" />
            </g>
            <g id="layer102" fill="#ff0000" stroke="none">
              <path d="M1522 838 c-14 -14 -16 -70 -3 -83 5 -6 29 -47 54 -92 33 -60 41 -83 31 -83 -29 0 -84 -54 -84 -81 0 -31 15 -39 77 -39 35 0 43 -3 36 -12 -19 -24 -44 -117 -41 -150 2 -26 8 -34 26 -36 32 -5 71 23 88 64 8 19 19 34 24 34 15 0 12 -11 -10 -48 -51 -83 10 -135 96 -81 45 27 64 56 64 97 0 20 4 31 10 27 6 -3 10 -15 10 -26 0 -17 6 -20 38 -17 l37 3 0 67 c1 37 4 70 8 74 4 4 7 18 7 30 0 37 -33 47 -130 41 -48 -3 -93 -1 -103 4 -25 14 -21 39 6 39 13 0 28 5 35 12 9 9 12 6 12 -15 0 -26 2 -27 55 -27 39 0 55 4 55 13 0 8 17 18 38 23 36 9 37 10 37 54 0 44 -1 45 -34 48 -23 2 -40 -3 -55 -17 -13 -12 -26 -18 -29 -14 -4 3 11 24 34 45 l41 39 33 -26 c82 -62 118 -6 45 67 -39 39 -42 40 -95 36 -36 -3 -66 -13 -85 -26 -36 -27 -40 -27 -40 -1 0 48 -30 70 -74 53 -20 -8 -21 -59 -2 -94 13 -23 12 -25 -18 -36 -17 -6 -38 -14 -47 -18 -13 -6 -24 10 -52 76 -29 67 -40 84 -59 86 -13 2 -29 -3 -36 -10z" />
              <path d="M2494 796 c-17 -8 -47 -31 -67 -51 -21 -21 -37 -32 -37 -24 0 8 -10 27 -23 42 -18 23 -32 29 -79 34 l-58 6 0 -37 c0 -24 5 -39 15 -43 17 -6 35 -36 64 -110 l19 -48 -47 3 c-34 3 -51 -1 -60 -12 -8 -9 -19 -16 -25 -16 -7 0 -25 -14 -42 -31 -26 -27 -29 -37 -29 -90 1 -50 5 -63 27 -85 39 -39 106 -44 156 -12 64 42 72 42 72 2 0 -27 5 -37 24 -45 40 -19 72 -3 107 51 22 33 39 50 53 50 28 0 90 22 110 39 9 8 16 28 16 47 0 48 -34 69 -97 59 -27 -4 -54 -12 -61 -18 -10 -8 -19 -4 -37 18 -18 24 -21 34 -13 55 12 32 65 87 101 106 26 14 31 13 63 -5 83 -49 104 2 33 83 -40 45 -42 46 -97 46 -32 -1 -71 -7 -88 -14z" />
            </g>
            <g id="layer103" fill="#dddfff" stroke="none">
              <path d="M8182 2370 c-154 -24 -294 -76 -378 -140 -178 -134 -199 -168 -192 -305 2 -47 2 -85 -2 -85 -3 0 -21 16 -40 35 -26 27 -42 35 -69 35 -40 0 -101 37 -101 62 0 9 -53 62 -117 117 -65 55 -152 135 -193 177 -69 71 -78 78 -122 82 -86 8 -128 -15 -128 -72 0 -40 83 -207 159 -321 70 -104 90 -125 118 -125 36 0 29 35 -27 133 -27 48 -50 89 -50 92 0 17 28 -2 68 -47 68 -75 232 -278 232 -288 0 -4 -7 -13 -15 -20 -8 -7 -15 -20 -15 -30 0 -10 -8 -24 -17 -31 -9 -8 -42 -46 -74 -86 -42 -53 -64 -92 -83 -150 -32 -96 -32 -121 -2 -175 21 -38 28 -43 60 -44 21 0 41 -7 49 -17 6 -8 39 -23 72 -31 91 -23 178 -55 186 -68 15 -23 -3 -38 -46 -38 -42 0 -87 -11 -215 -54 l-65 -21 -3 -42 c-2 -33 1 -44 16 -52 11 -6 25 -24 32 -40 15 -36 63 -61 122 -61 28 0 61 -10 93 -28 l50 -27 7 -120 c5 -66 18 -174 30 -240 22 -116 24 -120 50 -123 18 -2 28 -11 32 -28 4 -13 11 -24 17 -24 6 0 17 -7 25 -15 46 -46 180 20 262 129 73 97 83 117 87 167 3 44 7 53 42 79 63 47 89 73 112 111 27 46 27 71 -1 121 -20 35 -26 39 -53 35 -17 -2 -40 2 -54 11 -49 32 -101 92 -107 121 -7 36 -8 36 39 16 39 -16 123 -20 131 -6 3 4 20 11 37 15 47 9 141 70 188 121 53 58 80 117 81 175 0 43 -4 50 -63 110 -65 68 -188 171 -215 181 -11 4 17 24 84 62 54 31 113 70 131 87 18 16 36 30 40 30 20 0 203 216 282 333 36 53 71 142 71 181 0 25 -53 96 -72 96 -5 0 -17 9 -26 20 -34 42 -258 51 -460 20z m406 -21 c18 -6 32 -17 32 -25 0 -8 7 -14 16 -14 8 0 29 -13 45 -29 36 -36 37 -69 5 -136 -41 -89 -281 -390 -311 -390 -7 0 -25 -15 -39 -33 -15 -17 -71 -56 -124 -86 -107 -61 -171 -110 -159 -122 4 -5 11 -3 15 3 11 16 78 -19 137 -72 28 -25 57 -47 65 -51 8 -3 39 -32 67 -65 47 -52 52 -62 46 -91 -23 -122 -188 -263 -323 -276 -40 -4 -59 1 -100 22 l-50 26 0 -63 c0 -62 1 -63 48 -108 63 -61 99 -82 126 -75 19 5 27 -1 42 -29 18 -34 18 -36 -1 -72 -11 -20 -53 -64 -92 -96 -70 -58 -73 -61 -67 -96 6 -41 -8 -69 -72 -153 -53 -68 -91 -101 -153 -132 l-50 -26 -3 23 c-2 12 -7 20 -12 19 -5 -2 -13 2 -17 10 -7 10 -9 10 -9 1 0 -23 -19 -14 -26 11 -4 17 -14 26 -32 28 -26 3 -28 6 -49 133 -12 72 -25 175 -28 229 -3 56 -11 106 -18 114 -22 27 -110 62 -158 62 -48 0 -99 28 -99 54 0 7 -11 23 -25 36 -14 13 -25 29 -25 35 0 19 199 85 270 90 19 1 43 3 53 4 13 1 17 10 17 46 l0 44 -136 44 c-79 25 -132 47 -125 51 7 5 23 5 37 2 27 -7 207 -28 237 -27 10 0 26 6 34 13 42 35 135 47 206 27 22 -6 42 -7 45 -4 8 9 -88 98 -183 171 -38 30 -83 64 -99 76 -169 129 -181 137 -193 125 -19 -20 -112 -197 -122 -233 -10 -37 -6 -43 44 -63 21 -8 30 -19 31 -36 2 -23 0 -24 -42 -18 -34 4 -49 2 -63 -11 -17 -16 -19 -15 -31 15 -7 17 -20 37 -27 45 -13 12 -12 23 8 82 30 92 41 111 113 201 35 44 67 89 71 100 3 12 15 26 26 31 10 6 19 17 19 24 0 13 -194 260 -254 324 -17 18 -46 40 -64 49 -30 15 -35 15 -49 0 -18 -17 -13 -29 66 -172 21 -38 25 -51 12 -35 -38 45 -141 213 -188 308 -46 92 -47 93 -27 112 13 13 35 20 67 21 43 2 50 -1 86 -39 21 -23 43 -42 49 -42 7 0 12 -6 12 -13 0 -7 59 -64 130 -126 72 -62 130 -115 130 -118 0 -9 -66 42 -125 96 -107 99 -113 103 -119 92 -9 -13 43 -71 131 -146 67 -57 108 -83 221 -140 23 -12 50 -31 58 -43 8 -12 20 -22 26 -22 6 0 -2 16 -16 35 -34 44 -29 44 16 1 33 -32 111 -66 124 -54 3 4 -2 20 -10 36 -26 50 -31 135 -12 186 25 66 148 175 261 230 98 49 184 75 296 91 62 8 115 18 118 21 9 10 234 -4 269 -17z m-1086 -902 c79 -59 124 -94 193 -153 l61 -50 -53 4 c-29 2 -59 0 -65 -6 -7 -5 -27 -13 -45 -16 -17 -4 -36 -13 -42 -20 -7 -8 -32 -10 -89 -5 -110 9 -120 14 -128 55 -5 27 -14 39 -40 52 -19 8 -34 21 -34 28 0 7 23 54 50 105 28 51 50 96 50 101 0 9 33 -13 142 -95z" />
              <path d="M8105 2214 c-84 -18 -160 -52 -198 -89 -25 -23 -26 -29 -15 -44 33 -39 54 -114 63 -227 7 -81 7 -81 -24 -117 -17 -19 -49 -42 -70 -51 -22 -8 -42 -20 -46 -25 -9 -15 80 -75 123 -83 30 -5 46 -1 85 23 56 34 67 36 41 8 -14 -16 -6 -14 36 11 30 18 64 36 75 40 39 15 104 70 120 100 18 35 16 36 -27 10 -36 -22 -48 -25 -48 -12 0 5 12 15 28 23 42 21 52 33 111 139 14 25 30 48 35 52 7 4 10 40 10 85 l-2 77 -50 48 c-50 47 -51 48 -114 47 -35 0 -94 -7 -133 -15z m232 -57 c38 -38 43 -48 45 -94 2 -36 -3 -57 -14 -70 -8 -10 -26 -38 -39 -63 -31 -59 -57 -90 -97 -119 -30 -21 -33 -28 -30 -62 3 -37 2 -39 -47 -64 -28 -14 -62 -25 -77 -25 -15 0 -44 -11 -64 -25 -45 -31 -86 -32 -125 -4 l-30 21 40 20 c22 11 50 36 62 55 20 32 21 44 16 136 -6 96 -21 169 -46 216 -10 17 -6 24 26 46 64 43 250 90 313 78 14 -2 44 -23 67 -46z" />
              <path d="M8009 1569 c-23 -19 -23 -20 -2 -10 12 6 25 16 28 21 10 16 -1 12 -26 -11z" />
              <path d="M2247 2243 c-4 -3 -7 -32 -7 -62 0 -48 -3 -58 -22 -66 -12 -6 -25 -21 -29 -35 -5 -19 -7 -15 -8 21 -1 53 -14 69 -55 69 -40 0 -78 -26 -127 -85 -48 -58 -54 -109 -14 -127 24 -11 41 -8 115 19 8 3 -1 -9 -21 -26 -39 -33 -59 -87 -59 -160 0 -42 25 -71 62 -71 31 0 98 32 98 46 0 18 11 18 35 0 15 -11 18 -25 17 -80 l-2 -67 52 3 53 3 3 39 c2 21 -1 43 -7 49 -24 24 -10 35 49 39 67 5 100 26 100 65 0 49 -26 69 -140 106 -8 3 10 6 41 6 78 1 111 27 107 85 -3 41 -4 41 -48 47 -25 3 -64 16 -87 28 l-43 21 0 70 0 70 -28 0 c-16 0 -32 -3 -35 -7z m36 -87 c-6 -64 -5 -65 23 -78 16 -6 37 -18 46 -26 9 -8 35 -15 57 -16 51 -3 67 -16 52 -44 -14 -26 -40 -34 -121 -37 -38 -2 -66 -7 -68 -14 -6 -17 17 -41 38 -41 25 0 123 -45 138 -63 28 -33 -68 -77 -132 -61 -33 8 -38 -6 -20 -60 19 -55 13 -79 -18 -74 -20 3 -21 8 -19 70 l2 68 -35 16 c-39 19 -38 37 2 32 19 -2 28 2 30 15 5 26 -16 47 -49 47 -34 0 -60 -41 -52 -82 4 -22 0 -29 -25 -42 -57 -29 -94 -12 -86 39 15 98 35 129 96 147 38 11 42 10 59 -11 21 -25 54 -25 54 1 0 11 -18 27 -45 40 -24 13 -46 29 -48 36 -6 18 15 15 47 -9 34 -25 51 -18 51 20 0 20 -6 30 -20 34 -11 3 -20 10 -20 15 0 5 9 12 20 15 16 4 20 14 20 49 0 52 9 90 20 83 4 -3 5 -34 3 -69z m-135 -25 c17 -11 5 -81 -17 -99 -24 -20 -100 -52 -122 -52 -29 0 -24 41 11 80 17 18 30 37 30 41 0 11 51 38 70 38 8 1 21 -3 28 -8z" />
              <path d="M2276 2034 c-17 -45 20 -73 72 -53 l27 11 -35 29 c-39 33 -55 36 -64 13z" />
              <path d="M2282 1843 c3 -24 8 -29 37 -31 47 -5 63 14 32 39 -13 10 -34 19 -48 19 -21 0 -24 -4 -21 -27z" />
              <path d="M3018 2226 c-6 -16 -21 -26 -37 -28 -18 -2 -27 -10 -29 -26 -5 -32 -37 -62 -66 -62 -13 0 -27 -7 -30 -16 -11 -30 -6 -77 11 -89 10 -8 12 -14 6 -18 -17 -10 -76 62 -68 82 4 9 10 46 12 84 l6 67 -35 0 c-49 0 -63 -21 -63 -91 0 -57 -1 -59 -26 -59 -30 0 -49 -33 -49 -85 0 -34 1 -35 40 -35 60 0 52 -25 -13 -44 -79 -23 -107 -49 -107 -97 0 -59 26 -79 100 -79 45 0 60 -4 60 -14 0 -16 21 -26 55 -26 33 0 55 10 55 25 0 7 7 18 14 25 13 10 15 5 13 -32 l-2 -43 42 -3 c23 -2 51 2 63 8 17 9 20 8 20 -9 0 -21 10 -26 77 -36 41 -6 80 5 95 29 15 23 8 71 -12 84 -17 10 -20 23 -20 77 0 61 1 65 23 65 13 0 28 5 35 12 15 15 16 64 2 73 -8 5 -7 11 0 20 18 22 7 59 -22 73 -26 12 -41 43 -68 150 -10 38 -14 42 -41 42 -22 0 -32 -6 -41 -24z m58 -33 c24 -111 49 -163 80 -163 24 0 15 -30 -12 -40 -14 -6 -43 -10 -64 -10 -38 0 -64 -16 -38 -24 7 -3 39 -7 71 -11 39 -4 57 -11 57 -21 0 -22 -35 -25 -183 -17 l-139 8 22 28 c15 19 31 27 53 27 l32 1 -43 39 c-38 34 -42 42 -32 59 13 26 27 27 35 2 11 -37 67 -81 101 -81 18 0 35 4 38 8 6 11 -48 127 -63 136 -6 4 -11 14 -11 22 0 26 16 15 33 -23 9 -21 30 -54 46 -73 l30 -35 -25 84 c-14 45 -23 89 -20 97 9 23 25 16 32 -13z m-284 -51 c-20 -67 -15 -113 18 -152 36 -42 38 -52 6 -40 -28 10 -36 5 -36 -26 0 -24 70 -94 94 -94 41 0 18 -52 -29 -64 -12 -3 -25 -15 -28 -26 -6 -25 -54 -28 -59 -4 -2 12 -18 16 -71 18 -74 2 -87 10 -87 58 0 22 8 31 51 52 28 15 59 26 69 26 25 0 42 24 38 57 -3 25 -7 28 -45 31 -24 2 -43 5 -43 8 0 3 7 18 15 34 13 26 18 28 40 20 29 -11 39 0 29 33 -12 36 -6 89 13 109 26 28 39 7 25 -40z m201 -73 c29 -44 32 -55 18 -63 -10 -6 -72 90 -63 98 11 12 19 5 45 -35z m-63 -199 c-12 -23 -23 -25 -53 -8 l-22 12 25 7 c49 14 62 11 50 -11z m101 10 c26 -15 24 -27 -8 -42 -17 -8 -29 -23 -31 -38 -3 -20 -1 -23 9 -12 7 6 20 12 29 12 8 0 23 14 32 30 29 52 45 39 44 -36 -1 -58 2 -67 24 -85 l25 -19 -24 -20 c-18 -16 -32 -19 -65 -14 -54 9 -64 19 -28 32 25 8 29 14 25 36 -6 32 -34 35 -62 7 -43 -43 -111 -65 -111 -36 0 31 44 128 72 161 33 37 39 39 69 24z" />
              <path d="M3510 2200 c0 -16 7 -55 15 -87 26 -101 17 -203 -20 -203 -8 0 -26 -5 -40 -12 -20 -9 -25 -18 -25 -46 0 -35 15 -54 57 -72 18 -7 22 -19 25 -62 3 -52 4 -53 36 -56 24 -2 41 4 63 23 21 17 35 22 43 16 6 -5 52 -11 101 -13 l90 -3 3 34 c6 58 -5 81 -37 81 -23 0 -30 5 -33 23 -2 17 -11 23 -35 25 -19 2 -33 9 -33 16 0 7 -13 30 -29 50 -17 21 -31 54 -35 80 -9 58 -50 170 -76 206 -14 19 -30 30 -46 30 -20 0 -24 -5 -24 -30z m57 -37 c27 -50 61 -147 69 -202 4 -28 16 -53 31 -67 26 -24 30 -56 9 -73 -8 -7 -17 -24 -21 -39 -9 -38 -64 -92 -93 -92 -21 0 -23 4 -22 38 3 57 3 58 -40 86 -22 14 -40 31 -40 36 0 6 21 20 47 33 46 21 48 25 56 74 8 49 -8 174 -28 226 -13 32 11 17 32 -20z m199 -358 c14 -56 -21 -100 -68 -87 -44 11 -10 112 38 112 17 0 25 -7 30 -25z m72 -61 c4 -25 -22 -49 -43 -40 -31 12 -9 70 25 64 8 -2 16 -13 18 -24z" />
              <path d="M3315 2122 c-35 -52 -45 -94 -45 -179 0 -100 11 -125 52 -121 32 3 34 6 65 93 35 101 41 167 17 213 -22 46 -56 43 -89 -6z m76 -77 c-1 -31 -44 -169 -61 -195 -7 -12 -12 -12 -22 -2 -18 18 -17 169 1 202 7 14 23 39 34 57 l21 32 15 -32 c7 -18 13 -45 12 -62z" />
              <path d="M4625 1686 c-71 -22 -138 -63 -202 -121 -73 -66 -80 -92 -34 -131 16 -13 31 -35 35 -48 3 -13 23 -39 45 -59 49 -44 186 -90 416 -141 88 -19 207 -47 265 -61 294 -72 545 -111 780 -119 175 -6 159 -13 316 140 129 126 154 169 154 262 0 50 -3 63 -19 72 -25 13 -100 13 -237 -1 -94 -9 -112 -14 -129 -34 -44 -52 -111 -35 -280 70 -79 49 -125 58 -125 25 0 -17 -16 -8 -91 50 -98 75 -143 91 -137 46 3 -25 17 -37 280 -249 69 -56 125 -103 123 -105 -7 -8 -150 20 -170 32 -22 14 -92 27 -174 31 -29 2 -56 7 -60 12 -3 5 -46 19 -96 32 -96 24 -155 54 -155 77 0 8 -7 14 -16 14 -27 0 -104 42 -104 57 0 7 -7 13 -15 13 -8 0 -15 5 -15 10 0 13 -37 50 -49 50 -6 0 -39 20 -74 44 -60 41 -69 44 -128 44 -35 0 -82 -5 -104 -12z m205 -52 c24 -19 57 -38 73 -41 15 -3 26 -7 24 -10 -6 -6 74 -86 105 -106 15 -9 33 -17 41 -17 7 0 30 -15 51 -34 25 -24 55 -39 92 -47 30 -7 54 -15 54 -19 0 -12 50 -28 105 -36 28 -4 72 -15 98 -25 54 -21 71 -24 62 -9 -9 14 20 12 74 -5 25 -8 64 -18 86 -22 29 -5 34 -8 17 -11 -29 -5 -18 -22 14 -22 14 0 23 4 19 9 -3 6 18 11 51 13 l56 3 -22 28 c-12 15 -75 70 -141 122 -65 52 -119 97 -119 100 0 11 87 -39 130 -74 56 -46 100 -76 123 -84 25 -9 21 6 -7 23 -55 34 -176 135 -176 147 0 19 4 17 76 -29 37 -23 107 -59 156 -80 82 -35 92 -38 107 -23 10 8 25 15 34 15 8 0 19 9 22 20 3 11 9 20 13 21 40 3 88 8 142 15 163 21 197 8 186 -68 -10 -66 -69 -147 -181 -249 -116 -105 -147 -123 -196 -109 -19 6 -62 7 -95 4 -34 -4 -93 -3 -130 2 -68 8 -68 8 -29 15 29 6 22 7 -30 4 l-70 -3 55 13 c66 15 36 19 -42 5 -42 -8 -76 -7 -141 4 -127 22 -141 27 -125 38 9 7 4 8 -15 3 -16 -3 -45 -3 -65 1 l-37 7 35 12 35 12 -35 6 c-19 4 -51 2 -70 -3 -50 -14 -61 -11 -20 6 l35 14 -40 -5 c-31 -4 -37 -3 -25 5 12 9 8 11 -17 7 -18 -2 -34 0 -35 4 -3 7 -54 12 -98 9 -8 -1 -26 1 -40 4 -14 3 -63 12 -110 21 -116 22 -189 41 -283 76 -105 38 -122 50 -152 109 -14 28 -34 56 -45 62 -11 7 -20 18 -20 23 0 13 98 101 142 128 63 38 123 56 188 56 60 1 69 -2 110 -35z m455 -494 c-11 -5 -29 -9 -40 -9 l-20 0 20 9 c11 5 29 9 40 9 l20 0 -20 -9z" />
              <path d="M5516 1141 c-15 -6 -4 -12 47 -24 36 -9 78 -17 93 -17 43 0 24 -7 -36 -13 -36 -4 -48 -3 -35 3 18 8 17 9 -7 9 -15 1 -29 -3 -32 -8 -10 -16 37 -20 109 -10 85 13 98 35 26 45 -25 3 -62 10 -81 15 -41 10 -58 10 -84 0z" />
              <path d="M1897 1523 c-4 -3 -7 -32 -7 -64 0 -48 -3 -57 -20 -62 -14 -3 -20 -14 -20 -31 0 -14 -5 -26 -10 -26 -6 0 -8 16 -4 42 8 50 -10 68 -69 68 -34 0 -45 -7 -93 -57 -57 -59 -70 -87 -60 -128 6 -22 12 -25 49 -25 23 0 61 9 85 20 23 10 42 16 42 12 0 -4 -17 -15 -38 -24 -21 -10 -45 -31 -55 -47 -23 -40 -34 -155 -17 -176 20 -24 91 -19 134 10 30 20 41 23 57 15 17 -9 19 -20 17 -78 l-3 -67 47 -3 c44 -3 48 -1 54 23 6 25 3 55 -10 86 -6 14 2 18 54 24 71 8 100 30 100 74 0 30 -38 71 -65 71 -7 0 -25 6 -40 14 -27 14 -27 14 28 21 69 9 90 29 85 81 -3 38 -4 39 -48 46 -25 3 -65 17 -90 30 l-45 25 3 66 4 67 -29 0 c-17 0 -33 -3 -36 -7z m37 -81 l-7 -69 41 -16 c22 -9 43 -21 47 -27 3 -5 26 -10 50 -10 48 0 60 -10 50 -40 -10 -30 -39 -41 -117 -43 -42 -1 -73 -7 -75 -13 -5 -16 25 -44 47 -44 28 0 112 -38 126 -58 12 -15 10 -20 -12 -39 -21 -19 -37 -23 -90 -23 -73 0 -71 3 -38 -77 11 -28 11 -35 -3 -48 -27 -28 -38 -11 -41 61 -3 68 -4 70 -33 81 -37 14 -34 39 4 35 23 -3 27 0 27 22 0 32 -30 49 -63 37 -28 -11 -37 -29 -37 -77 0 -29 -5 -36 -37 -49 -55 -23 -73 -13 -73 41 0 61 22 110 62 134 43 26 75 25 97 -2 11 -13 24 -19 34 -15 31 12 18 36 -33 62 -27 14 -50 29 -50 35 0 19 19 19 43 0 38 -30 57 -26 57 11 0 22 -5 32 -20 36 -11 3 -20 10 -20 15 0 5 9 12 20 15 16 4 20 14 20 47 0 50 9 86 21 86 5 0 6 -30 3 -68z m-134 -27 c14 -17 5 -72 -16 -96 -21 -24 -110 -63 -128 -56 -9 4 -16 15 -16 26 0 35 102 141 136 141 6 0 17 -7 24 -15z" />
              <path d="M1932 1298 c3 -29 7 -33 35 -36 18 -2 40 1 48 6 13 7 9 13 -22 35 -52 36 -65 35 -61 -5z" />
              <path d="M1937 1153 c-4 -3 -7 -17 -7 -29 0 -17 7 -25 24 -30 27 -6 66 3 66 15 0 22 -69 59 -83 44z" />
              <path d="M2506 1504 c-11 -29 -6 -82 10 -94 26 -23 37 -50 24 -65 -9 -11 -15 -10 -32 7 -16 16 -29 19 -59 15 -43 -6 -42 -7 -39 69 2 48 -16 67 -57 62 -28 -3 -28 -4 -27 -68 0 -36 4 -79 8 -96 7 -28 5 -32 -16 -37 -12 -4 -38 -19 -57 -34 -28 -24 -34 -37 -39 -81 -6 -66 7 -82 63 -82 29 0 47 6 60 20 17 18 20 19 28 5 5 -9 9 -42 9 -73 -1 -81 4 -92 39 -92 45 0 72 34 67 84 -5 38 -3 42 27 58 20 10 37 13 46 7 12 -7 11 -9 -2 -9 -26 0 -61 -57 -57 -93 3 -32 4 -32 61 -35 l57 -3 0 -35 c0 -35 1 -35 38 -32 32 3 37 7 40 30 3 22 9 27 35 30 28 3 32 7 35 36 2 18 -1 39 -6 45 -11 13 7 47 26 47 12 0 22 24 22 51 0 13 -12 25 -34 34 -41 17 -55 52 -22 57 17 2 21 10 21 37 0 31 -4 36 -32 43 -38 10 -42 31 -18 78 19 37 35 38 73 5 17 -14 39 -25 51 -25 36 0 28 55 -13 96 -31 31 -39 34 -94 34 -55 0 -62 -3 -86 -31 -14 -17 -26 -35 -26 -40 0 -26 -21 -3 -37 41 -16 46 -20 50 -49 50 -20 0 -34 -6 -38 -16z m68 -65 c9 -26 26 -55 36 -64 16 -14 17 -21 8 -32 -9 -11 -9 -16 3 -23 17 -11 27 10 28 58 1 45 33 88 70 95 37 8 96 -16 111 -43 l11 -20 -33 20 c-45 27 -73 25 -98 -7 -16 -21 -20 -38 -18 -77 3 -47 5 -50 36 -58 40 -11 41 -23 2 -37 -27 -9 -30 -13 -24 -38 9 -37 20 -50 49 -57 30 -8 33 -36 5 -43 -11 -3 -20 -12 -20 -19 0 -22 -37 -16 -43 6 -8 31 -37 25 -37 -7 0 -31 26 -63 50 -63 10 0 23 -6 29 -14 16 -19 -3 -31 -42 -28 -27 2 -28 1 -22 -28 6 -26 4 -30 -15 -30 -14 0 -20 5 -17 13 2 6 0 23 -4 36 -9 22 -13 23 -59 18 -47 -6 -50 -5 -50 17 0 33 43 70 74 64 23 -5 26 -2 26 25 0 24 -3 28 -20 24 -11 -3 -23 -1 -26 4 -8 14 -68 11 -90 -6 -18 -13 -54 -21 -54 -10 0 2 5 16 12 30 11 25 18 29 49 26 9 -1 24 10 33 23 10 16 22 23 31 20 10 -4 18 3 25 20 16 44 40 26 40 -30 0 -16 8 -28 23 -33 32 -13 40 1 26 47 -11 38 -16 42 -57 51 -32 6 -51 6 -63 -2 -10 -6 -21 -8 -25 -5 -8 8 32 75 48 80 14 5 -14 59 -44 88 -19 17 -20 23 -9 46 14 32 22 25 45 -37z m-192 -49 c5 -83 20 -121 33 -81 7 22 46 38 64 26 6 -3 16 -16 23 -28 10 -19 9 -20 -4 -9 -18 14 -31 3 -43 -38 -4 -14 -16 -32 -27 -41 -19 -15 -20 -20 -8 -70 7 -30 19 -63 26 -74 17 -24 18 -57 2 -73 -26 -26 -35 -11 -41 70 -9 109 -21 122 -75 78 -53 -42 -82 -36 -82 20 0 32 6 43 37 69 22 18 49 31 65 31 32 0 32 -3 1 112 -16 60 -13 88 10 88 11 0 16 -20 19 -80z m133 -144 c12 -12 11 -16 -4 -30 -23 -21 -45 -21 -37 0 3 9 6 22 6 30 0 18 17 18 35 0z" />
              <path d="M3143 1490 c-55 -11 -97 -34 -122 -66 -40 -51 -19 -114 38 -114 22 0 151 -37 151 -43 0 -1 -35 -2 -78 -3 -46 0 -89 -6 -107 -15 -26 -12 -30 -20 -30 -54 l0 -40 53 2 52 2 -35 -36 c-39 -40 -48 -64 -43 -114 3 -33 4 -34 52 -37 36 -2 54 -9 64 -23 19 -28 51 -23 110 17 66 44 86 86 77 155 -6 43 -4 52 19 80 28 33 36 99 14 117 -7 5 -40 13 -73 16 -33 4 -75 12 -93 17 l-33 11 43 21 c38 20 43 26 46 61 5 56 -13 64 -105 46z m81 -29 c12 -19 -6 -39 -55 -61 -27 -13 -49 -30 -49 -37 0 -20 54 -40 130 -48 72 -8 100 -19 100 -39 0 -7 -15 -34 -34 -60 -31 -43 -33 -51 -25 -92 11 -59 -9 -101 -65 -137 -51 -32 -57 -33 -78 -8 -13 15 -25 18 -56 14 -34 -5 -41 -2 -47 16 -14 44 62 131 115 131 9 0 23 6 29 14 19 22 -2 29 -93 30 -63 1 -81 5 -81 16 0 22 81 41 165 38 70 -3 75 -2 78 19 3 18 -6 25 -55 43 -32 13 -79 25 -105 28 -109 11 -83 95 39 128 59 16 80 17 87 5z" />
              <path d="M1522 838 c-14 -14 -16 -70 -3 -83 5 -6 29 -47 54 -92 33 -60 41 -83 31 -83 -29 0 -84 -54 -84 -81 0 -31 15 -39 77 -39 35 0 43 -3 36 -12 -19 -24 -44 -117 -41 -150 2 -26 8 -34 26 -36 32 -5 71 23 88 64 8 19 19 34 24 34 15 0 12 -11 -10 -48 -51 -83 10 -135 96 -81 45 27 64 56 64 97 0 20 4 31 10 27 6 -3 10 -15 10 -26 0 -17 6 -20 38 -17 l37 3 0 67 c1 37 4 70 8 74 4 4 7 18 7 30 0 37 -33 47 -130 41 -48 -3 -93 -1 -103 4 -25 14 -21 39 6 39 13 0 28 5 35 12 9 9 12 6 12 -15 0 -26 2 -27 55 -27 39 0 55 4 55 13 0 8 17 18 38 23 36 9 37 10 37 54 0 44 -1 45 -34 48 -23 2 -40 -3 -55 -17 -13 -12 -26 -18 -29 -14 -4 3 11 24 34 45 l41 39 33 -26 c82 -62 118 -6 45 67 -39 39 -42 40 -95 36 -36 -3 -66 -13 -85 -26 -36 -27 -40 -27 -40 -1 0 48 -30 70 -74 53 -20 -8 -21 -59 -2 -94 13 -23 12 -25 -18 -36 -17 -6 -38 -14 -47 -18 -13 -6 -24 10 -52 76 -29 67 -40 84 -59 86 -13 2 -29 -3 -36 -10z m62 -80 c30 -69 79 -145 109 -167 13 -9 17 -20 13 -37 -11 -41 24 -54 147 -54 83 0 108 -3 104 -12 -2 -9 -27 -13 -73 -14 -101 -1 -334 18 -334 27 0 13 65 59 83 59 10 0 17 6 17 14 0 16 -85 173 -107 198 -15 17 -12 48 5 48 5 0 21 -28 36 -62z m196 32 c0 -11 7 -37 16 -58 l15 -37 21 25 c31 39 70 60 108 60 36 0 91 -33 77 -46 -4 -4 -13 -2 -19 4 -27 27 -72 14 -123 -38 l-49 -49 38 -36 c40 -37 40 -55 0 -55 -15 0 -24 6 -24 16 0 9 -9 33 -19 53 -31 59 -71 152 -71 167 0 8 7 14 15 14 8 0 15 -9 15 -20z m-8 -127 c24 -21 23 -50 -1 -63 -32 -17 -58 -11 -76 16 -16 24 -16 27 1 45 21 23 51 24 76 2z m192 -9 c25 -10 19 -43 -8 -50 -14 -3 -32 -4 -41 -2 -15 3 -14 6 5 31 24 30 22 29 44 21z m-203 -220 c36 -12 69 -15 119 -11 l68 6 5 -42 c6 -45 3 -57 -18 -57 -7 0 -15 12 -17 28 -3 23 -8 27 -33 27 -26 0 -30 -4 -33 -30 -5 -59 -12 -74 -46 -94 -62 -38 -95 -21 -62 32 22 36 28 87 11 93 -26 10 -63 -5 -70 -29 -8 -24 -44 -67 -57 -67 -23 0 6 105 40 143 19 21 30 21 93 1z" />
              <path d="M2494 796 c-17 -8 -47 -31 -67 -51 -21 -21 -37 -32 -37 -24 0 8 -10 27 -23 42 -18 23 -32 29 -79 34 l-58 6 0 -37 c0 -24 5 -39 15 -43 17 -6 35 -36 64 -110 l19 -48 -47 3 c-34 3 -51 -1 -60 -12 -8 -9 -19 -16 -25 -16 -7 0 -25 -14 -42 -31 -26 -27 -29 -37 -29 -90 1 -50 5 -63 27 -85 39 -39 106 -44 156 -12 64 42 72 42 72 2 0 -27 5 -37 24 -45 40 -19 72 -3 107 51 22 33 39 50 53 50 28 0 90 22 110 39 9 8 16 28 16 47 0 48 -34 69 -97 59 -27 -4 -54 -12 -61 -18 -10 -8 -19 -4 -37 18 -18 24 -21 34 -13 55 12 32 65 87 101 106 26 14 31 13 63 -5 83 -49 104 2 33 83 -40 45 -42 46 -97 46 -32 -1 -71 -7 -88 -14z m-131 -100 l28 -58 28 44 c41 64 83 91 151 96 56 4 57 3 88 -34 41 -50 40 -58 -3 -33 -30 18 -39 19 -71 9 -47 -16 -115 -84 -132 -132 -13 -36 -12 -39 29 -97 48 -67 47 -83 -1 -149 -18 -25 -38 -42 -50 -42 -17 0 -20 7 -20 48 0 26 -5 54 -10 62 -8 12 -12 11 -32 -6 -51 -46 -103 -74 -140 -74 -31 0 -40 5 -57 34 -24 38 -27 83 -7 109 24 31 97 74 119 70 12 -2 37 -6 55 -9 l32 -6 -30 81 c-37 102 -45 116 -71 135 -33 23 -15 37 29 22 31 -10 42 -22 65 -70z m290 -214 c14 -15 14 -21 4 -34 -12 -15 -68 -38 -93 -38 -21 0 -27 39 -10 65 20 31 75 34 99 7z" />
              <path d="M6434 655 c-5 -21 -10 -23 -36 -18 -48 10 -65 -46 -32 -109 11 -22 13 -33 5 -41 -6 -6 -11 -25 -11 -42 0 -26 5 -33 35 -44 29 -10 35 -17 35 -41 0 -42 25 -62 74 -58 37 3 41 6 44 32 5 38 38 65 83 66 20 0 51 10 70 23 29 20 34 29 37 70 3 43 1 47 -23 53 -15 4 -44 2 -65 -5 -54 -16 -70 -14 -70 9 0 26 -26 78 -53 108 -30 32 -84 31 -93 -3z m102 -68 c13 -29 24 -63 24 -77 0 -39 11 -70 24 -70 6 0 22 7 35 17 22 15 23 17 7 29 -21 15 -12 21 41 30 45 7 58 -4 48 -36 -9 -27 -56 -50 -104 -50 -23 0 -43 -6 -48 -14 -4 -7 -17 -18 -29 -24 -16 -8 -20 -18 -16 -41 4 -26 1 -31 -16 -31 -23 0 -49 26 -32 32 25 8 -8 55 -50 72 -35 14 -40 19 -30 31 7 8 19 15 26 15 20 0 18 11 -16 63 -38 61 -27 104 15 57 20 -22 35 -18 35 11 0 11 5 29 10 40 16 29 47 7 76 -54z" />
              <path d="M6465 560 c-16 -18 -16 -20 4 -53 11 -19 18 -37 14 -40 -7 -8 15 -37 28 -37 14 0 10 77 -5 115 -8 19 -17 35 -19 35 -2 0 -12 -9 -22 -20z" />
              <path d="M6040 628 c0 -11 11 -36 25 -54 14 -18 25 -37 25 -43 0 -18 -33 -12 -75 14 -43 26 -94 32 -113 13 -14 -14 -16 -67 -3 -86 4 -8 19 -12 32 -11 13 2 45 -5 71 -15 64 -25 144 -18 170 14 40 50 13 151 -47 176 -52 21 -85 19 -85 -8z m92 -37 c25 -22 32 -36 32 -66 0 -25 -6 -42 -19 -51 -27 -20 -95 -17 -149 7 -26 11 -54 18 -62 15 -10 -4 -14 2 -14 19 0 37 15 38 73 5 57 -32 95 -38 115 -18 18 18 15 41 -13 82 -31 45 -10 49 37 7z" />
              <path d="M5506 617 c-20 -14 -31 -60 -41 -164 l-7 -73 35 0 c40 0 67 27 67 67 0 21 5 19 43 -22 42 -44 45 -45 105 -45 51 0 65 4 92 26 28 24 31 31 28 77 -4 67 -18 75 -99 56 -53 -13 -64 -19 -69 -40 -5 -21 -8 -18 -24 26 -41 112 -35 105 -75 105 -21 0 -45 -6 -55 -13z m92 -78 c26 -71 65 -119 97 -119 48 0 62 53 18 68 l-28 9 40 12 c56 16 73 14 80 -9 8 -26 -18 -74 -50 -88 -60 -27 -113 -2 -165 78 -36 57 -43 55 -55 -17 -6 -37 -29 -73 -40 -62 -2 3 0 40 4 83 6 65 11 82 31 98 12 10 28 17 34 15 6 -2 21 -32 34 -68z" />
              <path d="M6990 604 c0 -16 14 -42 35 -65 37 -41 45 -76 20 -85 -8 -3 -47 10 -87 30 -91 45 -154 49 -164 12 -3 -13 -4 -37 -2 -52 3 -26 8 -30 48 -35 25 -4 67 -14 94 -23 27 -9 77 -16 112 -16 52 0 68 4 91 24 25 22 28 31 28 83 -1 44 -6 66 -23 90 -23 32 -85 63 -127 63 -20 0 -25 -5 -25 -26z m118 -49 c39 -42 45 -102 13 -134 -36 -36 -85 -37 -185 -3 -60 21 -94 28 -102 21 -17 -14 -27 17 -14 42 15 26 29 24 102 -15 85 -45 124 -53 149 -30 10 9 19 26 19 36 0 24 -26 76 -54 107 l-21 24 30 -7 c17 -4 45 -22 63 -41z" />
            </g>
          </svg>
          <p>美しさと美味しさが一克（括）</p>
        </div>
      </div>
      <div className="wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1366 229.5"
          fill="#ddd"
        >
          <path
            d="M1369,6.3C1222.5-12.2,1189.5,8,919.2,96.6C665,179.8,160,141.7-2,53.1v150l1371-14.2V6.3z"
            opacity=".53"
          />
          <path d="M1369 229.5V55.8c-9.5-2.4-19.2-4.4-28.9-5.8-196.9-29.9-203.4-15.8-503.9 82.6-219.8 72-627.6 53.2-838.2-10.5v107.4h1371z" />
        </svg>
      </div>
    </section>
    <section className="food">
      <div className="container">
        <h2 className="bar">
          Menu<span>|一克のメニュー</span>
        </h2>
        <div className="details">
          <div className="detail">
            <figure>
              <Img fluid={data.food.childImageSharp.fluid} alt="" />
            </figure>
            <h3>食べ物</h3>
            <p>FOOD</p>
            <p>
              おすすめは「とりあし」
              <br />
              多種多様な食べ物をお楽しみください。
            </p>
          </div>
          <div className="detail">
            <figure>
              <Img fluid={data.drink.childImageSharp.fluid} alt="" />
            </figure>
            <h3>飲み物</h3>
            <p>DRINK</p>
            <p>
              アルコールを始め、
              <br />
              ソフトドリンクも充実しております。
            </p>
          </div>
          <div className="detail">
            <figure>
              <Img fluid={data.menu.childImageSharp.fluid} alt="" />
            </figure>
            <h3>テイクアウト</h3>
            <p>TAKEOUT</p>
            <p>
              おもちかえりもできます。
              <br />
              ご家族でお家で一克の味を楽しめます。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="photo">
      <h2 className="sr-only">店内の様子</h2>
      <figure>
        <Img
          fluid={data.shop.childImageSharp.fluid}
          alt="店内の様子"
          style={{ height: "100%" }}
        />
      </figure>
    </section>
    <section className="info">
      <div className="container">
        <h2 className="bar">
          INFO<span>|一克の情報</span>
        </h2>
        <div className="details">
          <div className="detail">
            <figure>
              <Img fluid={data.food.childImageSharp.fluid} alt="" />
            </figure>
            <h3>食べ物</h3>
            <p>FOOD</p>
            <p>
              おすすめは「とりあし」
              <br />
              多種多様な食べ物をお楽しみください。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="photo2">
      <h2 className="sr-only">店内の様子2</h2>
      <figure>
        <Img
          fluid={data.shop.childImageSharp.fluid}
          alt="店内の様子2"
          style={{ height: "100%" }}
        />
      </figure>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "food_sample5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    food: file(relativePath: { eq: "food_sample7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    drink: file(relativePath: { eq: "drink_sample.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    menu: file(relativePath: { eq: "ikkatsu_menu5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    shop: file(relativePath: { eq: "ikkatsu_table.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pattern: file(relativePath: { eq: "ikkatsu_pattern.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
