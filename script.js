document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('nav ul li a');

    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#333';
        });

        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });

    const submenuItems = document.querySelectorAll('nav ul li ul li a');
    
    submenuItems.forEach(subitem => {
        subitem.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#666';
        });

        subitem.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });
});
function openLab(evt, labName) {
    var i, tabcontent, tablinks;
    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Remove the "active" class from all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the selected tab and add an "active" class to the clicked tab link
    document.getElementById(labName).style.display = "block";
    evt.currentTarget.className += " active";
  }
