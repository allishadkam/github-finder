import React from 'react'
import Repoitem from './repoitem'
import PropTypes from 'prop-types'

const repos = ({repos}) => {
  return (
    repos.map(repo=>(<Repoitem key={repo.id} repo={repo} />))
  )
}

repos.propTypes={
    repos:PropTypes.array.isRequired,
}
export default repos
