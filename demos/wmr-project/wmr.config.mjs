import lucy from '../../rollup-plugin-lucy.mjs';

export default async function (config) {
  console.log(config.mode)
  //config.plugins.push(lucy());
}