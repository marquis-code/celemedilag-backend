const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cele-medilag';

async function run() {
  await mongoose.connect(MONGODB_URI);
  console.log('Connected to MongoDB');

  const departmentSchema = new mongoose.Schema({
    name: String,
    category: String,
    displayOrder: Number
  }, { strict: false });

  const Department = mongoose.model('Department', departmentSchema, 'departments');

  const structure = {
    'ADMIN': [
      'Coordinator',
      'General Secretary',
      'Sister Coordinator',
      'Sisters\' Coordinator', // Handle possible variations
      'Sisters Coordinator'
    ],
    'SPIRITUAL': [
      'Bible Study Secretary',
      'Prayer Secretary',
      'Music Director',
      'Choir' // Handle variations
    ],
    'SERVICE': [
      'Academic',
      'Publicity Secretary',
      'Welfare Secretary',
      'Welfare' // Handle variations
    ]
  };

  const departments = await Department.find({});
  console.log(`Found ${departments.length} departments.`);

  let updatedCount = 0;

  for (const dept of departments) {
    let foundCategory = 'UNCATEGORIZED';
    let foundOrder = 999;

    for (const [category, names] of Object.entries(structure)) {
      const idx = names.findIndex(name => 
        dept.name.toLowerCase().includes(name.toLowerCase()) || 
        name.toLowerCase().includes(dept.name.toLowerCase())
      );
      if (idx !== -1) {
        foundCategory = category;
        foundOrder = idx;
        break;
      }
    }

    dept.category = foundCategory;
    dept.displayOrder = foundOrder;
    await dept.save();
    console.log(`Updated ${dept.name} -> Category: ${foundCategory}, Order: ${foundOrder}`);
    updatedCount++;
  }

  console.log(`Successfully updated ${updatedCount} departments.`);
  await mongoose.disconnect();
}

run().catch(console.error);
