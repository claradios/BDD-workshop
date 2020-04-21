const rm = require('rimraf');

const opts = { disableGlob: true };

rm('test/reports/cucumber', opts, err => {
  if (err)
    console.log(err)
});

rm('test/reports/screenshots', opts, err => {
  if (err)
    console.log(err)
});

rm('test/reports/videos', opts, err => {
  if (err)
    console.log(err)
});

rm('test/reports/front', opts, err => {
  if (err)
    console.log(err)
});
