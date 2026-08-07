const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://abahmarquis_db_user:63Qy8XBqKVcDcLin@celemedilag.8mycvgl.mongodb.net/?appName=celemedilag";

const alumniData = [
  {
    name: "Dr. Oluwaseun Adeleke",
    graduationYear: "2018",
    profession: "General Practitioner",
    location: "Lagos, Nigeria",
    email: "o.adeleke@example.com",
    phone: "+234 800 123 4567",
    linkedInProfile: "https://linkedin.com/in/oluwaseunadeleke",
    bio: "Being a part of CELEMEDILAG during my medical school days gave me the spiritual grounding I needed to face the rigorous challenges of the medical profession.",
    photoUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    currentCompany: "LUTH",
    wasExco: true,
    excoRole: "President"
  },
  {
    name: "Dr. Chioma Nnadi",
    graduationYear: "2015",
    profession: "Pediatrician",
    location: "London, UK",
    email: "c.nnadi@example.com",
    phone: "+44 7700 900000",
    linkedInProfile: "https://linkedin.com/in/chiomannadi",
    bio: "The fellowship was a family to me. The love, support, and prayers of the brethren saw me through my toughest exams and shaped the compassionate doctor I am today.",
    photoUrl: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80",
    currentCompany: "NHS",
    wasExco: true,
    excoRole: "Sisters Coordinator"
  },
  {
    name: "Dr. Babatunde Ogunleye",
    graduationYear: "2020",
    profession: "Dentist",
    location: "Abuja, Nigeria",
    email: "b.ogunleye@example.com",
    phone: "+234 800 987 6543",
    linkedInProfile: "https://linkedin.com/in/babatundeogunleye",
    bio: "I will never forget the vibrant worship sessions and the powerful word of God shared at CELEMEDILAG. It instilled in me a sense of purpose and divine mandate.",
    photoUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
    currentCompany: "National Hospital Abuja",
    wasExco: false,
    excoRole: "Member"
  }
];

const newsData = [
  {
    title: "Annual Medical Outreach & Evangelism at Idi-Araba",
    content: "We are thrilled to announce our upcoming annual medical outreach to the Idi-Araba community. As medical students and faithful members of Celestial Church of Christ, we believe in healing both the body and the soul. Join us this Saturday as we provide free medical checkups, distribute medications, and share the love of Christ with the community. We are expecting a huge turnout and encourage all brethren to participate in this noble cause. Bring your stethoscopes, your Bibles, and a heart full of love!",
    summary: "Join us this Saturday for our annual medical outreach in Idi-Araba, providing free healthcare and spreading the gospel.",
    category: "Outreach",
    author: "Exco Media Team",
    tags: ["Evangelism", "Health", "Community"],
    coverImageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    galleryUrls: [],
    isPublished: true,
    publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
  },
  {
    title: "Welcoming the New Year with Thanksgiving",
    content: "The cross-over service into the new year was a magnificent display of God's glory. Brethren gathered at the parish to offer thanksgiving, sing hymns of praise, and partake in the holy communion. The Shepherd delivered a powerful sermon on 'New Beginnings and Divine Promises,' urging everyone to remain steadfast in faith. As we step into this new academic and spiritual year, let us hold firmly to the tenets of our church and support one another in love.",
    summary: "A recap of our glorious cross-over service filled with thanksgiving, hymns, and a powerful sermon on new beginnings.",
    category: "Church Event",
    author: "Oluwaseun Adebayo",
    tags: ["Thanksgiving", "Service", "New Year"],
    coverImageUrl: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?auto=format&fit=crop&q=80",
    galleryUrls: [],
    isPublished: true,
    publishedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000) // 15 days ago
  },
  {
    title: "Academic Excellence Seminar for Pre-Clinical Students",
    content: "Navigating the pre-clinical years can be daunting. That is why the CELEMEDILAG academic committee hosted a seminar titled 'Excelling in Spirit and in Truth.' We had esteemed alumni and senior colleagues share their experiences, study tips, and how they balanced their spiritual commitments with their rigorous academic schedules. The event was highly insightful, and attendees left with renewed motivation to achieve outstanding results in their upcoming MB exams.",
    summary: "Insights from our recent seminar aimed at helping pre-clinical students balance academic excellence with spiritual growth.",
    category: "Academic",
    author: "Academic Committee",
    tags: ["Study", "MBBS", "Seminar"],
    coverImageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80",
    galleryUrls: [],
    isPublished: true,
    publishedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // 30 days ago
  }
];

const seedData = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const db = mongoose.connection.db;
    
    // Seed Alumni
    const alumniCollection = db.collection('alumnus'); // wait, the schema name is Alumnus, nestjs usually pluralizes it to 'alumnus' or 'alumni', let's check nestjs pluralization, it usually adds 's' -> 'alumnus' -> 'alumnus'? Actually mongoose lowercases and pluralizes. 'alumnus' plural is 'alumni' but mongoose might do 'alumnus' -> 'alumnuses'
    // let me just seed via the api if possible, or I'll just try 'alumni' collection. The API endpoint is /alumni. Let me drop both 'alumni' and 'alumnuses' to be safe, then insert into 'alumnis'.
    // Actually, looking at the code `fetch(apiBase + '/alumni')`, I'll insert into 'alumnis' to be safe as NestJS mongoose pluralizes Alumnus to alumnis usually unless specified.
    
    const Alumni = mongoose.model('Alumnus', new mongoose.Schema({
      name: String,
      graduationYear: String,
      profession: String,
      location: String,
      email: String,
      phone: String,
      linkedInProfile: String,
      bio: String,
      photoUrl: String,
      currentCompany: String,
      wasExco: Boolean,
      excoRole: String
    }));

    const News = mongoose.model('News', new mongoose.Schema({
      title: String,
      content: String,
      summary: String,
      category: String,
      author: String,
      tags: [String],
      coverImageUrl: String,
      galleryUrls: [String],
      isPublished: Boolean,
      publishedAt: Date
    }));

    await Alumni.deleteMany({});
    await Alumni.insertMany(alumniData);
    console.log('Seeded Alumni');

    await News.deleteMany({});
    await News.insertMany(newsData);
    console.log('Seeded News');

    console.log('Seeding completed successfully');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding data:', err);
    process.exit(1);
  }
};

seedData();
