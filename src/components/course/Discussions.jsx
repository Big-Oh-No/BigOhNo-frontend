import React, { useState } from "react";

export default function Discussions() {
  const [discussions, setDiscussions] = useState([]);
  const [newDiscussionText, setNewDiscussionText] = useState("");
  const [replyText, setReplyText] = useState(""); // State to hold reply text

  const handleNewDiscussionChange = (event) => {
    setNewDiscussionText(event.target.value);
  };

  const handleNewDiscussionSubmit = (event) => {
    event.preventDefault();
    if (newDiscussionText.trim() !== "") {
      const newDiscussion = {
        id: discussions.length + 1,
        text: newDiscussionText,
        replies: [],
      };
      setDiscussions([...discussions, newDiscussion]);
      setNewDiscussionText("");
    }
  };

  const handleReplyChange = (event) => {
    setReplyText(event.target.value);
  };

  const handleReplySubmit = (event, discussionId) => {
    event.preventDefault(); // Prevent default form submission
    if (replyText.trim() !== "") {
      const updatedDiscussions = discussions.map((discussion) => {
        if (discussion.id === discussionId) {
          return {
            ...discussion,
            replies: [...discussion.replies, replyText],
          };
        }
        return discussion;
      });
      setDiscussions(updatedDiscussions);
      setReplyText(""); // Clear reply text after submission
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-5xl font-semibold">Discussion Portal</h2>
      <div className="space-y-4">
        {discussions.map((discussion) => (
          <div key={discussion.id} className="border p-4 rounded">
            <p className="font-semibold">{discussion.text}</p>
            {discussion.replies.length > 0 && (
              <ul className="mt-2">
                {discussion.replies.map((reply, index) => (
                  <li key={index}>{reply}</li>
                ))}
              </ul>
            )}
            <form
              className="mt-2"
              onSubmit={(event) => handleReplySubmit(event, discussion.id)}
            >
              <input
                type="text"
                value={replyText}
                onChange={handleReplyChange}
                className="p-2 w-full "
                placeholder="Write a reply..."
                required
              />
              <button
                type="submit"
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Reply
              </button>
            </form>
          </div>
        ))}
      </div>
      <form className="mt-8" onSubmit={handleNewDiscussionSubmit}>
        <textarea
          value={newDiscussionText}
          onChange={handleNewDiscussionChange}
          className="border p-4 w-full text-lg" 
          rows="4"
          placeholder="Start a new discussion..."
          required
        ></textarea>
        <div className=" w-[50%] pt-4">
          <div className="flex items-center justify-center w-[40%] rounded-full border-black font-inter text-2xl bg-dark-theme font-semibold hover:cursor-pointer py-3 hover:bg-light-theme border border-transparent hover:border-black text-white hover:text-black transition duration-500 hover:scale-105 select-none">
            <button type="submit">Start Discussion</button>
          </div>
        </div>
      </form>
    </div>
  );
}
