import Preview from "../Components/Preview";
import maskedSinger from "../assets/masked-omslag-w500xh300.png"
import ping from "../assets/ping-omslag-w500xh300.png";
import ssi from "../assets/ssi-omslag-w500xh300.png";

function Home () {
  const maskedSingerTags = ["PHP", "Tailwind", "46elks API" ];
  const pingTags = ["Figma", "Notion"];
  const ssiTags = ["HTML", "Tailwind", "CSS", "Javascript"];
  const msDesc = "Ever wondered what goes on behind the scenes when you vote in a TV show? The production company FremantleMedia, behind the hit TV show Masked Singer, uses SMS to collect votes in their program.";
  return (
    <div>
      <h2>Home page</h2>
      <Preview image = {maskedSinger} title = "Masked singer" tags = {maskedSingerTags} desc = {msDesc} />
      <Preview image = {ping} title = "Ping" tags = {pingTags} desc = "How can one create a new, independent business branch within communication, targeting an entirely new audience? That was the central question behind Ping Communication – a product concept we developed." />
      <Preview image = {ssi} title = "Shared SMS Inbox" tags = {ssiTags} desc = "How do you create an overview and efficient communication with customers via SMS when multiple team members need to read, respond to, and manage incoming messages? Let's take a look." />
      <hr/>
    </div>
  )
}

export default Home;
