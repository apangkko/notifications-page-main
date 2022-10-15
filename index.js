const unread = document.querySelectorAll(".unread");
const notification = document.querySelectorAll(".notification");
const unreadCount = document.querySelector(".noti__unread_count");
const markUnread = document.querySelector(".markall__asread");

unreadCount.innerHTML = unread.length;

markUnread.addEventListener("click", () => {
    unread.forEach(noti => {
        noti.classList.remove("unread");
    });
    const unreadCheck = document.querySelectorAll(".unread");
    unreadCount.innerHTML = unreadCheck.length;
})

notification.forEach(noti => {
    noti.addEventListener("click", () => {
        noti.classList.remove("unread");
        const unreadCheck = document.querySelectorAll(".unread");
        unreadCount.innerHTML = unreadCheck.length;
    })
});