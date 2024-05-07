import React from 'react';

const BlogEntry = ({ imageUrl, date, author, comments, title, link, readMoreLink }) => {
  return (
    <div className="col-lg-4">
      <div className="blog-entry">
        <a href={link} className="block-20" style={{ backgroundImage: `url('${imageUrl}')` }}>
        </a>
        <div className="text d-block">
          <div className="meta">
            <p>
              <a href="#"><span className="fa fa-calendar mr-2"></span>{date}</a>
              <a href="#"><span className="fa fa-user mr-2"></span>{author}</a>
              <a href="#" className="meta-chat"><span className="fa fa-comment mr-2"></span>{comments}</a>
            </p>
          </div>
          <h3 className="heading"><a href={link}>{title}</a></h3>
          <p><a href={readMoreLink} className="btn btn-secondary py-2 px-3">Read more</a></p>
        </div>
      </div>
    </div>
  );
};

export default BlogEntry;
