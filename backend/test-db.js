const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gupta-contractor')
  .then(() => {
    console.log('✅ MongoDB Connected');
    
    const testSchema = new mongoose.Schema({ name: String });
    const Test = mongoose.model('Test', testSchema);
    
    const testDoc = new Test({ name: 'Test' });
    return testDoc.save();
  })
  .then(() => {
    console.log('✅ Data saved successfully');
    process.exit(0);
  })
  .catch(err => {
    console.log('❌ Error:', err.message);
    process.exit(1);
  });