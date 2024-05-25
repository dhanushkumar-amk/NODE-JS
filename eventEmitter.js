/** it invoke at the time of request comes to the server */ const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const {format} = require('date-fns');
const {log} = require('console');

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), 'dd-MM-yyyy\tHH:mm:ss')}`;
  const logItem = `${dateTime} \t  ${message}}`;

  try {
    if (!fs.existsSync(path.join(__dirname, 'logs'))) {
      await fsPromises.mkdir(path.join(__dirname, 'logs'));
    }
    await fsPromises.appendFile(
      path.join(__dirname, 'logs', 'eventFileName'),
      logItem
    );
  } catch (error) {
    console.error(error);
  }
};
module.exports = logEvents;
