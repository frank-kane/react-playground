 
 import React from "react";
 const QuestTemplate = (props) =>{

  const questStyle = {
    backgroundColor: 'lightgray',
    border: 'solid 1px black',
    overflow:'hidden',
    'textAlign':'center',
    width: 'calc(25% - 5px)',
    height: '100px',
    margin: '1px'

  };

  const handleClick = ()=>{
    props.handleClick(props.index,props.title,props.desc)
  }

  return (
    <div style={questStyle} onClick={handleClick}>
      <h6>{props.index}</h6>
      <h3>{props.title}</h3>
      <h6>{props.desc}</h6>
    </div>
  );
};


export default QuestTemplate;