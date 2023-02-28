import { Col, Row } from '@canonical/react-components'
import { useEffect, useRef, useState } from 'react'

import blogsTransformer from '../lib/blogsTransformer'
import BlogCard from './BlogCard'

const CardGrid = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const shouldFetch = useRef(true)

  useEffect(() => {
    if (shouldFetch.current) {
      fetch('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts')
        .then((res) => res.json())
        .then((data) => setData(blogsTransformer(data)))
        .catch((error) => {
          console.error('Something went wrong while fetching', error)
          setIsError(true)
        })
        .finally(setIsLoading(false))

      shouldFetch.current = false
    }
  }, [])

  if (isError) {
    return (
      <Row>
        <p>Something went wrong while fetching</p>
      </Row>
    )
  }

  return (
    <Row>
      {isLoading || !data ? (
        <p>Loading...</p>
      ) : (
        data.map((blog) => (
          <Col size={4} key={blog.id}>
            <BlogCard {...{ blog }} />
          </Col>
        ))
      )}
    </Row>
  )
}

export default CardGrid
