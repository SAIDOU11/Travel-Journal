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
    <div>
      <div className="img">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};

export default Place;
