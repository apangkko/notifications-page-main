const unread = document.querySelectorAll(".unread");
const unreadCount = document.querySelector(".noti__unread_count");
const markUnread = document.querySelector(".markall__asread");

unreadCount.innerHTML = unread.length;

markUnread.addEventListener("click", () => {
    unread.forEach(element => {
        element.classList.remove("unread");
    });

    unreadCount.innerHTML = 0;
})