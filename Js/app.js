

// sidebar

let sidebarBtn = document. querySelector(".sidebarBtn");
let sidebar = document. querySelector('.sidebar')

function opensidebar(){
  sidebar.classList.add('active');
    
}


sidebarBtn.addEventListener('click', opensidebar);



let crossBtn = document.querySelector(".crossBtn");

function closesidebar (event){

    if (
        event.target.classList.contains("sidebar")||
        event.target.classList.contains('bi')
    ) {
        sidebar.classList.remove("active");
    }

}

crossBtn.addEventListener("click", closesidebar);

sidebar.addEventListener("click", closesidebar);
