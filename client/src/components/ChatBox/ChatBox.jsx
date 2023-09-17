import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { addMessage, getMessages } from "../../api/MessageRequests";
import { getUser } from "../../api/UserRequests";
import "./ChatBox.css";

const ChatBox = ({
  chat,
  setSendMessage,
  receivedMessage,
  userId,
  receiver,
}) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleChange = (newMessage) => {
    setNewMessage(newMessage.target.value);
  };

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
  const handleSend = async (e) => {
    if (newMessage !== null && newMessage !== "") {
      e.preventDefault();
      const message = {
        receiverId: receiver._id,
        senderId: userId,
        text: newMessage,
        chatId: chat._id,
      };
      const receiverId = chat.members.find((id) => id !== userId);
      // send message to socket server
      setSendMessage({ ...message, receiverId });
      // send message to database
      try {
        const { data } = await addMessage(message);
        setMessages([...messages, data]);
        setNewMessage("");
      } catch {
        console.log("error");
      }
    }
  };

  // Receive Message from parent component
  useEffect(() => {
    console.log("Message Arrived: ", receivedMessage);
    if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
      console.log("im here");
      setMessages([...messages, receivedMessage]);
    }
  }, [receivedMessage]);

  return (
    <>
      <div className="mt-2 rounded-xl bg-white px-6 py-3 shadow-2xl ">
        {chat ? (
          <>
            {/* chat-header */}

            <div className="">
              <div className="bordersolid my-2 grid grid-cols-2 rounded-t-md bg-blue-200 px-6 py-2">
                <div className="flex">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-500 text-3xl">
                    {" "}
                    {receiver?.firstname.slice(0, 1)}{" "}
                  </div>
                  <div className="flex-col p-3">
                    <h4 className="text-2xl font-bold capitalize text-navy-700 dark:text-white  ">
                      {" "}
                      {receiver?.firstname} {receiver?.lastname}
                    </h4>
                    <h4 className="text-xl font-bold capitalize text-navy-600 dark:text-white ">
                      {" "}
                      {receiver?.club}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            {/* chat-body */}
            <div className="h-[400px] overflow-scroll px-5">
              {messages.map((message) => (
                <>
                  <div
                    ref={scroll}
                    className={
                      message.senderId === userId
                        ? "my-3 ml-auto flex w-max rounded-bl-lg rounded-tl-lg rounded-tr-lg bg-yellow-200 p-3"
                        : "my-3 block w-max rounded-br-lg rounded-tl-lg rounded-tr-lg bg-blue-200 p-3"
                    }
                  >
                    <span>{message.text}</span>{" "}
                  </div>
                </>
              ))}
            </div>
            {/* chat-sender */}
            <div className="border-7 mb-4 flex border-solid pt-4 shadow-xl">
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 w-full rounded-md border-4 border-blue-300 px-3 py-3 focus:outline-none"
                value={newMessage}
                onChange={handleChange}
                placeholder="Type a message"
                required
              />
              <button
                className="ml-3 mt-2 rounded-md bg-navy-500 px-8 font-bold text-white"
                onClick={handleSend}
              >
                {" "}
                Send
              </button>
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
