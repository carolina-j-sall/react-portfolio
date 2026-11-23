import Preview from "./Components/Preview";
import maskedSinger from "./assets/masked-omslag-w500xh300.png";
import ping from "./assets/ping-omslag-w500xh300.png";
import ssi from "./assets/ssi-omslag-w500xh300.png";

function App() {
  const maskedSingerTags = ["PHP", "Tailwind", "46elks API" ];

  return (
    <>
      <Preview image = {maskedSinger} title = "Masked singer" tags = {maskedSingerTags} />
      <Preview image = {ping} title = "Ping" tags = {maskedSingerTags} />
      <Preview image = {ssi} title = "Shared SMS Inbox" tags = {maskedSingerTags} />
    </>
  )
};

export default App
