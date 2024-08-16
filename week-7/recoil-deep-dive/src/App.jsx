import { RecoilRoot, useRecoilValue } from 'recoil'
import { dataAtom } from "./store/atoms/atoms"
import { totalNotificationsSelector } from "./store/selectors/selectors"

export default function App() {
  return (
    <RecoilRoot>
      <Appbar />
    </RecoilRoot>
  )
}

function Appbar() {

  const data = useRecoilValue(dataAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationsSelector)

  return (
    <div>
      <div>My network {data?.network}</div>
      <div>Jobs {data?.jobs}</div>
      <div>Messaging {data?.messaging}</div>
      <div>Notifications {data?.notifications}</div>

      <div>Total notifications: {totalNotificationCount}</div>

      {/* <button onClick={() => handle}>New Data!</button> */}
    </div>
  )
}
