export default function Loading() {
    return <div className="h-screen w-screen bg-white flex flex-col justify-center items-center">
         <img
        src={require("../../assets/loading.gif")}
        alt="loading..."
      />
      <div className="text-5xl">Loading...</div>
    </div>
}