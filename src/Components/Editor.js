import React from 'react'
import Addque from './Addque';
import Modifyque from './Modifyque';

function Editor(){
    return (
        <div className="edit">
            <Addque/>
            <Modifyque/>            
        </div>
    );
    
}


export default Editor;