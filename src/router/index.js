import Products from '../components/views/Product'
import Item_details from '../components/views/Item_details'
export const routes=[
  {
    path: '',
    component: Products
  },
  {
    path: '/item/:id',
    component: Item_details
  }
]
