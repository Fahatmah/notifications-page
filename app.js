const notification = {
  notificationCountElement: document.querySelector('.notification-span'),
  markAllAsreadBtn: document.querySelector('[data-readl-all-notif]'),
  items: document.querySelectorAll('.notification-items .item.active'),
  isActive: true,
  count: 0,

  init() {
    this.markAllAsreadBtn.addEventListener(
      'click',
      this.readAllNotifications.bind(this)
    )
  },

  readAllNotifications() {
    if (this.isActive) {
      this.items.forEach((item) => item.classList.remove('active'))
      this.notificationCountElement.textContent = this.count
    }
  },
}

notification.init()
