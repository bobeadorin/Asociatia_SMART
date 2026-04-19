/* eslint-disable react/prop-types */
import "./ImgSectionStyles.css";

export default function ImgSection(props) {
  return (
    <div>
      <img className="reusable-img-component" src={props.url} alt="backgroundImg" />
    </div>
  );
}
