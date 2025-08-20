import "../Css/Home.css";
import image from "../Images/image-nature.jpg";


export default function Home() {
  return (
    <div className="background-image">
      <div className="text-homepage">
        <p>Welcome! </p>
        Check out the features: <strong> Forecast </strong>
         and <strong> Budget </strong>
         that you can make your planning your trip
        easier.
      </div>
    </div>
  );
}