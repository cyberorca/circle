import React from 'react';
import './App.css'
import './style/Chat.css';
import './style/LoginForm.css'
import { useState } from 'react'
import Chat from './components/Chat';
import io from 'socket.io-client'
import { useGlobal } from './GlobalContext';
import AvatarSelectionForm from './components/AvatarSelectionForm';

const socket = io.connect("http://103.150.190.104:3001")
  //  const socket = io.connect("http://donikuntoro.my.id/backend")

function App() {

  const [nickname, setNickname] = useState("")
  const [avatar, setAvatar] = useState("https://i.pravatar.cc/150?u=0")
  const [room, setRoom] = useState("")
  const { globalVariable: showChat, setGlobalVariable: setShowChat } = useGlobal();
 
  const joinChat = () => {
    if(nickname === "" || room === "") {
      alert('Please input valid data')
    } else {
        const data = {
          room: room,
          avatar: avatar,
          username: nickname
        }
        socket.emit("join_chat", data)
        setShowChat(true)
    }
  }


  return (
    <div className="App">
      {showChat ? ( 
          <Chat socket={socket} avatar={avatar} nickname={nickname} room={room}></Chat>
      ) : (
        <div className="login-div" onLoad={(e)=>{
          const urlParams = new URLSearchParams(window.location.search);
          setNickname(urlParams.get('nick'))
          setRoom(urlParams.get('room'))
        }}>
          <img id='logo' src='logo.png' alt='LOGO'></img>
          <p id='join-message'>Welcome {nickname} !</p>
          <AvatarSelectionForm setAvatarImage={setAvatar}/>
          <button onClick={ joinChat } id='join-button'>Join</button>
      </div> 
      )
     }
    </div>
  );
}

export default App;
