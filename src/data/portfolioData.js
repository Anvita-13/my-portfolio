// ============================================================
//  portfolioData.js  –  Edit this file to update all content
// ============================================================

export const personal = {
  name: "Anvita Arun",
  title: "Second Year Engineering Student",
  tagline: "Open to opportunities",
  location: "Chennai",
  phone: "+91 89399 48844",
  email: "anvitaarun1@gmail.com",
  github: "",          // optional: add your GitHub URL
  linkedin: "",        // optional: add your LinkedIn URL
};

export const about = `I'm a second-year B.Tech Computer Science student at VIT Chennai, also pursuing a BS in Data Science and Applications from IIT Madras. I'm passionate about building real-world systems that solve meaningful problems — from predictive analytics and database design to web extensions and embedded electronics. Outside of tech, I'm a classically trained Bharatanatyam dancer and Carnatic musician, and I love capturing the world through photography.`;

export const education = [
  {
    institution: "Vellore Institute of Technology",
    location: "Chennai, Tamil Nadu",
    degree: "B.Tech in Computer Science and Engineering",
    detail: "CGPA: 8.38",
    period: "July 2024 – May 2028",
    status: "Pursuing",
  },
  {
    institution: "Indian Institute of Technology",
    location: "Chennai, Tamil Nadu",
    degree: "BS in Data Science and Applications",
    detail: "Completed Foundation Level",
    period: "",
    status: "Pursuing",
  },
  {
    institution: "Sri Sankara Senior Secondary School",
    location: "Chennai, Tamil Nadu",
    degree: "Class 12",
    detail: "Score: 96%",
    period: "",
    status: "Completed",
  },
  {
    institution: "Sri Sankara Senior Secondary School",
    location: "Chennai, Tamil Nadu",
    degree: "Class 10",
    detail: "Score: 94%",
    period: "",
    status: "Completed",
  },
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C", "C++"],
  },
  {
    category: "Web Technologies",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Database Technologies",
    items: ["SQL", "Oracle"],
  },
  {
    category: "Concepts",
    items: ["Data Structures & Algorithms", "Object-Oriented Programming"],
  },
  {
    category: "Electronics & Embedded",
    items: ["Arduino"],
  },
];

export const projects = [
  {
    title: "Predictive Vehicle Health Maintenance",
    summary: "Machine learning-based predictive maintenance system for vehicle component failure identification",
    points: [
      "Developed a predictive maintenance system to identify vehicle component failures",
      "Conducted Exploratory Data Analysis (EDA) on vehicle usage and service history",
      "Implemented and evaluated multiple ML models (Logistic Regression, Random Forest, XGBoost, Naive Bayes)",
      "Selected Random Forest based on accuracy, precision, recall, and F1-score metrics",
      "Built interactive Power BI dashboards to visualize trends and feature importance"
    ],
    tags: ["Python", "Pandas", "Scikit-learn", "Power BI"],
    github: "https://github.com/Anvita-13/predictive-vehicle-health-maintenance.git",
  },
  {
    title: "RailServe",
    summary: "Database-driven railway management system for station operations and ticketing",
    points: [
      "Designed a railway management system for station operations and ticketing",
      "Created ER diagrams and relational schema with BCNF normalization",
      "Implemented SQL queries, constraints, and CRUD operations",
      "Managed passenger records, reservations, and payment handling",
      "Built frontend interface with backend connectivity for schedules and operations"
    ],
    tags: ["Oracle SQL", "Flask", "HTML/CSS", "JavaScript"],
    github: "https://github.com/Anvita-13/railserve-railway-management-system.git",
  },
  {
    title: "Traffic Mitra",
    summary: "Wearable assistive device for helping hearing-impaired individuals safely navigate roads",
    points: [
      "Designed a wearable assistive device for hearing-impaired individuals",
      "Developed a sensor-based alert system using ultrasonic sensors",
      "Implemented multi-level warning system with LED indicators and vibration motors",
      "Built and tested a working prototype using Arduino",
      "Completed simulations in Tinkercad for validation"
    ],
    tags: ["Arduino", "Embedded C", "Ultrasonic Sensors"],
    github: null,
  },
];

export const interests = [
  {
    label: "Bharatanatyam",
    detail: "Professionally trained classical dance with Diploma in Bharatanatyam",
    icon: "💃",
  },
  {
    label: "Photography",
    detail: "Capturing moments and perspectives through the lens",
    icon: "📷",
  },
  {
    label: "Carnatic Music",
    detail: "Trained in Carnatic classical music tradition",
    icon: "🎵",
  },
];

export const accomplishments = [
  {
    title: "Inspire MANAK Award – Tamil Nadu District Level",
    body: "Won recognition under the Inspire MANAK Flagship Innovation Program of the Department of Science and Technology (DST), Government of India. Submitted an idea to develop a wearable smart device for the hearing-challenged based on an Arduino Uno microcontroller.",
  },
];
