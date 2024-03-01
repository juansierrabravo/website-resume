const sidebarOptions = document.getElementById('sidebar-options');
const sidebarItems = sidebarOptions.getElementsByTagName('li');

addSidebarItemsClickEvent();

function addSidebarItemsClickEvent() {
    for (const item of sidebarItems) {
        item.addEventListener('click', function () {
            cleanSelectedSidebarOption();
            item.classList.add('active');
            showSelectedContent(item);
        });
    }
}

function cleanSelectedSidebarOption() {
    for (const item of sidebarItems) {
        item.classList.remove('active');
    }
}

function showSelectedContent(item) {
    cleanSelectedContent();

    const contentId = item.id.replace("-option", "");
    const contentSection = document.getElementById(contentId);

    contentSection.classList.add("active");
}

function cleanSelectedContent() {
    const contentSections = document.getElementsByClassName("content-section");
    for (const section of contentSections) {
        section.classList.remove("active");
    }
}


const skillsOptions = document.getElementById('skills-options');
const skillsItems = skillsOptions.getElementsByTagName('li');

addSkillsOptionsEvent();

function addSkillsOptionsEvent() {
    for (const item of skillsItems) {
        item.addEventListener('click', function () {
            cleanSelectedSkillOption();
            item.classList.add('active');
            showSelectedSkills(item);
        });
    }
}

function cleanSelectedSkillOption() {
    for (const item of skillsItems) {
        item.classList.remove('active');
    }
}

function showSelectedSkills(item) {
    cleanSelectedSKills();

    const skillsId = item.id.replace("option", "content");
    const skillsContainer = document.getElementById(skillsId);

    skillsContainer.classList.add("active");
}

function cleanSelectedSKills() {
    const skillsContent = document.getElementsByClassName("skill-content");
    for (const content of skillsContent) {
        content.classList.remove("active");
    }
}

const openSidebarButton = document.getElementById("open-sidebar-button");
openSidebarButton.addEventListener("click", () => {
    document.getElementById("sidebar").classList.remove("collapse");
    document.getElementById("content").classList.remove("expand");
    openSidebarButton.classList.add("hide");
});

const closeSidebarButton = document.getElementById("close-sidebar-button");
closeSidebarButton.addEventListener("click", () => {
    document.getElementById("sidebar").classList.add("collapse");
    document.getElementById("content").classList.add("expand");
    openSidebarButton.classList.remove("hide");
});