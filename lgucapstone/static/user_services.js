// Select all labels with the class 'header-menu-item'
const menuItems = document.querySelectorAll('.header-menu-item');

// Add a click event to each label
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove 'selected' class from all items
    menuItems.forEach(label => label.classList.remove('selected'));

    // Add 'selected' class to the clicked item
    item.classList.add('selected');
  });
});
