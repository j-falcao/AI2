const https = require('https');

const url = 'https://localhost:8081/';

https.get(url, (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
    console.log(data);
  });
}).on('error', (error) => {
  console.error(`Error fetching ${url}: ${error.message}`);
});