import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home(articles) {
  // console.log(articles)

  return (
    <div style={{textAlign:"center"}}>
      <div> 
      <h1><span style={{color:"#333333"}}>Code</span><span style={{color:"#57a0d3"}}>Musica</span> </h1>
      </div>
      {articles.articles.map((article)=>(
        <h3>{article.title}</h3>
      ))}

    </div>
  )
}
export const getStaticProps = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json()
  return{
    props:{
      articles
    }
  }
}
