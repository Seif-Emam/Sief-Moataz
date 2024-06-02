

function validateInput(ele) {
  var regex = {
      SiteName: /^[a-zA-Z\s'-]+$/,
      SiteUrl: /^(https?:\/\/)[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+([\/a-zA-Z0-9#?&=.-]*)?$/
  };
  console.log(ele)

  if (regex[ele.id].test(ele.value) ) {
      ele.classList.add('is-valid');
      ele.classList.remove('is-invalid');
      return true;
  } else {
      ele.classList.add('is-invalid');
      ele.classList.remove('is-valid');
      return false;
  }
}



function validateAllInputs() {
  var isNameValid = validateInput(websiteNameInput);
  var isUrlValid = validateInput(websiteUrlInput);
  return isNameValid && isUrlValid;
}


function check(){
  
  var errorModal = document.getElementById("box-pop");

  errorModal.classList.remove("d-none");    

}
var btnid=document.getElementById('submit');

  function  addBookmarker() {
  if (!validateAllInputs()) {
    check();    
    return;
  }

  var add = {
      name: websiteNameInput.value,
      url: websiteUrlInput.value
  };

  clearForm();
  bookmarksContainer.push(add);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarksContainer));
  displayBookmarks();

  console.log(bookmarksContainer);
}

function clearForm() {
  websiteNameInput.value = null;
  websiteUrlInput.value = null;
}


var websiteNameInput = document.getElementById('SiteName');
var websiteUrlInput = document.getElementById('SiteUrl');

var bookmarksContainer;
if (localStorage.getItem('bookmarks') == null) {
  bookmarksContainer = [];
} else {
  bookmarksContainer = JSON.parse(localStorage.getItem('bookmarks'));
  displayBookmarks();
}

function displayBookmarks() {
  var cartonta = '';
  for (var i = 0; i < bookmarksContainer.length; i++) {
      cartonta += `<div class="container">
      <div class="Div-Operation row">
          <div class="col-2 text-capitalize text-center">
              <h2 id="index">${i + 1} </h2>
          </div>
          <div class="col-4 text-capitalize text-center">
              <h2 id="Website-name"> ${bookmarksContainer[i].name} </h2>
          </div>
          <div class="col-3 text-capitalize text-center">
              <a id="Link" class="btn Link" href="${bookmarksContainer[i].url}" role="button"><i class="fa-solid fa-eye"></i> Visit</a>
          </div>
          <div class="col-3 text-capitalize text-center">
              <button id="Delete" onclick='deleteBookmarks(${i})' class="btn delete"><i class="fa-solid fa-trash"></i> Delete</button>
          </div>
      </div>
      </div>`;
  }

  console.log(cartonta);
  document.getElementById('MyRow').innerHTML = cartonta;
}

function deleteBookmarks(index) {
  console.log(bookmarksContainer);
  bookmarksContainer.splice(index, 1);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarksContainer));
  console.log(bookmarksContainer);

  displayBookmarks();
}





document.addEventListener("DOMContentLoaded", function() {
  var closeBtn = document.getElementById("closeBtn");
  var errorModal = document.getElementById("box-pop");

  closeBtn.addEventListener("click", function() {
      errorModal.style.display = "none";
  });
});