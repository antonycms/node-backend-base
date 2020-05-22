const Server = require('./app');

const { PORT } = process.env;

function init() {
  Server.listen(PORT);

  console.log(`Server running on port ${PORT}`);
}

init();
