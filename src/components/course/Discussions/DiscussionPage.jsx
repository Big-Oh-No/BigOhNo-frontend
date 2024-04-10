import { useState, useEffect, useRef } from "react";
import Message from "./Messages/Message";

export default function DiscussionPage(props) {
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  function formatDate(dateString) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = new Date(dateString);

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${hours}:${minutes} ${month} ${day}, ${year}`;
}

  const sendMessage = async (e) => {
    const data = JSON.parse(localStorage.getItem("AuthCookie"));
    console.log(e);
    console.log(props.discussion.id);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/discussion/send/${props.discussion.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data["email"],
            password: data["password"],
            content: e,
          }),
        }
      );

      if (response.status === 201) {
        setMessage("");
        props.update(props.discussion.id, props.discussion.title, props.discussion.date_created);
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert("Something went wrong!");
      return;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [props.discussion.history]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-5xl w-full h-[10%] flex items-center font-semibold justify-between px-5">
        <div>{props.discussion.title}</div>{" "}
        <div className="text-2xl">{formatDate(props.discussion.date_created)}</div>
      </div>
      {/* Messages Area */}
      <div className="h-[80%] overflow-y-auto">
        <div className="h-full flex flex-col" style={{ marginBottom: "auto" }}>
          {props.discussion.history.map((e) => (
            <Message message={e} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="h-[10%] w-full flex flex-row items-center justify-around px-5">
        <input
        placeholder="Type a message..."
          className="w-[90%] text-xl px-[1rem] rounded-xl border-black border py-[1rem] shadow-lg bg-dark-theme bg-opacity-15 text-black"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && message.trim() !== "") {
              sendMessage(message);
            }
          }}
        />
        <div
          className="bg-dark-theme hover:bg-black transition duration-200 hover:cursor-pointer text-white text-2xl p-[1rem] rounded-xl"
          onClick={() => sendMessage(message)}
        >
          Send →
        </div>
      </div>
    </div>
  );
}
