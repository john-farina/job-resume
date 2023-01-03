import TheLine from "./TheLine";
import CardOneIntroduce from "./CardOneIntroduce";
import CardTwoProjects from "./CardTwoProjects";
import CardThreeExperience from "./CardThreeExperience";
import CardFourLanguages from "./CardFourLanguages";
import TwoProjects from "./TwoProjects";

function MainPage() {
  return (
    <div id="card-container">
      <CardOneIntroduce />
      <TheLine />
      {/* <TwoProjects /> */}
      <CardTwoProjects />
      <TheLine />
      <CardThreeExperience />
      <TheLine />
      <CardFourLanguages />
    </div>
  );
}

export default MainPage;
