import "./Project.css";

function Project (props) {
  function createTag (tag) {
    return (
      <span className="projectTag" key={tag}>
        {tag}
      </span>
    )
  }

  return (
    <article className="projectArticle">
      <img src={props.image} alt="screenshot of project" className="projectFullImg"/>
      <div className="projectContainer">
        <h1 className="projectTitle">{props.title}</h1>
        <p className="projectDesc">{props.desc}</p>
        <aside className="projectDetails">
          <p className="projectRole">Role: {props.role}</p>
          <p className="projectTags">{props.tags.map(createTag)}</p>
          <a src={props.link} targer="_blank" className="projectLink">
            <button className="btn projectBtn">Project link</button></a>
        </aside>
        <p className="projectChallenges">{props.challenges}</p>
        <p className="projectText">{props.text}</p>
        <p className="projectLessons">{props.lessons}</p>
      </div>
    </article>
  )
}

export default Project
