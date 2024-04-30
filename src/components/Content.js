import React from 'react'
import ContentList from './ContentList'
import './Content.css';


function Content({props}){
    return(
      
        <div className='contents'>
            
        <ContentList props={props} />
        </div>
    )

}
export default Content