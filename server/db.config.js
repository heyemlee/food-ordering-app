const dbName = 'food-ordering';
const dbUser = 'locaalhost';
const dbPort = '27018';
module.exports = {
    url: `mongodb://${dbUser}:${dbPort}/${dbName}`
}; 