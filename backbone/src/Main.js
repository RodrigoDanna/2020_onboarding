requirejs.config({
    paths: {
        backbone: '../lib/backbone-min',
        jquery: '../lib/jquery-3.6.0.min',
        underscore: '../lib/underscore-umd-min',
        core_bundle: '../../core/dist/bundle'
    }
});

requirejs(['App'])