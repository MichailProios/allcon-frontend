import React from "react";

// function importAll(r) {
//   let images = {};
//   r.keys().forEach((item, index) => {
//     images[item.replace("./", "")] = r(item);
//   });
//   return images;
// }

const pic =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Logos/logo-new.png";
const george =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-24.jpg";
const markos =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-19.jpg";

const joseph =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-23.jpg";
const nick =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-16.jpg";
const ahmed =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-28.jpg";
const sandra =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-14.jpg";
const tina =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-13.jpg";
const wahid =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-12.jpg";
const ana =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-27.jpg";

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
        gained experience in complex project management, budgeting, and the ins
        and outs of how various agencies operate and function.
        <br />
        <br />
        Prior to joining ALL•CON he worked at MAA as a project manager.
        Throughout those 8 years he worked on a variety of complex projects and
        gained construction experience that supplemented and strengthened his
        management expertise.
        <br />
        <br />
        In 2009 George joined ALL•CON Contracting as a partner. With his
        well-rounded experience in construction, administration, finance, and
        staff and project management, he was able to help build a knowledgeable,
        efficient, and effective team of managers. This helped advance ALL•CON
        to be a respected leader in the construction industry. With his
        leadership, ALL•CON has created a corporate culture of trust from our
        clients as well as our employees.
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
        Since founding ALL•CON Contracting in 2001, Marko has grown the company
        from a small renovations company to a General Contracting company. He
        has worked on numerous high-profile projects for both public and private
        clients throughout the Tri State area. His unwavering dedication to
        maintaining solid client relationships, delivering superior projects,
        and providing exceptional customer service was molded from his
        experiences at a young age. He worked at the age of twelve with his
        father John at Bistakis Corp. on weekends and summer vacations. During
        that time, Marko eagerly absorbed all the rudiments of the construction
        business as well as character building qualities of good work ethic,
        honesty, integrity, and the importance of delivering a finished product.
        <br />
        <br />
        As the CEO and partner of ALL•CON Contracting Corp, Marko Bistakis is
        responsible for running all facets of administration and marketing of
        the business. He has a proven executive track record with over twenty
        years of experience in construction and knows that every component of
        the business, from estimating, project management, client contact and
        human resources, are responsible for both corporate and project success.
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
        Joseph received his bachelors degree from the New York Institute of
        Technology and has almost 30 years of experience in architecture,
        construction management, and general contracting. He is a registered
        architect in eight states and has been involved in some of NYCs largest
        projects.
        <br />
        <br />
        Prior to joining ALL•CON, he was a Senior Vice President at The LiRo
        Group where he directed all architecture activities and coordinated
        select construction management endeavors.
        <br />
        <br />
        He was a Senior Construction Manager at Lend Lease, responsible for
        Interior Construction on the $1billion + 432 Park Avenue high-rise
        mixed-use building, before joining LiRo.
        <br />
        <br />
        Prior to this, during his tenure at Davis Brody Bond, Joseph was the
        managing architect for the World Trade Center Memorial and Museum, as
        well as Columbia University’s Manhattanville Phase I Campus development
        project. Joseph received the AIA Presidential Citation and Delta
        Recognition for his work on the 9/11 Memorial and Museum.
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
        Institute of Technology. Nick then began managing a wide range of
        construction projects. These include restoration and construction
        projects for NYC Public Schools as well as an extensive amount of work
        with Local Law 1198 compliance jobs. He is a licensed New York City
        Building Construction Superintendent and has certifications in OSHA 30,
        NYC Building Public Safety, NYC DOB Support Scaffold and Aerial Work
        Platform Safety. Nick is experienced in planning, coordinating, and
        executing assignments and has become a highly effective project leader
        with an excellent reputation for timely, safe, and cost-effective
        project delivery.
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
        management which played a role in his current success. He has extensive
        experience working with public agents such as the State University of
        New York, New York State Office of General Services, and the Long Island
        Railroad just to name a few. As a Project Manager at ALL•CON, Ahmed has
        established a proven track record by efficiently completing a variety of
        public and private projects. He has become a key player of our Senior
        Management Team.
      </>
    ),
  },
  {
    link: "/About/MohamedElaasser",
    picture: pic,
    title: "Mohamed Elaasser",
    subtitle: "Senior Project Manager",
    description: (
      <>
        Mohamed earned his Bachelor of Science in Civil Engineering from
        Alexandria University in Egypt. After earning his degree, Mohamed began
        managing a wide range of construction projects throughout the world
        including Dubai, Muscat and New York. Since he joined ALL•CON he has
        contributed greatly to our team. He has applied his high-level project
        management experience, with emphasis on construction detail and quality
        control.
      </>
    ),
  },
  {
    link: "/About/SandraDias",
    picture: sandra,
    title: "Sandra Dias",
    subtitle: "Office Manager",
    description: (
      <>
        Since joining ALL•CON in 2015 Sandra has developed effective and
        efficient intra-office communications protocols. As Office Manager, she
        utilizes her organizational skills to streamline our administrative
        procedures, increase our efficiency and enhance the company’s safety
        protocols.
      </>
    ),
  },
  {
    link: "/About/TinaRichusa",
    picture: tina,
    title: "Tina Richusa",
    subtitle: "Office Administrator",
    description: (
      <>
        In 2018 Tina joined ALL•CON in charge of day-to-day activities to
        support our employees and ensure client satisfaction. Tina makes sure
        ALL•CON staff have all the necessary tools and resources required to
        assure our projects are always delivered with top quality.
      </>
    ),
  },
  {
    link: "/About/StavrosGiannopoulos",
    picture: pic,
    title: "Stavros Giannopoulos",
    subtitle: "Staff Accountant",
    description: (
      <>
        Stavros runs the Accounting Department at ALL•CON and is responsible for
        overseeing all activities from maintaining and reviewing all financial
        accounts and statements to preparing financial reporting. Since 2014, he
        has been assisting with all financial audits, developing budgeting
        procedures for ALL•CON and maintaining and reconciling yearly accounts.
      </>
    ),
  },
  {
    link: "/About/WahidWahab",
    picture: wahid,
    title: "Wahid Wahab",
    subtitle: "Senior Estimator",
    description: (
      <>
        Wahid earned his Bachelor of Science in Construction Management from
        SUNY Farmingdale. As Senior Estimator Wahid is responsible for preparing
        all cost estimates for planned construction projects. In 2019, he was
        brought into the ALL•CON family because of his ability to work closely
        with owners’ representatives, designers, vendors, and subcontractors to
        best determine the overall cost of a project and generate quality
        takeoffs. His ability to keep up to date with current technologies and
        construction methodologies is a critical component to ALL•CON being able
        to provide accurate and precise project pricing.
      </>
    ),
  },
  {
    link: "/About/AnaVillarrubia",
    picture: ana,
    title: "Ana Villarrubia",
    subtitle: "Estimator",
    description: (
      <>
        Ana received her Bachelor of Science in Construction
        Management/Engineering Technology from SUNY Farmingdale. She joined
        ALL•CON in 2020 and has become a vital member of the Estimating Team.
        Her proficiency in AUTOCAD, Procore, and Bluebeam, along with an eye for
        detail and the ability to read blueprints, gives her a unique capability
        to perform accurate project takeoffs and generate qualified bids.
      </>
    ),
  },
];

export default profiles;
