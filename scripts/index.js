/**
 * Created by zf on 2017-03-19.
 */
Ext.onReady(function(){
    var store = Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: false,
            children: [
                { text: "detention", leaf: true },
                { text: "homework", expanded: true, children: [
                    { text: "book report", leaf: true },
                    { text: "alegrbra", leaf: true}
                ] },
                { text: "buy lottery tickets", leaf: true },
                {text:"aaaa",expanded:true,children:[
                    {text: "1",leaf:true},
                    {text: "1",leaf:true}
                ]}
            ]
        }
    });

    Ext.create('Ext.tree.Panel', {
        title: '简单树',
        frame:true,

        store: store,
        rootVisible: false,
        renderTo: Ext.getBody()
    });

});
