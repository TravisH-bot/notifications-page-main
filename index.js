const unread = document.querySelectorAll(".unread");
const unreadCount = document.getElementById("num-of-notif");
const markAllAsRead = document.getElementById("mark");

unreadCount.innerText = unread.length;

unread.forEach((message) => {
  message.addEventListener("click", () => {
    message.classList.remove("unread");
    const newUnreadMessage = document.querySelectorAll(".unread");
    unreadCount.innerText = newUnreadMessage.length;
  });
});

markAllAsRead.addEventListener("click", () => {
  unread.forEach((message) => {
    message.classList.remove("unread");
  });
  const newUnreadMessage = document.querySelectorAll(".unread");
  unreadCount.innerText = newUnreadMessage.length;
});
