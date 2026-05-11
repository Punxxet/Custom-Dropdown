const dropdown = document.querySelector('.dropdown--trigger');
const dropdownList = document.querySelector('.dropdown--list');
const listItem = document.querySelectorAll('.dropdown-list-item');
const dropDownSelected = document.querySelector('.dropdown-selected');
const arrowIcon =
  document.querySelector('.dropdown--trigger span:last-child');


function showOptions(){
    dropdownList.style.display = 'flex';
}

let isOpen = false;
function toggleDropdown() {
    isOpen = !isOpen;
    dropdownList.style.display = isOpen ? 'flex' : 'none';

    arrowIcon.classList.toggle('fa-angle-down',!isOpen);
    arrowIcon.classList.toggle('fa-angle-up', isOpen);
}


function closeOptions(){
    dropdownList.style.display = 'none';
}
function selectItem(e){
    // console.log(e.target.textContent);
    const item = e.currentTarget

    // remove old selection + icons
    listItem.forEach(item =>{
        const icon = item.querySelector('span');
        if(icon) icon.remove('fa-solid fa-check');
    })

    // adding new selection 
    dropDownSelected.textContent = item.textContent;
    const span = document.createElement('span');
    span.className = 'fa-solid fa-check';
    e.target.appendChild(span);
    
    // Close DropDown
    dropdownList.style.display = 'none';
    isOpen = false;

    // changing the icon
    arrowIcon.classList.toggle('fa-angle-down',!isOpen);
    arrowIcon.classList.toggle('fa-angle-up', isOpen);

}

// Event Listeners

dropdown.addEventListener('click',toggleDropdown);

listItem.forEach(item => {
    item.addEventListener('click',selectItem)
});