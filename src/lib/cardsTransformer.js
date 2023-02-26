const cardsTransformer = (cards) => {
  console.log(cards.map((card) => card.id))
  const hei = cards.map((card) => {
    const wpTerm = card._embedded['wp:term'].flat()
    const topicId = card.topic[0] || card.tags[0]
    const categoryId = card.categories[0]

    const mainTopic = wpTerm.find((term) => term.id === topicId)?.name || ''
    const mainCategory =
      wpTerm.find((term) => term.id === categoryId)?.name || ''

    return {
      ...card,
      mainTopic,
      mainCategory,
      _embedded: { ...card._embedded, 'wp:term': wpTerm },
    }
  })
  console.log(hei)
  return hei
}

export default cardsTransformer
