module.exports = function(grunt) {
  // Add our custom tasks.
  grunt.loadTasks('../../../../tasks');

  browserStackCredentials = grunt.file.readJSON('../../browserstackCredentials.json')

  grunt.initConfig({
    browserstackScreenshotServer: {
      apiKey: browserStackCredentials.apiKey
    }
  });

  grunt.registerTask('default', [
    'browserstackScreenshotServer:start'
  ]);
};
