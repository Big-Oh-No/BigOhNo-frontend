export default function MiniatureDiscussionCard(props) {
  return (
    <div
      className={`w-full h-full ${
        props.current === props.discussion.id
          ? "bg-dark-theme text-white"
          : "bg-white text-black"
      }  border border-black transition duration-200 hover:cursor-pointer hover:bg-dark-theme hover:opacity-90 hover:text-white flex flex-row items-center p-5 px-7 justify-between`}
      onClick={() =>
        props.onClick(
          props.discussion.id,
          props.discussion.title,
          props.discussion.date_created
        )
      }
    >
      <div className="flex flex-row items-center space-x-5">
        {props.discussion.author_pfp ? (
          <img
            className="w-[5rem] h-[5rem] rounded-full"
            src={props.discussion.author_pfp}
            alt="author_pfp"
          />
        ) : (
          <img
            className="w-[5rem] h-[5rem] rounded-full"
            src={require("../../../assets/pfp.png")}
            alt="author_pfp"
          />
        )}

        <div className="flex flex-col space-y-1">
          <div className="text-2xl font-semibold">{props.discussion.title}</div>
          <div className="text-xl">
            By{" "}
            <span className="font-semibold">
              {props.discussion.author_name}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl">{props.discussion.num_replies}</div>
        <div>Replies</div>
      </div>
    </div>
  );
}
