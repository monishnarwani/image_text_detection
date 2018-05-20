const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient({
  projectId: 'static-grid-158811',
  keyFilename: 'auth.json',
});

// Performs label detection on the image file
client
  .textDetection('./splitsecond_images/HYMD01098.JPG')
  .then(results => {
    const detections = results[0].textAnnotations;
    // console.log('Text:');
    detections.forEach((text) =>  {
      if (text.description && text.description.length === 5) {
        console.log(text.description);
      }
    });
  })
  .catch(err => {
    console.error('ERROR:', err);
  });



function isBibNo(num) {
  if (num.length === 5) {
    return true;
  }
}