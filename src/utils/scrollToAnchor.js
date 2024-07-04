export function scrollToAnchor(anchor) {
    const element = document.getElementById(anchor);
    if (element) {
        element.scrollIntoView({behavior: "smooth"});
    }
}