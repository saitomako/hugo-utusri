const { src, dest, watch, series, parallel } = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');

const imin = () => {
  return src('static/images/*.jpg')
    .pipe(imagemin(
    [
      pngquant({ quality: '65-80', speed: 1}),
      mozjpeg({ quality: 80 }),
      imagemin.svgo(),
      imagemin.gifsicle()
    ]
    ))
    .pipe(dest('static/images/min'))
}

exports.default = series(imin);
