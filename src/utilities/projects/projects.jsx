import React from "react";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export const projects = [
  {
    link: "/Projects/LuptonHall",
    pictures: importAll(
      require.context(
        "D:/Websites/Pictures/Projects/lupton-hall",
        false,
        /\.(JPG|PNG|png|jpe?g|svg)$/
      )
    ),
    projectName: "SUNY Lupton Hall",
    projectLocation: "2350 Broadhollow Road, Farmingdale, NY 11735",
    clientAffiliatedAgency: "NYS OGS – Design & Construction Group",
    yearCompleted: "In Progress",
    projectCostBudget: "$10,856,274.00",
    projectDesigner: "Hoffmann Architects, Inc.",
    description: (
      <>
        ALLCON constructed this uniquely designed 90,000sf copper roof which now
        transforms Lupton Hall into a landmark for the SUNY Farmingdale Campus.
        ALLCON proposed and helped developed a distinctive structural design
        during the initial removal and abatement stages of the project. The
        structural design included a high gauge metal framing system that
        bypasses the concrete deck and attaches to the existing framing
        structure with blind bolts. Craftsmanship is found throughout the roof
        from the artfully fabricated dormers to the carefully sculpted gutter
        system designed to withstands wind speed up to 126 mph. ALLCON made sure
        that the copper fabrication was a mix of machine fabrication for the
        panels to control cost and hard created units for the fine intricate
        detail work. This inspiration assignment is not just a showcase project
        for ALLCON but a signature piece of work for Farmingdale’s dedication to
        excellence on campus.
      </>
    ),
  },
  {
    link: "/Projects/SaintDemetriosChurch",
    pictures: importAll(
      require.context(
        "D:/Websites/Pictures/Projects/stdemetrios",
        false,
        /\.(JPG|PNG|png|jpe?g|svg)$/
      )
    ),
    projectName: "Saint Demetrios Greek Orthodox Church",
    projectLocation:
      "2 Annette Ave, 12 Annette Ave, 127 Hewlett Ave Merrick, NY 11566",
    clientAffiliatedAgency: "South Nassau Hellenic Community Inc.",
    yearCompleted: "2020",
    projectCostBudget: "$59,500.00",
    projectDesigner: "N/A",
    description: (
      <>
        As part of a multiphase project for Saint Demetrios Greek Orthodox
        Church, AllCon was selected as the General Contractor for the first
        phase. AllCon performed the demolition and site clearing/preparation of
        existing adjacent houses and garages acquired by the church to expand
        its site and it service to the South Nassau Hellenic Community.
      </>
    ),
  },
  {
    link: "/Projects/Nold",
    pictures: importAll(
      require.context(
        "D:/Websites/Pictures/Projects/nold",
        false,
        /\.(JPG|PNG|png|jpe?g|svg)$/
      )
    ),
    projectName: "SUNY Farmingdale Nold Hall Gymnasium",
    projectLocation: "2350 Broadhollow Road, Farmingdale, NY 11735",
    clientAffiliatedAgency: "State University Construction Fund",
    yearCompleted: "2017",
    projectCostBudget: "$2.5M",
    projectDesigner: "Peter Gisolfi Associates",
    description: (
      <>
        AllCon was selected by the State University Construction Fund to
        transform Nold Hall’s Gymnasium for the State University of New York
        College of Technology at Farmingdale. The work was completed within the
        occupied structure and was sequenced to minimize impact of the schools’
        operations. AllCon carefully demolished the existing sports floor,
        bleacher systems, sports equipment and press box as well as removed
        unsuitable fill materials below the existing slab. They worked with the
        design team to install a new recessed slab to contain a state-of-the-art
        wood and urethane sports flooring system. The new floors accommodate the
        variety of sports that take place in the facility from basketball,
        volleyball and track. AllCon provided modifications to the existing
        sprinkler system and electrical upgrade to accommodate the revised gym
        layout and upgraded sports equipment installed. As part of the contract
        work AllCon installed native landscaping and a decorative concrete
        walkway and plaza that rejuvenates Nold Hall’s Main Entry.
      </>
    ),
  },
  {
    link: "/Projects/500Bridgewater",
    pictures: importAll(
      require.context(
        "D:/Websites/Pictures/Projects/500brightwater",
        false,
        /\.(JPG|PNG|png|jpe?g|svg)$/
      )
    ),
    projectName:
      "Brighton Houses Inc. – Alterations Associated to Superstorm SANDY",
    projectLocation: "500 Brightwater Court, Brooklyn, NY 11235",
    clientAffiliatedAgency: "NYC Housing Preservation & Development",
    yearCompleted: "2019",
    projectCostBudget: "$15M",
    projectDesigner: "Purcell Architects P.C.",
    description: (
      <>
        Located along the boardwalk of Brighton Beach Brooklyn and just 300 feet
        from the Ocean waters, this project was required as a result of sever
        damages incurred during Superstorm Sandy. AllCon constructed two 3,000
        sf infrastructure building additions on top of the existing parking
        structure/ promenade to house the facilities new boilers, hot water
        heaters, electrical services, and new generator system. This 18 story,
        192-unit apartment building for the elderly was fully occupied during
        construction and required extensive coordination between ALLCON and the
        construction manager. Complete window and balcony door replacement was
        required as well as over 15,000 sf of built-up roofing and 35,000 sf of
        unit pavers throughout the building. Through close collaboration with
        the CM and building occupants ALLCON was able to complete this project
        ahead of schedule.
      </>
    ),
  },
  {
    link: "/Projects/Bareburger",
    pictures: importAll(
      require.context(
        "D:/Websites/Pictures/Projects/bareburger",
        false,
        /\.(JPG|PNG|png|jpe?g|svg)$/
      )
    ),
    projectName: "Bareburger 1681 East 87th Street",
    projectLocation: "1681 East 87th Street",
    clientAffiliatedAgency: "N/A",
    yearCompleted: "N/A",
    projectCostBudget: "N/A",
    projectDesigner: "N/A",
    description: (
      <>
        Complete new build out of restaurant. Work consisted of demolition,
        rough carpentry, painting new ceilings, flooring, bathrooms, new
        kitchen, and exhaust, plumbing and electric.
      </>
    ),
  },
  {
    link: "/Projects/WilsonAnimal",
    pictures: importAll(
      require.context(
        "D:/Websites/Pictures/Projects/willstonanimal",
        false,
        /\.(JPG|PNG|png|jpe?g|svg)$/
      )
    ),
    projectName: "Williston Animal Hospital",
    projectLocation: "N/A",
    clientAffiliatedAgency: "N/A",
    yearCompleted: "N/A",
    projectCostBudget: "N/A",
    projectDesigner: "N/A",
    description: (
      <>
        Complete interior renovation. Work included demolition, carpentry,
        tiles, flooring rough carpentry, painting, electrical, plumbing, and
        HVAC.
      </>
    ),
  },
  {
    link: "/Projects/255West",
    pictures: importAll(
      require.context(
        "D:/Websites/Pictures/Projects/255w",
        false,
        /\.(JPG|PNG|png|jpe?g|svg)$/
      )
    ),
    projectName: "255 West 108th Street",
    projectLocation: "N/A",
    clientAffiliatedAgency: "N/A",
    yearCompleted: "N/A",
    projectCostBudget: "N/A",
    projectDesigner: "N/A",
    description: <>Work consisted of exterior renovation Local Law 11.</>,
  },
  {
    link: "/Projects/20East",
    pictures: importAll(
      require.context(
        "D:/Websites/Pictures/Projects/20east9th",
        false,
        /\.(JPG|PNG|png|jpe?g|svg)$/
      )
    ),
    projectName: "20 East 9th Street",
    projectLocation: "N/A",
    clientAffiliatedAgency: "N/A",
    yearCompleted: "N/A",
    projectCostBudget: "N/A",
    projectDesigner: "N/A",
    description: <>Work consisted of exterior renovation Local Law 11.</>,
  },
  {
    link: "/Projects/UpperEastVetenary",
    pictures: importAll(
      require.context(
        "D:/Websites/Pictures/Projects/uppereastveterinary",
        false,
        /\.(JPG|PNG|png|jpe?g|svg)$/
      )
    ),
    projectName: "Upper East Side Veterinary Hospital",
    projectLocation: "N/A",
    clientAffiliatedAgency: "N/A",
    yearCompleted: "N/A",
    projectCostBudget: "N/A",
    projectDesigner: "N/A",
    description: (
      <>
        Complete interior renovation. Work included demolition, carpentry,
        tiles, flooring rough carpentry, painting, electrical, plumbing, and
        HVAC.
      </>
    ),
  },
  {
    link: "/Projects/CarlePlaceAuditorium",
    pictures: importAll(
      require.context(
        "D:/Websites/Pictures/Projects/carlplace",
        false,
        /\.(JPG|PNG|png|jpe?g|svg)$/
      )
    ),
    projectName: "Carle Place UFSD – Auditorium Renovations",
    projectLocation: "N/A",
    clientAffiliatedAgency: "N/A",
    yearCompleted: "N/A",
    projectCostBudget: "N/A",
    projectDesigner: "N/A",
    description: (
      <>
        Interior renovation of existing Auditorium, Work included complete
        demolition, carpentry, concrete work, new wall and ceiling paneling and
        system. Painting and complete finish work.
      </>
    ),
  },
  {
    link: "/Projects/CarlePlaceLobby",
    pictures: importAll(
      require.context(
        "D:/Websites/Pictures/Projects/carlplacelobby",
        false,
        /\.(JPG|PNG|png|jpe?g|svg)$/
      )
    ),
    projectName: "Carle Place UFSD – Lobby Renovations",
    projectLocation: "N/A",
    clientAffiliatedAgency: "N/A",
    yearCompleted: "N/A",
    projectCostBudget: "N/A",
    projectDesigner: "N/A",
    description: <>N/A</>,
  },
  {
    link: "/Projects/CarlePlaceLibrary",
    pictures: importAll(
      require.context(
        "D:/Websites/Pictures/Projects/carlplacelibrary",
        false,
        /\.(JPG|PNG|png|jpe?g|svg)$/
      )
    ),
    projectName: "Carle Place UFSD – Library Renovations",
    projectLocation: "N/A",
    clientAffiliatedAgency: "N/A",
    yearCompleted: "N/A",
    projectCostBudget: "N/A",
    projectDesigner: "N/A",
    description: <>N/A</>,
  },
  {
    link: "/Projects/NewJerseyVeterinary",
    pictures: importAll(
      require.context(
        "D:/Websites/Pictures/Projects/njvet",
        false,
        /\.(JPG|PNG|png|jpe?g|svg)$/
      )
    ),
    projectName: "New Jersey Veterinary Hospital",
    projectLocation: "N/A",
    clientAffiliatedAgency: "N/A",
    yearCompleted: "N/A",
    projectCostBudget: "N/A",
    projectDesigner: "N/A",
    description: (
      <>
        Complete interior renovation. Work included demolition, carpentry,
        tiles, flooring rough carpentry, painting, electrical, plumbing, and
        HVAC.
      </>
    ),
  },
  {
    link: "/Projects/HudsonAnimalHospital",
    pictures: importAll(
      require.context(
        "D:/Websites/Pictures/Projects/hudsonanimal",
        false,
        /\.(JPG|PNG|png|jpe?g|svg)$/
      )
    ),
    projectName: "Hudson Animal Hospital",
    projectLocation: "N/A",
    clientAffiliatedAgency: "N/A",
    yearCompleted: "N/A",
    projectCostBudget: "N/A",
    projectDesigner: "N/A",
    description: (
      <>
        Complete interior renovation. Work included demolition, carpentry,
        tiles, flooring rough carpentry, painting, electrical, plumbing, and
        HVAC.
      </>
    ),
  },
  {
    link: "/Projects/866Westchester",
    pictures: importAll(
      require.context(
        "D:/Websites/Pictures/Projects/866westchester",
        false,
        /\.(JPG|PNG|png|jpe?g|svg)$/
      )
    ),
    projectName: "866 Westchester Ave.",
    projectLocation: "N/A",
    clientAffiliatedAgency: "N/A",
    yearCompleted: "N/A",
    projectCostBudget: "N/A",
    projectDesigner: "N/A",
    description: (
      <>
        Complete interior renovation of commercial offices. The work included
        demolition, carpentry, new VCT floors, new carpeting, millwork,
        carpentry, painting, electric, plumbing and HVAC.
      </>
    ),
  },
  {
    link: "/Projects/55Pierrpoint",
    pictures: importAll(
      require.context(
        "D:/Websites/Pictures/Projects/55pierre",
        false,
        /\.(JPG|PNG|png|jpe?g|svg)$/
      )
    ),
    projectName: "55 Pierrpoint Street",
    projectLocation: "N/A",
    clientAffiliatedAgency: "N/A",
    yearCompleted: "N/A",
    projectCostBudget: "N/A",
    projectDesigner: "N/A",
    description: (
      <>
        Complete interior renovation of an existing nursing home containing 189
        apartments. The work included demolition, carpentry, new terrazzo
        floors, VCT flooring millwork, apartment renovations, hallway
        renovations and a complete lobby renovation.
      </>
    ),
  },
  {
    link: "/Projects/164_W79th",
    pictures: importAll(
      require.context(
        "D:/Websites/Pictures/Projects/164w79th",
        false,
        /\.(JPG|PNG|png|jpe?g|svg)$/
      )
    ),
    projectName: "164 W79th Street",
    projectLocation: "N/A",
    clientAffiliatedAgency: "N/A",
    yearCompleted: "N/A",
    projectCostBudget: "N/A",
    projectDesigner: "N/A",
    description: <>Work consisted of exterior renovation Local Law 11.</>,
  },
  {
    link: "/Projects/17W_10th_Townhouse",
    pictures: importAll(
      require.context(
        "D:/Websites/Pictures/Projects/17w10street",
        false,
        /\.(JPG|PNG|png|jpe?g|svg)$/
      )
    ),
    projectName: "17W 10th St Townhouse",
    projectLocation: "N/A",
    clientAffiliatedAgency: "N/A",
    yearCompleted: "N/A",
    projectCostBudget: "N/A",
    projectDesigner: "N/A",
    description: (
      <>
        The work consisted of restoration of an existing townhouse. New
        bathrooms, new kitchens, costume millwork flooring, painting, HVAC,
        electric and plumbing.
      </>
    ),
  },
];

export default projects;
