import PageNotFound from "../components/PageNotFound";

// Component to display the page not found page
export default function NotFound() {
  return (
    <div className="flex flex-row-reverse w-screen h-screen">
        <div className="relative h-full w-[70%]">
        <img
        src={require("../assets/page_notfound.png")}
        alt="404 Page"
        className="absolute top-20 right-0 h-full w-full -mr-60 "
      />
        </div>
        <div className="h-full w-[50%]">
            <PageNotFound/>
        </div>
    </div>
  );
}
