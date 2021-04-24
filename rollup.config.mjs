// rollup.config.js
import lucy from './rollup-plugin-lucy.mjs';
import nodeModules from '@rollup/plugin-node-resolve';

export default ({
  input: 'example.js', // resolved by our plugin
  plugins: [lucy(), nodeModules()],
  output: [{
    file: 'bundle.js',
    format: 'es'
  }]
});