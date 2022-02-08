import React from "react";
import ProfilePage from "../../components/ProfilePage/ProfilePage";
import profiles from "../profiles/profiles.jsx";

export const profileRoutes = [];

profiles.map(({ link, picture, title, subtitle, description }, key) =>
  profileRoutes.push({
    path: link,
    component: (
      <ProfilePage
        picture={picture}
        title={title}
        subtitle={subtitle}
        description={description}
        key={key}
      />
    ),
  })
);

export default profileRoutes;
