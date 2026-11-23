import "./Preview.css"

function Preview (props) {
  function createTag (tag) {
    return (
      <span className="previewTag" key={tag}>
        {tag}
      </span>
    )
  }

   return (
		<div className="previewCard">
			<img src={props.image} alt="profile picture icon" className="previewImg"/>
			<p className="previewTags">{props.tags.map(createTag)}</p>
      <h2 className="previewTitle">{props.title}</h2>
			<p className="previewDesc">{props.desc}</p>
      <button className="btn previewBtn">Read more</button>
		</div>
	)
};

export default Preview
