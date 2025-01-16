 
 import React from "react";
 const DetailsTemplate = (props) =>{

const handleDelete = ()=>{
    props.handleDelete(props.index)
    }
  const detailsStyle = {
    backgroundColor: 'lightgray',
    
    overflow:'hidden',
    'text-align':'left',
    height: '100%',
    width: '100%',
    margin: '1px'

  };


  return (
    <div style={detailsStyle}>
      <h6>{props.index}</h6>
      <h3>{props.title}</h3>
      <h6>{props.desc}</h6>
      {
        props.index && <button onClick={handleDelete}>Complete Quest</button>

      }
      
    </div>
  );
};


export default DetailsTemplate;