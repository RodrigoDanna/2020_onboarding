define([
    'backbone', 
    '../Models/ResultModel'
], (Backbone, Model) => {

    return Backbone.Collection.extend({
        model: Model,
    })
    
})