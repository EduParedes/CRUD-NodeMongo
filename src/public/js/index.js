console.log('Working');
const btnDelete = document.getElementById('delete-menu');
btnDelete.addEventListener("click",deleteMenu);

function deleteMenu(){
  if (confirm("Are you sure do you want to delete this menu?")){
    return
  }
}