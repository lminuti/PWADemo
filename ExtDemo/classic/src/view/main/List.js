/**
 * This view is an example list of people.
 */
Ext.define('ExtDemo.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'ExtDemo.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'First name',  dataIndex: 'FIRST_NAME', flex: 1, editor: { xtype: 'textfield', allowBlank: false } },
        { text: 'Last name', dataIndex: 'LAST_NAME', flex: 1, editor: { xtype: 'textfield', allowBlank: false } },
        { text: 'Phone ext.', dataIndex: 'PHONE_EXT', flex: 1, editor: 'numberfield' },
        { text: 'Hire date', dataIndex: 'HIRE_DATE', flex: 1, xtype:'datecolumn', format:'d/m/Y', editor: { xtype: 'datefield', allowBlank: false } },
        { text: 'Salary', dataIndex: 'SALARY', flex: 1, xtype: 'numbercolumn', format:'0.00', align: 'right' }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
