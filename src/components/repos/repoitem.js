import React from 'react'
import PropTypes from 'prop-types'

const repoitem = ({repo}) => {
    
  return (
    <div className='card'>
      <a href={repo.html_url}>{repo.name}</a>
    </div>
  )
}
repoitem.propTypes={
    repo:PropTypes.object.isRequired,
}
export default repoitem
