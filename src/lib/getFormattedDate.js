const getFormattedDate = (dateStr) => {
  const date = new Date(dateStr)

  return `${date.getDate()} ${date.toLocaleDateString('en-US', {
    month: 'long',
  })} ${date.getFullYear()}`
}

export default getFormattedDate
