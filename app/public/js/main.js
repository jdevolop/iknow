const css = {};

css.switch = (elem,atoken,btoken) => {
    
    elem.classList.replace(atoken,btoken);
    
}

const Search = (elem) => {

    SPA.request("POST", "/api/wiki/search", JSON.stringify({ query: elem.value }), (res) => {

            let response = JSON.parse(res);

            let sectionr = document.querySelector(".posts");

            let main = document.createElement("div");

            let ha = document.createElement("h1");

            main.appendChild(ha);

            ha.innerHTML = response.resp.titles[0];

            let des = document.createElement("div");

            main.appendChild(des);

            sectionr.appendChild(main);

            response.resp.body.forEach((item,i) => {
                des.innerHTML +=  item;
            });

    });

    SPA.request("POST", "/api/aws/search", JSON.stringify({ query: elem.value }), (res) => {

        let response = JSON.parse(res);

        let sectionr = document.querySelector(".posts");

        response.data.forEach((item,i) => {

            let main = document.createElement("div");

            let img = document.createElement("img");

            main.appendChild(img);

            let ha = document.createElement("h1");

            main.appendChild(ha);

            ha.innerHTML = item.name;

            let des = document.createElement("div");

            main.appendChild(des);

            sectionr.appendChild(main);

            des.innerHTML = item.description;

            console.log(item.photos);

            if(item.photos != undefined){

            item.photos.data.forEach((iteme,i) => {

                SPA.request("POST", "/api/fb/images", JSON.stringify({ id: iteme.id }), (resp) => {

                    resp.data.images.forEach((aitem,i) => {

                        img.src = aitem.source;

                    });

                });

            });

            }
            
        });
    });
}