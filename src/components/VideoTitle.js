const VideoTitle = ({ original_title, overview }) => {
  console.log("original_title", original_title);

  return (
    <div className="pt-[20%] px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-6xl font-bold">{original_title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="mx-2 bg-white text-black p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
