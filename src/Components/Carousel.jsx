import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carousel = () => {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={1000}
      className="h-10 bg-black"
      buttons={false}
      bullets={false}
    >
      <div>{"Machine Learning"}</div>
      <div>{"Artificial Intelligence"}</div>
      <div>{"Data Science"}</div>
    </AutoplaySlider>
  );
};

export default Carousel;
