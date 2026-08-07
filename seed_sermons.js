const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://abahmarquis_db_user:63Qy8XBqKVcDcLin@celemedilag.8mycvgl.mongodb.net/?appName=celemedilag";

const sermonsData = [
  // Video Sermons
  {
    title: "Understanding the Times and Seasons",
    type: "Video",
    preacher: "Sup. Evang. S. O. Odeyemi",
    date: new Date("2025-01-12").toISOString(),
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "45:20",
    series: "Prophetic Insight",
    bibleVerses: ["1 Chronicles 12:32", "Ecclesiastes 3:1"],
    summary: "A powerful exposition on discerning the spiritual times and preparing the church for the moves of God in these last days.",
    coverImageUrl: "https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "The Power of Fervent Prayer",
    type: "Video",
    preacher: "Ven. Sup. Evang. (Dr.) A. B. Marquis",
    date: new Date("2025-02-09").toISOString(),
    videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
    duration: "52:10",
    series: "Prayer Strategies",
    bibleVerses: ["James 5:16", "Luke 18:1"],
    summary: "Exploring how the fervent prayer of a righteous man avails much. Learn practical strategies for maintaining a burning prayer altar.",
    coverImageUrl: "https://images.unsplash.com/photo-1544427920-c49ccf08c146?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Living a Holy Life in a Corrupt World",
    type: "Video",
    preacher: "Asst. Ven. Sup. Evang. J. O. Ojo",
    date: new Date("2025-03-02").toISOString(),
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
    duration: "48:30",
    series: "Holiness Unto The Lord",
    bibleVerses: ["1 Peter 1:15-16", "Romans 12:1-2"],
    summary: "A practical guide to navigating modern challenges while maintaining Christian purity and dedication to God.",
    coverImageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800"
  },
  // Audio Sermons
  {
    title: "Worship as a Lifestyle",
    type: "Audio",
    preacher: "Mother Celestial M. A. Adebayo",
    date: new Date("2025-04-15").toISOString(),
    fileUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    duration: "35:00",
    series: "True Worship",
    bibleVerses: ["John 4:23-24"],
    summary: "Discovering how true worship extends beyond the church service into every aspect of our daily lives.",
    coverImageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Faith That Moves Mountains",
    type: "Audio",
    preacher: "Senior Evang. T. K. Balogun",
    date: new Date("2025-05-20").toISOString(),
    fileUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    duration: "42:15",
    series: "Foundations of Faith",
    bibleVerses: ["Mark 11:23-24"],
    summary: "Building robust, unshakeable faith that can withstand life's trials and manifest the miraculous.",
    coverImageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "The Role of the Holy Spirit",
    type: "Audio",
    preacher: "Sup. Senior Leader E. O. Oladipo",
    date: new Date("2025-06-11").toISOString(),
    fileUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    duration: "38:45",
    series: "The Comforter",
    bibleVerses: ["John 14:16-17", "Acts 1:8"],
    summary: "Understanding the person, power, and practical manifestation of the Holy Spirit in the believer's life.",
    coverImageUrl: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Overcoming Anxiety and Fear",
    type: "Audio",
    preacher: "Evang. (Mrs.) R. A. Olumide",
    date: new Date("2025-07-05").toISOString(),
    fileUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    duration: "40:30",
    series: "Mental and Spiritual Wellness",
    bibleVerses: ["Philippians 4:6-7", "2 Timothy 1:7"],
    summary: "Biblical strategies and spiritual warfare techniques for overcoming anxiety, depression, and fear.",
    coverImageUrl: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&q=80&w=800"
  },
  // PDF Resources
  {
    title: "New Converts Training Manual",
    type: "PDF",
    preacher: "Education Committee",
    date: new Date("2025-08-01").toISOString(),
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    duration: "N/A",
    series: "Discipleship",
    bibleVerses: ["Matthew 28:19-20"],
    summary: "A comprehensive manual covering the basic tenets, doctrines, and practices of the Celestial Church of Christ for new members.",
    coverImageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Guide to Fasting and Prayers",
    type: "PDF",
    preacher: "Spiritual Advisory Board",
    date: new Date("2025-09-15").toISOString(),
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    duration: "N/A",
    series: "Spiritual Disciplines",
    bibleVerses: ["Matthew 6:16-18", "Isaiah 58"],
    summary: "Detailed instructions and prophetic guidance on how to conduct effective fasting and prayer sessions.",
    coverImageUrl: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80&w=800"
  }
];

const sermonSchema = new mongoose.Schema({
  title: String,
  type: String,
  preacher: String,
  date: String,
  fileUrl: String,
  videoUrl: String,
  duration: String,
  series: String,
  bibleVerses: [String],
  summary: String,
  coverImageUrl: String
}, { timestamps: true });

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
    
    // Check if model exists, if not create it
    const Sermon = mongoose.models.Sermon || mongoose.model('Sermon', sermonSchema);
    
    // Clear existing
    await Sermon.deleteMany({});
    console.log('Cleared existing sermons');
    
    // Insert new
    await Sermon.insertMany(sermonsData);
    console.log(`Successfully seeded ${sermonsData.length} sermons and resources!`);
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
}

seed();
