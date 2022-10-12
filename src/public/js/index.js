const btnDelete = document.getElementById('delete-menu');

function deleteMenu(e){
  e.preventDefault();
  const id = btnDelete.dataset.id;
  const currentUrl = window.location.href;
  if(confirm('Are you sure do you want to delete this menu')){
    fetch(`${currentUrl}/delete/${id}`,
    {
      method:'DELETE'
    })
    .then(res=>window.location.replace(currentUrl))
    .catch(err=>console.log(err))
  }
}

if (btnDelete){
  btnDelete.addEventListener("click",deleteMenu);
}


