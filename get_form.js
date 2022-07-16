'use strict';

const path = require('path');
const google = require('@googleapis/forms');
const {authenticate} = require('@google-cloud/local-auth');

const formID = '1z0Ja5VidknDfngLkbAr10Z20VaKZPf2q4n5x6Bgm5v8';

async function runSample(query) {
  // const auth = await authenticate({
    // keyfilePath: path.join(__dirname, 'credentials.json'),
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(__dirname, 'credentials.json'),
    scopes: 'https://www.googleapis.com/auth/forms.body.readonly',
  });
  const forms = google.forms({
    version: 'v1',
    auth: auth,
  });
  const res = await forms.forms.get({formId: formID});
  console.log(res.data);
  return res.data;
}

if (module === require.main) {
  runSample().catch(console.error);
}
module.exports = runSample;
