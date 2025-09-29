const mongoose = require('mongoose');

// Test MongoDB connection
mongoose.connect('mongodb://localhost:27017/gupta-contractor')
  .then(() => {
    console.log('✅ MongoDB Connected Successfully');
    
    // Test data insertion
    const testSchema = new mongoose.Schema({ name: String, date: Date });
    const Test = mongoose.model('Test', testSchema);
    
    const testDoc = new Test({ name: 'Connection Test', date: new Date() });
    return testDoc.save();
  })
  .then(() => {
    console.log('✅ Test data saved successfully');
    process.exit(0);
  })
  .catch(err => {
    console.log('❌ MongoDB Error:', err.message);
    process.exit(1);
  });