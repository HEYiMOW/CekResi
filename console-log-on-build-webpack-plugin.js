const pluginName = 'ConsoleLogOnBuildWebpackPlugin';
 
class ConsoleLogOnBuildWebpackPlugin {
  constructor(options) {
    this.options = options;
  }
 
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log(this.options.message);
    });
  }
}
 
module.exports = ConsoleLogOnBuildWebpackPlugin;