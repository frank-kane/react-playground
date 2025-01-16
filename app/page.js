
"use client"
import { useState } from "react";
import QuestTemplate from "./QuestTemplate";
import DetailsTemplate from "./DetailsTemplate";
import { getDatabase,addQuestToDatabase,deleteQuestFromDatabase } from "./database";
export default function Home() {
const [name,setName] = useState("Kane");
const [quests, setQuests] = useState([]);
const [details, setDetails] = useState({});
const [message, setMessage] = useState("Default Message");
const [messages, setMessages] = useState([]);
const [showMessage, setShowMessage] = useState(false);

const handleNewNotification = (notification)=>{
  console.log(notification);
  setMessage(notification);
  setMessages([...messages, notification]);
  setShowMessage(true);
  setTimeout(() => {
    setShowMessage(false);
  }, 3000); 
}

const addQuest = () => {
  
  const title = prompt('Add new Quest:');
  const desc = prompt('Description:');
  const index = quests.length+1;
  if (title) {
    const quest = { index, title, desc };
    setQuests([...quests, quest]);
  }
  handleNewNotification(`Added New Quest: ${index}: ${title}:${desc}`);
  addQuestToDatabase(title, desc)
};

const deleteQuest = (index) => {
  handleNewNotification(`Performing Delete Quest: ${index}`);
  const newQuestList = quests.filter((item) => item.index !== index);
  setQuests(newQuestList);
  setDetails({});
  deleteQuestFromDatabase(index)
};

const handleSetDetails = (index, title, desc) => {
  handleNewNotification('Performing Set Details');
  setDetails({index,title,desc })
  
};

const bookHolder = {
  border: 'solid 2px black',
  padding: '5px',
  display: 'grid',
  'grid-template-columns': '50% 50%',


}

const questHolder = {

  display: 'flex',
  'flex-wrap': 'wrap',
  border: 'solid 1px black',
  padding: '10px',
  height: '70vh',
  width: '45vw',
  'text-align': 'center'
}

const detailPage = {
  border: 'solid 1px black',
  padding: '3px',
  height: '70vh',
  width: '47vw'
}

const notification ={
  'text-align':'center',
  'color':'red',
  position: 'fixed', /* Keeps the element in place even when scrolling */
  top: '10px', /* Adjust as needed */
  right: '10px', /* Adjust as needed */
  'z-index': '1000' /* Ensures it stays above other content */

};

const notificationshow ={
  'text-align':'center',
  position: 'absolute',
  margin:'25%',
opacity: 1
}


  return (
    <div >
      <h1>{name}</h1>
      {showMessage && <h3 style={notification}>{message}</h3>}

      <button onClick={()=> addQuest()}>Add Quests</button>
      <div style={bookHolder}>

      
      <div style={questHolder}>
      {quests.map((item,index)=>(
        <QuestTemplate key={index} index = {item.index} title = {item.title} desc = {item.desc} handleClick = {handleSetDetails}/>
      ))}
      </div>

      <div style={detailPage}>
      <DetailsTemplate
        index = {details.index}
        title = {details.title}
        desc = {details.desc}
        handleDelete = {deleteQuest}
      />
      </div>
      </div>      
    </div>
  );
}
