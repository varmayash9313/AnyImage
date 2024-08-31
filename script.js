//========= NAV-BAR =========

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


const accessKey =  "pPiSSl6z8-C9QANa1HCDGBOYdh7PddxWmqwahE1qVBE";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const seachResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData =""
let page = 1;


async function searchImages(){
  inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const response  = await fetch(url);
    const data = await response.json();
    const results = data.results;
    console.log(results)

    if (page === 1){
        seachResults.innerHTML = "";
    }

    
// ======Validating Search Results======
    if(results.length === 0){
       alert("sorry!!! no Image Found.")
       const imageWrapper = document.createElement('div')
       imageWrapper.classList.add('no-result');
       const noResult = document.createElement('h2')
       noResult.style.color = 'red'
       noResult.innerHTML = `No Result Found for '${inputData}'`

       imageWrapper.appendChild(noResult);
       seachResults.appendChild(imageWrapper);
    }
    else{
        results.map((result) =>{
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('search-result');
        
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        image.loading ="lazy"
        if(result.alt_description.length >= 19){
            var alt_des_short = result.alt_description.substring(0,20)+" ......"
            imageLink.textContent = alt_des_short;
        }
        else{
          imageLink.textContent = result.alt_description;
        }

        const downloadButton = document.createElement('a');
            downloadButton.href = result.urls.full; // Direct link to the image
            downloadButton.download = `${result.alt_description || 'image'}+.jpg`; // Default file name
            downloadButton.classList.add('download-button');
            downloadButton.textContent = 'Download';


            downloadButton.addEventListener('click', function (event) {
              event.preventDefault();
              fetch(result.urls.full)
                  .then(response => response.blob())
                  .then(blob => {
                      const url = window.URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.style.display = 'none';
                      a.href = url;
                      a.download = `${result.alt_description || 'image'}.jpg`;
                      document.body.appendChild(a);
                      a.click();
                      window.URL.revokeObjectURL(url);
                  })
                  .catch(() => alert('Failed to download image.'));
          });
      
        

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        imageWrapper.appendChild(downloadButton);
        seachResults.appendChild(imageWrapper);
    });}



    page++
    if(page > 1) {
        showMore.style.display = "block";

    }

}

formEl.addEventListener("submit", (event) =>{
    event.preventDefault();
        page = 1;
        searchImages();

});

showMore.addEventListener("click", () =>{
    searchImages();
    // alert('clicked')
 

});

