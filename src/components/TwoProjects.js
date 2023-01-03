import ProjectViewer from "./ProjectViewer";
import pic1 from "../img/magib8ball.png";
import pic2 from "../img/premiere.png";
import pic3 from "../img/rails.png";
import pic4 from "../img/ableton.jpeg";

export default function TwoProjects() {
  const soundScapeData = {
    title: "soundScapes",
    detailedDesc:
      "this website was created using Rails very long text blah blah nice wow oop slong lolol this website was created using Rails very long text blah blah nice wow oop slong lolol this website was created using Rails very long text blah blah nice wow oop slong lolol this website was created using Rails very long text blah blah nice wow oop slong lolol this website was created using Rails very long text blah blah nice wow oop slong lolol this website was created using Rails very long text blah blah nice wow oop slong lolol ",
    imgArray: [pic1, pic2, pic3, pic4],
  };

  return (
    <div className="cardProj2">
      <div className="cardBack backing"></div>
      <div className="project">
        <ProjectViewer
          title={soundScapeData.title}
          imgArray={soundScapeData.imgArray}
          description={soundScapeData.detailedDesc}
        />
        <ProjectViewer
          title={"another one"}
          imgArray={soundScapeData.imgArray}
          description={"blah blah"}
        />
      </div>
    </div>
  );
}
