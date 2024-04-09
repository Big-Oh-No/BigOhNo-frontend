import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import DiscussionCard from "./DiscussionCard";
import MiniatureDiscussionCard from "./MiniatureDisscussionCard";
import DiscussionPage from "./DiscussionPage";

import DiscussionCardModel from "../../../models/discussion_card";
import MessageModel from "../../../models/message";

export default function Discussions(props) {
  useEffect(() => init, []);
  const [discussions, setDiscussions] = useState([]);
  const [discussionId, setDiscussionId] = useState("none");
  const [discussion, setDiscussion] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const init = async () => {
    const data = JSON.parse(localStorage.getItem("AuthCookie"));

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/discussion/${props.data.meta.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data["email"],
            password: data["password"],
          }),
        }
      );

      if (response.status === 200) {
        const response_json = await response.json();
        let discussion_array = [];
        for (let i = 0; i < response_json.length; ++i) {
          const curreent_discussion = new DiscussionCardModel({
            id: response_json[i].id,
            title: response_json[i].title,
            num_replies: response_json[i].num_replies,
            date_created: response_json[i].date_created,
            author_name: response_json[i].author_name,
            author_pfp: response_json[i].author_pfp,
          });
          discussion_array.push(curreent_discussion);
        }
        setDiscussions(discussion_array);
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert("Something went wrong!");
      return;
    }
  };

  const cardClickHandler = async (id, title, date) => {
    const data = JSON.parse(localStorage.getItem("AuthCookie"));

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/discussion/message/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data["email"],
            password: data["password"],
          }),
        }
      );

      if (response.status === 200) {
        const response_json = await response.json();
        let message_array = [];
        for (let i = 0; i < response_json.length; ++i) {
          const curreent_message = new MessageModel({
            id: response_json[i].id,
            message: response_json[i].message,
            upvotes: response_json[i].upvotes,
            date_created: response_json[i].date_created,
            author_name: response_json[i].author_name,
            author_pfp: response_json[i].author_pfp,
          });
          message_array.push(curreent_message);
        }
        setDiscussion({
          id: id,
          title: title,
          date_created: date,
          history: message_array,
        });
        setDiscussionId(id);
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert("Something went wrong!");
      return;
    }
  };
  
  const createDiscussion = async () => {
    const data = JSON.parse(localStorage.getItem("AuthCookie"));
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/discussion/create/${props.data.meta.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data["email"],
            password: data["password"],
            title: title,
            content: message
          }),
        }
      );

      if (response.status === 201) {
        setMessage("");
        setTitle("");
        init();
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert("Something went wrong!");
      return;
    }
  }

  return (
    <div className="w-screen h-screen">
      <div className="text-5xl font-semibold font-inter pt-10 w-full pl-10 pb-10 bg-dark-theme z-20 text-white fixed">
        Discussion Board
      </div>
      {discussionId === "none" ? (
        <div className="pt-52 flex flex-col w-full p-5 px-10 space-y-2 mb-10 items-center overflow-scroll bg-light-theme">
          {discussions.map((e) => (
            <div className="w-[70%] px-10 h-32">
              <DiscussionCard discussion={e} onClick={cardClickHandler} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-row w-full h-full">
          <div className="w-[75%] h-full pt-32">
            <DiscussionPage discussion={discussion} update={cardClickHandler} />
          </div>
          <div className="pt-32 flex flex-col w-[25%] overflow-scroll bg-light-theme">
            {discussions.map((e) => (
              <div className="w-full h-32">
                <MiniatureDiscussionCard
                  discussion={e}
                  current={discussionId}
                  onClick={cardClickHandler}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="fixed bottom-5 right-10 w-20 h-20 text-2xl bg-black hover:opacity-75 transition duration-200 hover:cursor-pointer rounded-full flex justify-center items-center text-white" onClick={() => setShowAdd(!showAdd)}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
      {showAdd ? <div className="absolute z-10 bottom-28 right-5 flex flex-col p-5 rounded-xl bg-white shadow-lg space-y-2">
        <div className="text-2xl">Create Discussion</div>
        <div className="h-2"></div>
        
        <label className="text-xl">Discussion Title</label>
        <input className="border-2 border-black rounded-lg p-2" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <div className="h-2"></div>

        <label className="text-xl">Message</label>
        <input className="border-2 border-black rounded-lg p-2" value={message} onChange={(e) => setMessage(e.target.value)}/>
        <div className="h-5"></div>
        <div className="p-2 bg-black text-center rounded-lg text-white hover:cursor-pointer transition duration-200 hover:bg-opacity-75" onClick={createDiscussion}>Post</div>
        </div> : <></>}
    </div>
  );
}
