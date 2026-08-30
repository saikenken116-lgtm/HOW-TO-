// document.querySelector("#title").textContent = "DOM Manipulation Example";
// document.querySelector("#title").innerHTML = "<h1>yooo</h1>";

const arr = ["success comes from consistancy",
     "pratice make perfect",
      "believe in yourself",
       "never stop learning",
        "dream big and work hard"]
function random(){
         const randomIndex = Math.floor(Math.random() * arr.length);
            const randomarr = arr[randomIndex];

            document.getElementById('itemResult').textContent = randomarr;
}