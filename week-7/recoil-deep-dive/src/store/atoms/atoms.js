import axios from "axios";
import { atom, selector } from "recoil";

export const dataAtom = atom({
  key: 'dataAtom',
  default: selector({
    key: 'dataAtomSelector',
    get: async () => {
      const res = await axios.get('https://sum-server.100xdevs.com/notifications')
      return res.data
    }
  })
})
