import PageNotFound from "../components/PageNotFound";

export default function NotFound() {
  return (
    <div className="flex flex-row-reverse w-screen h-screen">
        <div className="relative h-full w-[50%]">
        <img
        src={require("../assets/page_notfound.png")}
        alt="404 Page"
        className="absolute bottom-7"
      />
        </div>
        <div className="h-full w-[50%]">
            <PageNotFound/>
        </div>
    </div>
  );
}
