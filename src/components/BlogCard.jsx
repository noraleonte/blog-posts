import { Card, Link } from '@canonical/react-components'
import pluralize from 'pluralize'

import getFormattedDate from '../lib/getFormattedDate'

const BlogCard = ({ blog }) => (
  <Card highlighted className="border-top-dark u-equal-height">
    <p className="p-text--x-small-capitalised u-sv1">{blog.mainTopic}</p>
    <hr className="hr-dotted" />
    <img className="p-card__image" src={blog.featured_media}></img>
    <Link className="u-full-height">
      <p className="p-heading--4 color-teal u-sv-1" style={{ fontWeight: 400 }}>
        {blog.title.rendered}
      </p>
    </Link>
    <div className="card-footer">
      <p>
        <i>
          By <span className="color-teal">{blog._embedded.author[0].name}</span>{' '}
          on {getFormattedDate(blog.date)}
        </i>
      </p>
      <hr className="hr-dotted" />
      <p className="p-text--x-small" style={{ fontWeight: 500 }}>
        {pluralize.singular(blog.mainCategory)}
      </p>
    </div>
  </Card>
)

export default BlogCard
