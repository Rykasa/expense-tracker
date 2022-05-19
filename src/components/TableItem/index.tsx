import * as C from './styles'

import { Item } from "../../types/Item"
import { categories } from '../../data/categories'
import { formatDate } from '../../helpers/dateFilter'

type TableItemProps = {
  item: Item
}

export function TableItem({item}: TableItemProps){
  return(
    <tr>
      <C.TableLine>{formatDate(item.date)}</C.TableLine>
      <C.TableLine >
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>
      </C.TableLine>
      <C.TableLine>{item.title}</C.TableLine>
      <C.TableLine>
        <C.Value color={categories[item.category].expense ? '#A44A3F' : '#2A7F62'}>
          R$ {item.value}
        </C.Value>
      </C.TableLine>
    </tr>
  )
}