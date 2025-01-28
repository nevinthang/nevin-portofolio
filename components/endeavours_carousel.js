const EndeavorsCard = ({ imageUrl, title, description, projectLink }) => {
  return (
    <div className="card">
      <div className="imagebox">
        <img
          src={imageUrl} // Path to the image
          alt={title} // Alt text for accessibility
        />
      </div>
      <div className="content bg-gradient-to-r from-gray-700 to-background text-text">
        <h3 className="text-text">{title}</h3>
        <p className="text-text">{description}</p>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};

export default EndeavorsCard;
