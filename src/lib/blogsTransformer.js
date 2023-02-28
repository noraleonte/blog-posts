const blogsTransformer = (blogs) =>
  blogs.map((blog) => {
    const wpTerm = blog._embedded['wp:term'].flat()
    const topicId = blog.topic[0] || blog.tags[0]
    const categoryId = blog.categories[0]

    const mainTopic = wpTerm.find((term) => term.id === topicId)?.name || ''
    const mainCategory =
      wpTerm.find((term) => term.id === categoryId)?.name || ''

    return {
      ...blog,
      mainTopic,
      mainCategory,
      _embedded: { ...blog._embedded, 'wp:term': wpTerm },
    }
  })

export default blogsTransformer
