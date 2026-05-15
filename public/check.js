const fs = require('fs');
['app.js','admin.js'].forEach(f => {
  try {
    new Function(fs.readFileSync(f,'utf8'));
    console.log(f + ': OK');
  } catch(e) {
    console.log(f + ': ERROR - ' + e.message);
  }
});
