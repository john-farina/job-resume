import TheLine from "./TheLine";
import CardOneIntroduce from "./CardOneIntroduce";
import CardTwoProjects from "./CardTwoProjects";
import CardThreeExperience from "./CardThreeExperience";
import CardFourLanguages from "./CardFourLanguages";

function MainPage() {
  return (
    <div id="card-container">
      <CardOneIntroduce />
      <TheLine />
      <CardTwoProjects />
      <TheLine />
      <CardThreeExperience />
      <TheLine />
      <CardFourLanguages />
    </div>
  );
}

export default MainPage;
