const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/execute-script', (req, res) => {
  const scriptNumber = req.query.script;
  const scriptPath = `scripts/script${scriptNumber}.sh`;

  exec(`bash ${scriptPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${error}`);
      res.status(500).send('Internal Server Error');
      return;
    }
    console.log(`Script output: ${stdout}`);
    res.send(`Script ${scriptNumber} executed successfully`);
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
