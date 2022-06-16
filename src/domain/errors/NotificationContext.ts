export default class NotificationContext {
  notications: string[]

  constructor() {
    this.notications = []
  }

  hasNotifications() {
    return this.notications.length > 0
  }

  addNotification(notication: string) {
    this.notications.push(notication)
  }

  setNotification(notication: Array<any>) {
    this.notications = notication
  }

  getNotifications() {
    return this.notications
  }
}
