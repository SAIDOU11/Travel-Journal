const Place = (props) => {
  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props;
  return (
    <>
      <div className="container">
        <div className="img">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="info-container">
          <div className="place">
            <p>
              <i
                style={{ fontSize: '1.1rem', color: '#F55A5A' }}
                class="fa-solid fa-location-dot"
              ></i>
            </p>
            <p className="location">{location}</p>
            <p className="google-map">View on Google Maps</p>
          </div>
          <div className="info-place">
            <h1>{title} </h1>
            <p className="date">
              {startDate} - {endDate}
            </p>
            <p className="description">{description}</p>
          </div>
        </div>
      </div>
      <hr className="hr-line" />
    </>
  );
};

export default Place;
