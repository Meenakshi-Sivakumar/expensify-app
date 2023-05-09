import React from 'react';

const EditExpensePage = (props) =>{
    console.log(props)
    return(
    <div>
    Editing the data with id {props.match.params.page}
    </div>
);
};

export default EditExpensePage;