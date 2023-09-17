import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { addMessage, getMessages } from "../../api/MessageRequests";
import { getUser } from "../../api/UserRequests";
import "./ChatBox.css";

const ChatBox = ({ chat,  setSendMessage,  receivedMessage, userId, receiver}) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleChange = (newMessage)=> {
    setNewMessage(newMessage.target.value)
  }

  useEffect(()=> {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  },[messages])

  const scroll = useRef();
  // fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await getMessages(chat._id);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) fetchMessages();
  }, [chat]);


//   // Send Message
  const handleSend = async(e)=> {
    if (newMessage!==null && newMessage!=='')
    {e.preventDefault()
      const message = {
        receiverId: receiver._id,
        senderId : userId,
        text: newMessage,
        chatId: chat._id,
    }
    const receiverId = chat.members.find((id)=>id!==userId);
    // send message to socket server
    setSendMessage({...message, receiverId})
    // send message to database
    try {
      const { data } = await addMessage(message);
      setMessages([...messages, data]);
      setNewMessage("");
    }
    catch
    {
      console.log("error")
    }}
}

// Receive Message from parent component
useEffect(()=> {
  console.log("Message Arrived: ", receivedMessage)
  if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
    console.log("im here")
    setMessages([...messages, receivedMessage]);
  }

},[receivedMessage])

  return (
    <>
    
    <div className="mt-2 rounded-xl bg-white px-6 py-3 shadow-2xl ">
        {chat ? (
          <>
            {/* chat-header */}
            
              <div className="">
                
                <div className='bg-blue-200 bordersolid my-2 rounded-t-md py-2 px-6 grid grid-cols-2'>
                    <div className="flex">
                        <div className="rounded-full bg-gray-500 w-20 h-20 justify-center flex items-center text-3xl"> {receiver?.firstname.slice(0,1)} </div>
                        <div className="flex-col p-3">
                            <h4 className="font-bold capitalize text-navy-700 dark:text-white text-2xl  "> {receiver?.firstname} {receiver?.lastname}</h4>
                            <h4 className="font-bold capitalize text-navy-600 dark:text-white text-xl "> {receiver?.club}</h4>
                        </div>
                    </div>
                </div>
              </div>
            {/* chat-body */}
            <div className="h-[400px] px-5 overflow-scroll" >
              {messages.map((message) => (
                <>
                   <div
                   ref={scroll}
                    className={message.senderId === userId ? 
                     "bg-yellow-200 p-3 my-3 rounded-tl-lg rounded-tr-lg rounded-bl-lg w-max flex ml-auto"
                    :"bg-blue-200 p-3 my-3 rounded-tl-lg rounded-tr-lg rounded-br-lg block w-max" 
                    }>
                  
                    <span>{message.text}</span>{" "}
                  </div>
                </>
              ))}
            </div>
            {/* chat-sender */}
            <div className="mb-4 pt-4 shadow-xl border-solid border-7 flex">
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 w-full rounded-md border-4 px-3 py-3 border-blue-300 focus:outline-none"
                value={newMessage}
                onChange={handleChange}
                placeholder="Type a message"
                required
              />
              <button className="ml-3 mt-2 px-8 bg-navy-500 rounded-md text-white font-bold" onClick={handleSend}> Send</button>
            </div>
          </>
        ) : (
          <span className="chatbox-empty-message">
            Tap on a chat to start conversation...
          </span>
        )}
      </div>
    </>
  );
};

export default ChatBox;
