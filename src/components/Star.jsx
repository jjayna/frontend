import "../assets/Star.css";

const Star = () => {
  const starStyle = {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 3 + 1}s`,
    animationDelay: `${Math.random() * 3}s`,
  };

  return <div className="star" style={starStyle}></div>;
};

export default Star;
