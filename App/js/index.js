xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout5")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "size":100,
                        "min":50,
                        "max":400,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    },
                    {
                        "id":"main",
                        "min":10,
                        "size":450
                    },
                    {
                        "id":"after",
                        "pos":"after",
                        "size":50,
                        "min":20,
                        "max":400,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    }
                ])
            );
            
            host.ctl_layout5.append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout13")
                .setItems([
                    {
                        "id":"before",
                        "size":150,
                        "min":10,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":true,
                        "pos":"before"
                    },
                    {
                        "id":"main",
                        "size":530,
                        "min":10
                    },
                    {
                        "id":"after",
                        "size":120,
                        "min":10,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false,
                        "pos":"after"
                    }
                ])
                .setType("horizontal"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton3")
                .setLeft("3.0476190476190474em")
                .setTop("4.571428571428571em")
                .setCaption("Start CPU Benchmark"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.ProgressBar")
                .setHost(host,"xui_ui_progressbar2")
                .setLeft("2.2857142857142856em")
                .setTop("8.380952380952381em"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.ToolBar")
                .setHost(host,"xui_ui_toolbar14")
                .setItems([
                    {
                        "id":"grp1",
                        "sub":[
                            {
                                "id":"a1",
                                "caption":"Settings"
                            },
                            {
                                "id":"a2",
                                "type":"split"
                            },
                            {
                                "id":"a3",
                                "caption":"drop button",
                                "type":"dropButton"
                            },
                            {
                                "id":"a4",
                                "caption":"status button",
                                "type":"statusButton"
                            }
                        ],
                        "caption":"grp1"
                    },
                    {
                        "id":"grp2",
                        "sub":[
                            {
                                "id":"b1",
                                "imageClass":"xui-icon-xui",
                                "caption":""
                            },
                            {
                                "id":"b2",
                                "caption":"image button",
                                "label":"label:",
                                "imageClass":"xui-icon-xui"
                            }
                        ],
                        "caption":"grp2"
                    }
                ]),
                "main"
            );
            
            host.ctl_layout5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label8")
                .setLeft("8.380952380952381em")
                .setTop("3.8095238095238093em")
                .setWidth("21.485714285714284em")
                .setHeight("1.980952380952381em")
                .setCaption("PORT Network Benchmark Tool"),
                "before"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});