const sidebarOptions = document.getElementById('sidebar-options');
const sidebarItems = sidebarOptions.getElementsByTagName('li');

addSidebarItemsClickEvent()

function addSidebarItemsClickEvent() {
    for (const item of sidebarItems) {
        item.addEventListener('click', function () {
            cleanSelectedOption()
            item.classList.add('active');
            showSelectedContent(item)
        });
    }
}

function cleanSelectedOption() {
    for (const item of sidebarItems) {
        item.classList.remove('active');
    }
}

function showSelectedContent(item) {
    cleanSelectedContent()

    const contentId = item.id.replace("-option", "")
    const contentSection = document.getElementById(contentId)

    contentSection.classList.add("active")
}

function cleanSelectedContent() {
    const contentSections = document.getElementsByClassName("content-section");
    for (const section of contentSections) {
        section.classList.remove("active");
    }
}










