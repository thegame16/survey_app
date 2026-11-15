// Shared settings for index.html (agents) and survey.html (respondents).
// Paste your Apps Script Web App link (ends in /exec) here, in this one place.
const API_URL = "https://script.google.com/macros/s/AKfycbwKuYC1HG-5IDq4d4n9qFJdBCdm5_OVj0auGNPnvpkpzNaC431x86sHnAonAgLon1Seug/exec";

// Programmes sourced from UMaT admissions pages and TopUniversities; verify against umat.edu.gh before final use.
const programmes = [
  // Faculty of Mining and Minerals Technology
  "BSc Mining Engineering",
  "BSc Minerals Engineering",

  // Faculty of Engineering
  "BSc Mechanical Engineering",
  "BSc Electrical and Electronic Engineering",
  "BSc Renewable Energy Engineering",
  "BSc Telecommunication Engineering",
  "Diploma in Plant and Maintenance Engineering",
  "Diploma in Electrical and Electronic Engineering",

  // Faculty of Computing and Mathematical Sciences
  "BSc Cyber Security",
  "BSc Computer Science and Engineering",
  "BSc Information Systems and Technology",
  "BSc Mathematics",
  "BSc Statistical Data Science",
  "BSc Robotics Engineering and Artificial Intelligence",

  // Faculty of Integrated Management Studies
  "BSc Logistics and Transport Management",
  "BSc Economics and Industrial Organisation",
  "BSc Finance and Data Science",

  // Faculty of Geosciences and Environmental Studies
  "BSc Geomatic Engineering",
  "BSc Geological Engineering",
  "BSc Spatial Planning",
  "BSc Environmental and Safety Engineering",
  "BSc Land Administration and Information Systems",
  "Diploma in General Drilling",

  // School of Petroleum Studies
  "BSc Petroleum Engineering",
  "BSc Natural Gas Engineering",
  "BSc Petroleum Geosciences and Engineering",
  "BSc Petroleum Refining and Petrochemical Engineering",
  "BSc Chemical Engineering",

  "Other"
];
