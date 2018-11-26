/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ExtDemo.Application',

    name: 'ExtDemo',

    requires: [
        // This will automatically load all classes in the ExtDemo namespace
        // so that application classes do not need to require each other.
        'ExtDemo.*',
        'Ext.data.proxy.*'
    ],

    // The name of the initial view to create.
    mainView: 'ExtDemo.view.main.Main'
});
