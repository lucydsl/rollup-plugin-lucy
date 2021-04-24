import { compileXstate, ready } from '@lucy/liblucy';

export default function(pluginOptions = {}) {
  return {
    name: '@lucy/rollup-plugin',
    async transform(code, id) {
      if(id.endsWith('.lucy')) {
        await ready;

        const js = compileXstate(code, id, pluginOptions);

        return {
          code: js
        };
      }
    }
  }
}