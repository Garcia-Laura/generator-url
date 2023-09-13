"use strict"

const input = document.querySelector(".js_input");
const text = document.querySelector(".js_text");
const button = document.querySelector(".js_button");
const result = document.querySelector(".js_result");
const reset = document.querySelector(".js-reset");
const inputValue = input.value;
const textValue = text.value;



function showUrl(){
    reset.classList.remove("hidden");
    button.classList.add("hidden")
const inputValue = input.value;
 const textValue = text.value;

 if (textValue === "" || inputValue ===""){

result.innerHTML=`Por favor rellene ambos campos`
 }else{
    result.innerHTML =`<ul>
<li class="list"> <p class="net"><strong>Linkedin:</strong></p>  <a class="break"> https://www.linkedin.com/sharing/share-offsite/?url=${inputValue}</a> </li>



<li class="list"><p class="net"><strong>Twitter</strong></p> <a class="break">https://twitter.com/intent/tweet?url=${inputValue}&original_referer=${inputValue}&text=${textValue}&ref_src=twsrc</a></li>
<li class="list"><p class="net"><strong>Facebook : </p></strong> <a class="break">https://www.facebook.com/sharer/sharer.php?u=${inputValue}&amp;quote=`+ textValue +`</a></li>
<li class="list"><p class="net"><strong>Whatsapp:</strong></p> <a class="break">https://api.whatsapp.com/send?text=${textValue}</a></li>
<li class="list"><p class="net"><strong>Telegram:</strong></p> <a class="break">https://telegram.me/share/url?url=${inputValue}&text=${textValue}</a></li>
</ul>`;
 }


}

function handleClickResults(ev){
    ev.preventDefault();
    showUrl();
    
    }

function handleReset() {

 result.innerHTML= "";
 reset.classList.add("hidden");
 button.classList.remove("hidden");
 input.value="";
 text.value="";

}


button.addEventListener("click", handleClickResults);
reset.addEventListener("click", handleReset);