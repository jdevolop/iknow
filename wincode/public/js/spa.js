// Single Page Application
const SPA = {};

// Application Core
SPA.core = {

    vars:{

        i:1,

        cssi:0,

        int:0,

        cssArr:[]

    },

    outervars:{},

    save:(id,value) => {

        if (typeof SPA.core.storage == "object") {

            SPA.core.storage[id] = value;

        }

        else {

            SPA.core.storage = {}

            SPA.core.save(id,value);

        }
        
    },

    log:(text) => {

        if ( SPA.core.vars.i == 1 ) { SPA.core.save("log", ""); }

        if ( Array.isArray(SPA.core.get("log")) ) {

            let arr = SPA.core.get("log");
            
            arr[arr.length] = Date() + ": " + text;

            SPA.core.save("log",arr);

        }

        else {

            let arr = [];

            SPA.core.save("log",arr);

            SPA.core.vars.i = 0;

            SPA.core.log(text);

        }

    },

    delete:(id) => {

        delete SPA.core.storage[id];
        
    },

    get:(id) => {

        return SPA.core.storage[id] ;
        
    },

    exit:() => {

        localStorage.SPA = JSON.stringify({ core:SPA.core.storage });

    },

    func:{

        ajax:({ url, method, data }) => {

            let xhttp = new XMLHttpRequest();

                xhttp.open(method, url, SPA.config.application.async);

                if ( method == "GET" ) { xhttp.send(null); }

                else if ( method == "POST" ) { xhttp.send(data); }

            return xhttp;

        },

        ess:() => {},

        ws:() => {

            let _ws = new WebSocket(url);

            return _ws;

        },

        getInt:() => {

            return SPA.core.vars.int++;

        },

        css:(obj) => {

            if ( SPA.core.vars.cssi ) {

                if (true) {

                    let style = SPA.core.vars.css;

                    for( let key in obj){

                            for( let gh in obj[key]){

                                if (style.sheet.cssRules.item(SPA.core.vars.css[key]) != null) {

                                    style.sheet.cssRules.item(SPA.core.vars.css[key]).style[gh] = obj[key][gh];

                                    console.log(style.sheet.cssRules.item(key));

                                }
                                
                                else {

                                    style.sheet.addRule(key);

                                    SPA.core.vars.cssArr[key] = SPA.core.func.getInt();
    
                                    SPA.core.func.css(obj);
    
                                }

                            }

                    }

                    return null;

                }

            }

            else {

                let style = document.createElement("style");

                    style.setAttribute("design","");

                    style.setAttribute("version","1.0");

                    style.setAttribute("application","javascript/css");

                document.head.appendChild(style);

                SPA.core.vars.css = style;

                SPA.core.vars.cssi = 1;

                SPA.core.func.css(obj);
            
            }
        }
    }

};

// Application config
SPA.config = {

    document:{

        title:"test",

        favicon:"icon.ico",

    },

    application:{

        async:true,

        auto:{

            loging:true,

        }
    }

}

// Application info
SPA.info = {

    version:"1.0.0",

    type:"Single Page Application",

    name:"",

    copyright:""

}

// Database
SPA.database = () => {}

// Request
SPA.request = ( method, url, data = null, response ) => {

    let x = SPA.core.func.ajax({ url, method, data});

    x.onreadystatechange = () => {

        if (x.readyState == 4) {

            response(x.response);
            
        }

    }

}

// Open
SPA.open = ( {url, elem } ) => {

    let method = "GET";

    SPA.request(method, url, null, (res) => {

	    elem.innerHTML = res;

    });

}

// Load
SPA.load = ( {url, varible } ) => {

    let method = "GET";

    SPA.request(method, url, null, (res) => {

	    SPA.core.outervars[varible] = res;

    });

}

// Real Time
SPA.realTime = () => {

    let x = SPA.core.func.ws;

}

// Template

SPA.template = () => {}

