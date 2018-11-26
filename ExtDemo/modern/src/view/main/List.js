/**
 * This view is an example list of people.
 */
Ext.define('ExtDemo.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'ExtDemo.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [{ 
        text: 'Name',
        dataIndex: 'FIRST_NAME',
        width: 100,
        cell: {
            userCls: 'bold'
        }
    }, {
        text: 'Last',
        dataIndex: 'LAST_NAME',
        width: 230 
    }, { 
        text: 'Phone',
        dataIndex: 'PHONE_EXT',
        width: 150 
    }],

    listeners: {
        select: 'onItemSelected'
    }
});
