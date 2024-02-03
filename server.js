const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

// app.use(express.static('public'));
// CORS middleware
app.use(cors());

app.get('/execute-script', (req, res) => {
  exec('bash scripts/createFile.sh', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${error}`);
      res.status(500).send('Internal Server Error');
      return;
    }
    console.log(`Script output: ${stdout}`);
    res.send('Script executed successfully');
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
