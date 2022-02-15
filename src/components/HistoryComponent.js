import { History } from '@/pages/Content/components'
import React from 'react'

import PropTypes from 'prop-types'


export default function HistoryComponent({history = []}) {
    
  return (
    <History id='history'>
       <p style={{textAlign:"center"}}>History</p> 
       <div style={{marginTop:10}}>
           {
               history.map((elem,i)=><p key={elem + i} style={{marginBottom:15}}>{elem}</p>)
           }
       </div>
    </History>
  )
}

HistoryComponent.propTypes = {
  history: PropTypes.array,
}
