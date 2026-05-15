const fs = require('fs');
const path = require('path');

const usersFile = path.join(__dirname, '..', 'users.json');

function readUsers() {
  if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(usersFile));
}

function writeUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

module.exports = (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { email, password, name } = req.body;
  const users = readUsers();

  if (users.find(u => u.email === email)) {
    res.status(400).json({ error: 'User already exists' });
    return;
  }

  const newUser = { id: Date.now(), email, password, name };
  users.push(newUser);
  writeUsers(users);

  res.json({ message: 'Registration successful', user: { id: newUser.id, email, name } });
};