import React, { useRef, useState } from "react";
import ChatBox from "../../../components/ChatBox/ChatBox";
import "./Chat.css";
import { useEffect } from "react";
import { findChat, userChats } from "../../../api/ChatRequests";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { useLocation, useNavigate } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const socket = useRef();
  // const { user } = useSelector((state) => state.member.data);
  const [userid, setUserId] = useState();
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState({_id:'850578211aed00100df0986d' ,members:['650578211aed00100df0986d', '750578211aed00100df0986d']});
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  const location = useLocation()
  const [receiver, setReciever] = useState();
  // Get the chat in chat section
  useEffect( () => {

    const uid = localStorage.getItem('id');
    if(uid === null)
    {
      navigate('/')
    }
    setUserId(uid)
    setReciever(location.state?.member)
  }, [userid]);
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await findChat(userid, receiver._id);
        setCurrentChat(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [userid]);
  // Connect to Socket.io
  useEffect(() => {
    socket.current = io("ws://localhost:8800");
    socket.current.emit("new-user-add", userid);
  }, [userid]);

  // Send Message to socket server
  useEffect(() => {
    if (sendMessage!==null ) {
      socket.current.emit("send-message", sendMessage);}
  }, [sendMessage]);


 // Get the message from socket server
 useEffect(() => {
  socket.current.on("recieve-message", (data) => {
    console.log(data)
    setReceivedMessage(data);
  }

  );
}, []);


  return (
   
      <div>
       
        <ChatBox
          chat={currentChat}
          currentUser={userid}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
          userId = {userid}
          // user = {user}
          receiver={receiver}
        />
      </div>
  );
};

export default Chat;
