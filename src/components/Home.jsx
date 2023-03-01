import FetchComponent from "./fetchsongs";

function Home() {
  return (
    <>
      <div className="songsss">
        <h3>THE YUNG ROCK</h3>
        <FetchComponent key={Date.now()} query="yungblud" />
        <h3>IDOLS</h3>
        <FetchComponent key={Date.now()} query="prince" />
        <h3>OUT OF LINE</h3>
        <FetchComponent key={Date.now()} query="michael jackson" />
      </div>
    </>
  );
}

export default Home;
