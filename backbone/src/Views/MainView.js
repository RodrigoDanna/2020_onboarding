define([
    'backbone',
], (Backbone) => {

    return () => {
        const MainView = Backbone.View.extend({
            el: 'root',
            initialize: () => {
                return this.$el.html('<app-main/>')
            }
        })

        return MainView
    }

})