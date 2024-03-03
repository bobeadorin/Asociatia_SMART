import "./ImgSectionStyles.css";

export default function ImgSection(props) {
  console.log(props.url);
  return (
    <div>
      <img
        className="reusable-img-component"
        src={props.url}
        alt="backgroundImg"
      />
    </div>
  );
}
