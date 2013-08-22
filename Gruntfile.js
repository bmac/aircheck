'use strict';

var fs = require('fs');

module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            options: {jshintrc: 'app/.jshintrc'},
            src: ['app/**/*.js']
        },
        clean: {
            build: ['build']
        },
        handlebars: {
            options: {
                amd: true,
                processName: function(name) {
                    return require('path').basename(name, '.hbs');
                }
            },
            templates: {
                src: 'app/templates/*.hbs',
                dest: 'build/templates.js'
            }
        },
        requirejs: {
            prod: {
                options: {
                    baseUrl: '.',
                    mainConfigFile: 'app/config/requirejs.js',
                    deps: ['app/app'],
                    insertRequire: ['app/app'],
                    name: 'components/almond/almond',
                    out: 'build/wwwroot/app.js',
                    optimize: 'uglify2',
                    generateSourceMaps: true,
                    preserveLicenseComments: false
                }
            }
        },
        fix_sourcemaps: {
            prod: ['build/wwwroot/app.js.map']
        },
        connect: {
            dev: {
                options: {
                    keepalive: true,
                    middleware: function(connect, options) {
                        return [
                            connect.static(__dirname),
                            function(req, res, next){
                                fs.readFile(__dirname + '/index.html', function(err, buf){
                                    if (err) return next(err);
                                    res.end(buf);
                                });
                            }
                        ];
                    }
                }
            },
            prod: {
                options: {
                    base: 'build/wwwroot',
                    keepalive: true,
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            jshint: {
                files: ['<%= jshint.config.src %>', '<%= jshint.app.src %>'],
                tasks: ['jshint']
            },
            handlebars: {
                files: ['<%= handlebars.templates.src %>'],
                tasks: ['handlebars']
            }
        },
        karma: {
            options: {
                configFile: 'karma.conf.js',
                browsers: ['Chrome'],
                reporters: ['coverage', 'dots']
            },
            ci: {
                singleRun: true,
                browsers: ['PhantomJS']
            },
            test: {
                singleRun: true
            },
            server: {
                background: true,
                coverageReporter: {
                    type : ['html'],
                    dir : 'coverage/'
                }
            },
            browsers: {
                singleRun: true,
                browsers: ['Chrome', 'ChromeCanary', 'Safari', 'Firefox', 'PhantomJS']
            }
        }
    });
    
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('build',
                       'Build site files for testing or deployment.',
                       ['jshint', 'clean', 'requirejs:prod' ]);

    grunt.registerTask('deploy',
                       'Deploy site via gh-pages.',
                       ['build', 'gh-pages']);

    grunt.registerTask('dev',
                       'Start a live-reloading dev webserver on localhost.',
                       ['jshint', 'clean', 'connect:dev', 'watch']);

    grunt.registerTask('prod',
                       'Publish to build/wwwroot and start a webserver on localhost.',
                       ['build', 'connect:prod:keepalive']);

    grunt.registerTask('default', ['dev']);

};
