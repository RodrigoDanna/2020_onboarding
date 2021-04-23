define([
    'backbone',
], (Backbone) => {

    return () => {
        const HomeView = Backbone.View.extend({
            el: 'root',
            // initialize: () => {
            //     return this.$el.html('<app-main/>')
            // }
        })

        return HomeView
    }

})