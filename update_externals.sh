cd code
curl http://requirejs.org/docs/release/0.23.0/minified/require.js > require.js
echo 'define(function(require, exports, module) {' > jsonml.js
curl https://github.com/rasmuserik/jsonml/raw/master/jsonml.js >> jsonml.js
echo '});' >> jsonml.js
