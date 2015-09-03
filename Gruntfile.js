module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            },
            controller: {
                src: 'client/scripts/controllers/controller.js',
                dest: 'server/public/assets/scripts/controllers/controller.min.js'
            }
        },
        copy: {
            angular: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map"
                ],
                "dest": "server/public/vendors/"
            },
            angularRoute: {
              expand: true,
                cwd: 'node_modules',
                src: [
                    "angular-route/angular-route.min.js",
                    "angular-route/angular-route.min.js.map"
                ],
                dest: "server/public/vendors"
            },
            angularMaterial: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular-material/angular-material.min.js",
                    "angular-material/angular-material.min.css"
                ],
                dest: "server/public/vendors"
            },
            angularAnimate: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular-animate/angular-animate.min.js",
                    "angular-animate/angular-animate.min.js.map"
                ],
                dest: "server/public/vendors"
            },
            angularAria: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular-aria/angular-aria.min.js",
                    "angular-aria/angular-aria.min.js.map"
                ],
                dest: "server/public/vendors"
            },
            style: {
                expand: true,
                cwd: 'client',
                src: "styles/style.css",
                "dest": "server/public/assets/"
            },
            html: {
                expand: true,
                cwd: 'client',
                src: [
                    'views/index.html',
                    'views/track.html',
                    'views/stats.html'
                ],
                "dest": "server/public/assets/"
            },
            chart: {
              expand: true,
                cwd: 'node_modules',
                src: [
                    'Chart.js-master/Chart.min.js'
                ],
                dest: "server/public/vendors"
            },
            angularChart: {
                expand: true,
                cwd: 'node_modules',
                src: [
                  'angular-chart.js-master/dist/angular-chart.min.js',
                    'angular-chart.js-master/dist/angular-chart.css',
                    'angular-chart.js-master/dist/angular-chart.css.map',
                    'angular-chart.js-master/dist/angular-chart.min.js.map',
                    'angular-chart.js-master/dist/angular-chart.js.tar.gz'
                ],
                dest: "server/public/vendors"
            },
            chartJS: {
                expand: true,
                cwd: 'node_modules',
                src: [
                  'Chart.js-master/Chart.min.js'
                ],
                dest: 'server/public/vendors'
            },
            angularCharts: {
                expand: true,
                cwd: 'node_modules',
                src: [
                  'angular-chart.js-master/angular-chart.min.js',
                    'angular-chart.js-master/angular-chart.min.js.map',
                    'angular-chart.js-master/angular-chart.css',
                    'angular-chart.js-master/angular-chart.css.map'
                ],
                dest: 'server/public/vendors'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};