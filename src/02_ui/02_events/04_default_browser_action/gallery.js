const thumbs = document.getElementById("thumbs");
const largeImg = document.getElementById("largeImg");
thumbs.addEventListener("click", event => {
    const target = event.target.closest("a");
    if (!target)
        return;
    event.preventDefault();
    const href = target.href;
    const title = target.title;
    if (!href || !title)
        return;
    largeImg.src = href;
    largeImg.title = title;
});
