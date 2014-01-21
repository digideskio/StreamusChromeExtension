define([
    'foreground/view/genericForegroundView',
    'text!template/saveStreamButton.html',
    'foreground/model/streamAction'
], function (GenericForegroundView, SaveStreamButtonTemplate, StreamAction) {
    'use strict';

    //  TODO: This is called SaveStream but then the dialog which opens is SaveVideos -- can I be more clear?
    var SaveStreamButtonView = GenericForegroundView.extend({

        tagName: 'button',

        className: 'button-icon button-small save',
                                
        template: _.template(SaveStreamButtonTemplate),

        attributes: {
            title: chrome.i18n.getMessage('saveStream')
        },
        
        events: {
            'click': 'saveStream'
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        saveStream: function () {
            StreamAction.saveStream();
        }
        
    });
    
    return SaveStreamButtonView;
});