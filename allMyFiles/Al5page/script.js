document.addEventListener('DOMContentLoaded', function() {
    var loadingOverlay = document.getElementById('loading');
    if (loadingOverlay) {
        setTimeout(function() {
            loadingOverlay.classList.add('hidden');
        }, 375); // Ajuste o tempo conforme necessário
    }
});

function filterSites() {
    var input, filter, containers, sites, titles, i, j, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    containers = document.getElementsByClassName('container');
    for (j = 0; j < containers.length; j++) {
        sites = containers[j].getElementsByClassName('site-preview');
        for (i = 0; i < sites.length; i++) {
            title = sites[i].querySelector('.site-title');
            txtValue = title.textContent || title.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                sites[i].style.display = "";
            } else {
                sites[i].style.display = "none";
            }
        }    
    }
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('mouseover', function(){
    searchInput.style.animation = 'searchInputMouseEnter 0.8s forwards'
});

searchInput.addEventListener('mouseleave', function(){
    searchInput.style.animation = 'searchInputMouseLeave 0.8s forwards'
   
});