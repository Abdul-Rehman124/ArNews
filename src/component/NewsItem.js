import React from "react";

const NewsItem = (props) => {

  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div className="my-4">
      <a></a><div className="card">

        <img
          src={
            !imageUrl
              ? "https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-success"
          >
            Read more...
          </a>
          <p className="card-text"><small className="text-muted">Written by {!author ? "anonymous" : author} on <strong>{new Date(date).toTimeString()}</strong></small></p>
        </div>
      </div>
    </div>
  );
}


export default NewsItem;
