import React from "react";

import projects from "../projects/projects.jsx";
import ProjectPage from "../../components/ProjectPage/ProjectPage";

export const projectRoutes = [];

projects.map(
  (
    {
      link,
      pictures,
      quality,
      projectName,
      projectLocation,
      clientAffiliatedAgency,
      yearCompleted,
      projectCostBudget,
      projectDesigner,
      description,
    },
    key
  ) =>
    projectRoutes.push({
      path: link,
      component: (
        <ProjectPage
          pictures={pictures}
          quality={quality}
          projectName={projectName}
          projectLocation={projectLocation}
          clientAffiliatedAgency={clientAffiliatedAgency}
          yearCompleted={yearCompleted}
          projectCostBudget={projectCostBudget}
          projectDesigner={projectDesigner}
          description={description}
          key={key}
        />
      ),
    })
);

export default projectRoutes;
