requirejs.config({
    paths: {
        backbone: '../lib/backbone-min',
        jquery: '../lib/jquery-3.6.0.min',
        underscore: '../lib/underscore-umd-min',
        core_bundle: '../../core/dist/core_bundle',
        react_bundle: '../../react/dist/react_bundle'
    }
});

requirejs(['App'])