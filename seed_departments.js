const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://abahmarquis_db_user:63Qy8XBqKVcDcLin@celemedilag.8mycvgl.mongodb.net/?appName=celemedilag";

const departmentsData = [
  // Spiritual Departments
  {
    name: "Prophets and Prophetesses",
    description: "The Prophetic ministry is tasked with receiving and delivering spiritual messages, trances, and visions for the church and its members.",
    hodName: "Most Snr. Evang. Matthew Ogunleye",
    hodPhotoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    meetingDays: "Wednesdays (6:00 PM), Saturdays (4:00 PM)",
    bannerImageUrl: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80&w=1200",
    membersCount: 45,
    responsibilities: [
      "Conducting spiritual consultations",
      "Delivering prophecies during services",
      "Spiritual cleansing and guidance"
    ],
    contactEmail: "prophets@celemedilag.org",
    contactPhone: "+234 801 234 5678"
  },
  {
    name: "Choir Ministry",
    description: "The celestial choir is responsible for ministering through heavenly hymns, leading praise, and setting the spiritual atmosphere for worship.",
    hodName: "Snr. Leader D. O. Adeleke",
    hodPhotoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    meetingDays: "Tuesdays (6:00 PM), Saturdays (12:00 PM)",
    bannerImageUrl: "https://images.unsplash.com/photo-1516280440502-8692790938b8?auto=format&fit=crop&q=80&w=1200",
    membersCount: 82,
    responsibilities: [
      "Leading congregational worship",
      "Learning and rendering hymns",
      "Special ministration during harvest"
    ],
    contactEmail: "choir@celemedilag.org",
    contactPhone: "+234 802 345 6789"
  },
  {
    name: "Prayer Warriors",
    description: "A dedicated group of intercessors who stand in the gap for the church, its leadership, and members facing challenges.",
    hodName: "Mother Celestial A. O. Ojo",
    hodPhotoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    meetingDays: "Daily Midnight Prayers, Thursdays (6:00 PM)",
    bannerImageUrl: "https://images.unsplash.com/photo-1544427920-c49ccf08c146?auto=format&fit=crop&q=80&w=1200",
    membersCount: 30,
    responsibilities: [
      "Intercessory prayers",
      "Fasting and prayer chains",
      "Organizing night vigils"
    ],
    contactEmail: "prayer@celemedilag.org",
    contactPhone: "+234 803 456 7890"
  },

  // Service Departments
  {
    name: "Ushers & Security",
    description: "Responsible for maintaining order during services, welcoming members, and ensuring the physical security of the church premises.",
    hodName: "Hon. Snr. Evang. K. T. Babatunde",
    hodPhotoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    meetingDays: "Sundays (7:30 AM), First Saturday of the month",
    bannerImageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200",
    membersCount: 55,
    responsibilities: [
      "Welcoming and seating worshippers",
      "Maintaining decorum during service",
      "Crowd control during major events"
    ],
    contactEmail: "ushers@celemedilag.org",
    contactPhone: "+234 804 567 8901"
  },
  {
    name: "Welfare & Charity",
    description: "Dedicated to the physical and material well-being of church members, providing support for the needy, widows, and orphans.",
    hodName: "Ldr. (Mrs) F. E. Alabi",
    hodPhotoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    meetingDays: "Second Sunday of the month",
    bannerImageUrl: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1200",
    membersCount: 25,
    responsibilities: [
      "Distributing relief materials",
      "Hospital visitations",
      "Financial assistance for members"
    ],
    contactEmail: "welfare@celemedilag.org",
    contactPhone: "+234 805 678 9012"
  },

  // Administrative & Educational
  {
    name: "Sunday School",
    description: "Focused on the foundational teaching of the word of God to children, teenagers, and new converts.",
    hodName: "Evang. P. A. Aderibigbe",
    hodPhotoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    meetingDays: "Sundays (8:30 AM - 9:45 AM)",
    bannerImageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200",
    membersCount: 18,
    responsibilities: [
      "Curriculum development",
      "Teaching Sunday School classes",
      "Organizing children's harvest"
    ],
    contactEmail: "sundayschool@celemedilag.org",
    contactPhone: "+234 806 789 0123"
  },
  {
    name: "Media & IT",
    description: "Handles all digital communications, live streaming, social media management, and the church website.",
    hodName: "Bro. Marquis A. O.",
    hodPhotoUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200",
    meetingDays: "Thursdays (5:00 PM)",
    bannerImageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
    membersCount: 12,
    responsibilities: [
      "Live streaming of services",
      "Managing church website",
      "Audio and visual recordings"
    ],
    contactEmail: "media@celemedilag.org",
    contactPhone: "+234 807 890 1234"
  }
];

const departmentSchema = new mongoose.Schema({
  name: String,
  description: String,
  hodName: String,
  hodPhotoUrl: String,
  meetingDays: String,
  bannerImageUrl: String,
  membersCount: Number,
  responsibilities: [String],
  contactEmail: String,
  contactPhone: String
}, { timestamps: true });

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
    
    // Check if model exists, if not create it
    const Department = mongoose.models.Department || mongoose.model('Department', departmentSchema);
    
    // Clear existing
    await Department.deleteMany({});
    console.log('Cleared existing departments');
    
    // Insert new
    await Department.insertMany(departmentsData);
    console.log(`Successfully seeded ${departmentsData.length} departments!`);
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
}

seed();
