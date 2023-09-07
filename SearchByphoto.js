//https://api.unsplash.com/search/photos?page=1&query=car&client_id=RLwobsJNMr8FNibUGNt6VWqgE7h8375yiUwiwDbfVl0

const input=document.getElementById("input");
const searchbtn=document.getElementById("searchbtn");
const loadmore=document.getElementById("loadmore");
const photocntainer=document.getElementById("photocntainer");
const resultobjects=[];

function getData(){

    const alldata=[];
    const inputvalue=input.value;
  
    const url=`https://api.unsplash.com/search/photos?page=1&query=${inputvalue}&client_id=RLwobsJNMr8FNibUGNt6VWqgE7h8375yiUwiwDbfVl0`;
    //const url="https://api.unsplash.com/search/photos?page=1&query=car&client_id=RLwobsJNMr8FNibUGNt6VWqgE7h8375yiUwiwDbfVl0";

    
    const promise=fetch(url);

    promise.then((res)=>res.json()).then((data)=>{
        data.results.map((el)=>{
            alldata.push(el);
        })
        alldata.map((el)=>{
            const resultobject={
                "photo":el.urls.raw,
                "description":el.alt_description
            }
            resultobjects.push(resultobject);
        })
      
        resultobjects.map((res)=>{
            console.log(res);
            createresultcontainer(res);
        })

    });
  }

  function createresultcontainer(res){
//    console.log(res);
   const resultcard=document.createElement("div");
   resultcard.classList.add("resultcard");
   const imgel=document.createElement("img");
   const desc=document.createElement("p");

   imgel.src=res.photo;
   desc.innerText=res.description;
   resultcard.appendChild(imgel);
  resultcard.appendChild( desc);

  photocntainer.appendChild(resultcard);

  }
let n=1;
  function getmoreData(){
     n++;
    const alldata=[];
    const inputvalue=input.value;
  
    const url=`https://api.unsplash.com/search/photos?page=${n}&query=${inputvalue}&client_id=RLwobsJNMr8FNibUGNt6VWqgE7h8375yiUwiwDbfVl0`;
    //const url="https://api.unsplash.com/search/photos?page=1&query=car&client_id=RLwobsJNMr8FNibUGNt6VWqgE7h8375yiUwiwDbfVl0";

    
    const promise=fetch(url);

    promise.then((res)=>res.json()).then((data)=>{
        data.results.map((el)=>{
            alldata.push(el);
        })
        alldata.map((el)=>{
            const resultobject={
                "photo":el.urls.raw,
                "description":el.alt_description
            }
            resultobjects.push(resultobject);
        })
      
        resultobjects.map((res)=>{
            console.log(res);
            createresultcontainer(res);
        })

    });
  }

searchbtn.addEventListener("click",getData);

loadmore.addEventListener("click",getmoreData)