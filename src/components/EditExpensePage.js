import React from 'react';

const EditExpensePage = (props) =>{
    console.log(props)
    return(
    <div>
    Editing the data with id {props.match.path}
    </div>
)}

export default EditExpensePage;