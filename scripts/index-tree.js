/**
 * Created by zf on 2017-03-19.
 */
Ext.require([
    'Ext.tree.*',
    'Ext.data.*',
    'Ext.window.MessageBox'
]);
Ext.onReady(function(){
    var store = Ext.create('Ext.data.TreeStore',{
        proxy:{
            type:'ajax',
            url:'./json/check-nodes.json',
            autoLoad:true
        }/*,
        sorters:[{
            property:'leaf',
            direction:'ASC'
        },{
            property:'text',
            direction:'ASC'
        }]*/
    });
    var tree=Ext.create('Ext.tree.Panel',{
        store:store,
        rootVisible:true,
        useArrows:true,
        frame:true,
        title:'Check Tree',
        renderTo:Ext.getBody(),
        width:200,
        height:250,
        dockedItems:[{
            xtype:'toolbar',
            items:{
                text:'Get checkedssddsdddssdd nodes',
                handler:function(){
                    var records=tree.getView().getChecked(),
                        names=[];
                    Ext.Array.each(records,function(rec){
                        names.push(rec.get('text'));
                    });
                    Ext.MessageBox.show({
                        title:'Selected Nodes',
                        msg:names.join('<br />'),
                        icon:Ext.MessageBox.INFO
                    });
                }

            }
        }]
    });

});
