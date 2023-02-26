import { Card, Link } from '@canonical/react-components'
import { format } from 'date-fns'

const BlogCard = ({ blog }) => {
  return (
    <Card>
      <p className="p-text--x-small-capitalised">{blog.mainTopic}</p>
      <hr className="hr-dotted" />
      <img className="p-card__image" src={blog.featured_media}></img>
      <Link>
        <p className="p-heading--4 color-teal" style={{ fontWeight: 400 }}>
          {blog.title.rendered}
        </p>
      </Link>
      <p>
        <i>
          By <span className="color-teal">{blog._embedded.author[0].name}</span>{' '}
          on {format(new Date(blog.date), 'd MMMM yyyy')}
        </i>
      </p>
      <hr className="hr-dotted" />
      <p className="p-text--x-small" style={{ fontWeight: 500 }}>
        {blog.mainCategory}
      </p>
    </Card>
  )
}

export default BlogCard
