function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }

    // Close sidebar on mobile after clicking a nav link
    const sidebar = document.getElementById("cpb-sidebar");
    const hamburger = document.getElementById("cpb-hamburger");
    if (window.innerWidth <= 900 && sidebar && hamburger) {
        sidebar.classList.remove("active");
        document.body.classList.remove("cpb-sidebar-open");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("cpb-hamburger");
    const sidebar = document.getElementById("cpb-sidebar");

    if (hamburger && sidebar) {
        hamburger.addEventListener("click", function(e) {
            e.stopPropagation();
            sidebar.classList.toggle("active");
            document.body.classList.toggle("cpb-sidebar-open");
        });

        document.addEventListener("click", function(e) {
            if (
                sidebar.classList.contains("active") &&
                !sidebar.contains(e.target) &&
                !hamburger.contains(e.target)
            ) {
                sidebar.classList.remove("active");
                document.body.classList.remove("cpb-sidebar-open");
            }
        });
    }
});

