import React from 'react'

const Alert = ({alert}) => {
  return (
    alert!=null && <div className={`alert alert-${alert.type}`}>
        <i className='fab fa-info-circle' />{alert.message}
         </div>
  )
}

export default Alert
