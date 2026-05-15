const fs = require('fs');
const path = require('path');

const usersFile = path.join(__dirname, '..', 'users.json');

function readUsers() {
  if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(usersFile));
}

module.exports = (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { email, password } = req.body;
  const users = readUsers();

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }

  res.json({ message: 'Login successful', user: { id: user.id, email: user.email, name: user.name } });
};