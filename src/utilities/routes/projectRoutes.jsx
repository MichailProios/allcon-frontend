import React from "react";
import ProjectPage from "../../components/ProjectPage/ProjectPage";
import projects from "../projects/projects.jsx";

export const projectRoutes = [];

projects.map(
  (
    {
      link,
      pictures,
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
