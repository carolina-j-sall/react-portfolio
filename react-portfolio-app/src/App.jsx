import "./index.css"
import Preview from "./Components/Preview";
import Project from "./Components/Project";
import maskedSinger from "./assets/masked-omslag-w500xh300.png";
import ping from "./assets/ping-omslag-w500xh300.png";
import ssi from "./assets/ssi-omslag-w500xh300.png";

function App() {
  const maskedSingerTags = ["PHP", "Tailwind", "46elks API" ];
  const pingTags = ["Figma", "Notion"];
  const ssiTags = ["HTML", "Tailwind", "CSS", "Javascript"];
  const msDesc = "Ever wondered what goes on behind the scenes when you vote in a TV show? The production company FremantleMedia, behind the hit TV show Masked Singer, uses SMS to collect votes in their program.";
  return (
    <>
      <Preview image = {maskedSinger} title = "Masked singer" tags = {maskedSingerTags} desc = {msDesc} />
      <Preview image = {ping} title = "Ping" tags = {pingTags} desc = "How can one create a new, independent business branch within communication, targeting an entirely new audience? That was the central question behind Ping Communication – a product concept we developed." />
      <Preview image = {ssi} title = "Shared SMS Inbox" tags = {ssiTags} desc = "How do you create an overview and efficient communication with customers via SMS when multiple team members need to read, respond to, and manage incoming messages? Let's take a look." />
      <hr/>
      <Project image = {maskedSinger} title = "Masked Singer" desc = {msDesc} role = "Product designer" tags = {maskedSingerTags} link = "https://carolinajsall.se/portfolio-projects/voting-solution-for-the-tv-show-masked-singer/" challenges = "Challenge 1, Challenge 2" text = "The audience coordinator in the production can prepare a question during the first part of the episode. All they have to do is to go in to the SMS voting platform and create their SMS question before it needs to go out to the panel. This is what it will look like when you enter the SMS platform, you’ll get asked to create a SMS campaign straight away." lessons = "The voting functioned smoothly throughout the remainder of the 2024 season and was used in several episodes. Fremantle was so satisfied with our assistance that they reached out for a follow-up the following year, where we received another assignment from them to further develop the service together. That’s when Eja Höglund joined as a developer and was able to give the solution a facelift in the form of a more thoughtful UI and UX."/>
    </>
  )
};

export default App
