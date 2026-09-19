const mongoose = require('mongoose');
require('dotenv').config();

const organogramSchema = new mongoose.Schema({
  title: { type: String, required: true },
  order: { type: Number, default: 0 },
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'OrganogramNode', default: null },
  isGroup: { type: Boolean, default: false },
}, { timestamps: true });

const OrganogramNode = mongoose.model('OrganogramNode', organogramSchema);

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  await OrganogramNode.deleteMany({});
  console.log('Cleared existing organogram nodes');

  // Root
  const pastCoordinators = await OrganogramNode.create({ title: 'Past Coordinators', isGroup: true, order: 1 });
  
  const coordsGroup = await OrganogramNode.create({ title: 'Coordinator / Assistant', isGroup: true, parentId: pastCoordinators._id, order: 2 });
  await OrganogramNode.create({ title: 'The Coordinator', parentId: coordsGroup._id, order: 1 });
  await OrganogramNode.create({ title: 'The Assistant Coordinator', parentId: coordsGroup._id, order: 2 });

  const secsGroup = await OrganogramNode.create({ title: 'Secretaries: General Secretary / Assistant', isGroup: true, parentId: coordsGroup._id, order: 3 });
  await OrganogramNode.create({ title: 'The General Secretary', parentId: secsGroup._id, order: 3 });
  await OrganogramNode.create({ title: 'The Assistant General Secretary', parentId: secsGroup._id, order: 4 });

  const othersGroup = await OrganogramNode.create({ title: 'Other Executives', isGroup: true, parentId: secsGroup._id, order: 4 });
  const otherRoles = [
    'The Sisters Coordinator', // listed as xvi in the 17 roles, but first in the box
    'The Service Secretary', // v
    'The Bible Study Secretary', // vi
    'The Librarian', // viii (Liberian in image, fixing typo)
    'The Choir Secretary', // ix
    'The Publicity Secretary', // x
    'The Welfare Secretary', // xi
    'The Financial Secretary', // xii
    'The Treasurer', // xiii
    'The Transport Secretary', // xiv
    'The Drama Secretary/Stunt', // xv
    'The Hall Representative' // xvii
  ];

  let orderCount = 5;
  for (const role of otherRoles) {
    await OrganogramNode.create({ title: role, parentId: othersGroup._id, order: orderCount++ });
  }

  console.log('Successfully seeded organogram nodes!');
  mongoose.disconnect();
}

seed().catch(err => {
  console.error('Error seeding organogram:', err);
  mongoose.disconnect();
});
