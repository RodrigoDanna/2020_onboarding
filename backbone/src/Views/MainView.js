define([
    'backbone',
], (Backbone) => {

    return () => {
        const MainView = Backbone.View.extend({
            el: $('#main'),
            render: function () {
                this.$el.html('<app-main/>')
            },
        })

        return MainView
    }

})