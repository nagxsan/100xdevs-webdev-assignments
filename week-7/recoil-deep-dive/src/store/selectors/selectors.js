import { selector } from "recoil";
import { dataAtom } from "../atoms/atoms";

export const totalNotificationsSelector = selector({
  key: 'totalNotificationsSelector',
  get: ({get}) => {
    const data = get(dataAtom)
    var totalNotificationCount = 0
    for (const notif in data) {
      totalNotificationCount += data[notif]
    }
    return totalNotificationCount
  }
})
