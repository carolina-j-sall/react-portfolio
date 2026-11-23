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
			<h2 className="previewTitle">{props.title}</h2>
      <p className="previewTags">{props.tags.map(createTag)}</p>
			<p className="previewDesc">This is a description</p>
		</div>
	)
};

export default Preview
