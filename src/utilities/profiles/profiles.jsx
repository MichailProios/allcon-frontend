import React from "react";

// function importAll(r) {
//   let images = {};
//   r.keys().forEach((item, index) => {
//     images[item.replace("./", "")] = r(item);
//   });
//   return images;
// }

import pic from "../images/Logos/logo-new.png";
import george from "../images/temp/2-7-2022-74.jpg";
import markos from "../images/temp/2-7-2022-59.jpg";
import joseph from "../images/temp/josephgrant.JPG";
import nick from "../images/temp/nickgiannikouris.jpg";
import ahmed from "../images/temp/ahmed.jpg";

export const profiles = [
  {
    link: "/About/GeorgeProios",
    picture: george,
    title: "George Proios",
    subtitle: "President of Operations",
    description: (
      <>
        George received his BA in Economics and Business from UMASS Boston and
        his MBA from the Arthur D. Little Management Education Institute. During
        that time, he learned from leading consultants how to build a top-notch
        team and lead the way with innovation and proactive team management.
        <br />
        <br />
        From 1995 to 2000 he worked for the NYC Board of Education where he
        gained experience in complex project management, budgeting and the ins
        and outs of how various agencies operate and function.
        <br />
        <br />
        Prior to joining ALLCON he worked at MAA as a project manager.
        Throughout those 8 years he worked on a variety complex projects and
        gained the construction experience that supplemented and strengthened
        his management expertise.
        <br />
        <br />
        In 2009 George joined All-Con Contracting as a partner. With his
        well-rounded experience in construction, administration, finance and
        staff and project management, he was able to help build a knowledgeable,
        efficient, and effective team of managers that helped advance All-Con to
        be a respected leader in the construction industry. With his leadership
        ALLCON has advanced a corporate culture of trust from our client as well
        as our employees ranks is one of the most important aspects and has
        proven to be one of the true successes of the organization.
      </>
    ),
  },
  {
    link: "/About/MarkoBistakis",
    picture: markos,
    title: "Marko Bistakis",
    subtitle: "President of Administration and Marketing",
    description: (
      <>
        Since founding ALLCON Contracting in 2001, Marko has grown the company
        from a small renovations company to a General Contracting company
        working on numerous high-profile projects for both public and private
        clients throughout the Tri State area. His unwavering dedication to
        maintaining solid client relationships, delivering superior projects,
        and providing exceptional customer service was molded from his
        experiences working at the age of twelve with his father John at
        Bistakis Corp. on weekends and summer vacations. During that time, Marko
        eagerly absorbed all the rudiments of the construction business as well
        as character building qualities of a good work ethic, honesty,
        integrity, and the importance of delivering a finished product.
        <br />
        <br />
        As the CEO and partner of ALLCON Contracting Corp, Marko Bistakis is
        responsible for running all facets of administration and marketing of
        the business. He has a proven executive track record with over twenty
        years of experience in construction and knows that every component of
        the business from estimating, project management, client contact and
        human resources are responsible for both corporate and project success.
        <br />
        <br />
        His insistence on exceptional quality and service has surely fulfilled
        the dream of his father, "Build it once. Build it right".
      </>
    ),
  },
  {
    link: "/About/JosephGrant",
    picture: joseph,
    title: "Joseph Grant",
    subtitle: "Executive",
    description: (
      <>
        Joseph received his bachelor’s degree from the New York Institute of
        Technology and has almost 30 years of experience in architecture,
        construction management and general contracting. He is a registered
        Architect in eight states and has been involved in some of NYC’s largest
        projects.
        <br />
        <br />
        Prior to joining ALLCON, he was a Senior Vice President at The LiRo
        Group where he directed all architecture activities and coordinated
        select construction management endeavors.
        <br />
        <br />
        He was a Senior Construction Manager at Lend Lease responsible for
        Interior Construction on the $1billion + 432 Park Avenue high-rise
        mixed-use building before joining LiRo.
        <br />
        <br />
        Prior to this, during his tenure at Davis Brody Bond, Joseph was the
        managing architect for the World Trade Center Memorial and Museum as
        well as Columbia University’s Manhattanville Phase I Campus development
        project. Joseph received the AIA Presidential Citation and Delta
        Recognition for his work on the 9/11 Memorial and Museum
      </>
    ),
  },
  {
    link: "/About/NikolaosGiannikouris",
    picture: nick,
    title: "Nikolas Giannikouris",
    subtitle: "Senior Project Manager",
    description: (
      <>
        Nick earned his Bachelor of Architecture Degree from The New York
        Institute of Technology. After earning his degree, Nick began managing a
        wide range of construction projects including restoration and
        construction projects for NYC Public Schools as well as an extensive
        amount of experience with Local Law 1198 compliance jobs. He is a
        licensed New York City Building Construction Superintendent and has OSHA
        30, NYC Building Public Safety, NYC DOB Support Scaffold and Aerial Work
        Platform Safety Certifications. Nick is experienced in planning,
        coordinating, and executing assignments and has become a highly
        effective project leader with an excellent reputation for timely, safe,
        and cost-effective project delivery.
      </>
    ),
  },
  {
    link: "/About/AhmedBassiouny",
    picture: ahmed,
    title: "Ahmed M Bassiouny",
    subtitle: "Senior Project Manager",
    description: (
      <>
        Ahmed received his Bachelor of Science in Civil Engineering from
        Alexandria University in Egypt and Project Management Diploma from North
        Carolina State University. After earning his degree, Ahmed began his
        career in construction as a project cost estimator where he obtained a
        unique insight in the interconnection of quality, cost, and project
        management play in the success of any given project. He has extensive
        experience working with public agents such as the State University of
        New York, New York State Office of General Services, and the Long Island
        Railroad just to name a few. As a Project Manager at ALL*Con, Ahmed has
        established a proven track record of success on a variety of public and
        private client projects and has because a key part of our Senior
        Management Team.
      </>
    ),
  },
  {
    link: "/About/MohamedElaasser",
    picture: pic,
    title: "Mohamed Elaasser",
    subtitle: "Senior Project Manager",
    description: "",
  },
];

export default profiles;
