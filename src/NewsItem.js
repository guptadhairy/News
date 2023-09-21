import React from 'react'

const NewsItem = (props)=> {


    let { title, imageUrl, description, newsUrl, author, date } = props;
    return (
      <div className='my-3'>
        <div className="card meri2">
          <img src={!imageUrl ? "https://cdn.zeebiz.com/sites/default/files/2022/12/26/218112-flipkart.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} at {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
