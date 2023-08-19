import React from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import { useEffect,useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';


const News =(props)=> {
const [articles,setArticles]=useState([])


const [loading,setLoading]=useState(true)
const [page,setPage]=useState(1)
const [totalResults,setTotalResults]=useState(0)


const changePage=async()=>{
    
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=baef44df3e354398b0cfbf436a66fe19&page=
    ${page}
    &pageSize=${props.pageSize}`;
    setLoading( true );
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    
  }
  useEffect(()=>{
    changePage(); 
  },[])

   
  
  const fetchMoreData = async ()=>{
    setPage(page+1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=baef44df3e354398b0cfbf436a66fe19&page=${
      page
    }&pageSize=${props.pageSize}`;
   
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat( parsedData.articles));
    setTotalResults(parsedData.totalResults);
    

  }
 
    return (
      <>
        <h1 className="text-center mt-5">Balleri News -Top HeadLines</h1>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 20) : ""}
                  description={
                    element.description ? element.description.slice(0, 60) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  
                />
              </div>
             
              
                  
            );
          })}
           </div>
        </div>
        </InfiniteScroll>
      
      </>
    );
  }

News.defaultProps={
  country : 'us',
  pageSize: 7,
  category: 'general'
  

}
News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}

export default News;
