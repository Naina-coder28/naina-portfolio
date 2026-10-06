document.addEventListener("DOMContentLoaded", function () {

    const themeToggle = document.getElementById("theme-toggle");

    // Check if a theme was already saved
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        themeToggle.textContent = "☀️ Light Mode";
    }

    themeToggle.addEventListener("click", function () {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        if (currentTheme === "dark") {

            document.documentElement.removeAttribute("data-theme");

            localStorage.setItem("theme", "light");

            themeToggle.textContent = "🌙 Dark Mode";

        } else {

            document.documentElement.setAttribute("data-theme", "dark");

            localStorage.setItem("theme", "dark");

            themeToggle.textContent = "☀️ Light Mode";
        }

    });

});
