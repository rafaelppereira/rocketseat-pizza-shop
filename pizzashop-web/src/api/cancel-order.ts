import { api } from '@/lib/axios'

export interface CancelOrderParams {
  orderId: string
}

export async function canceOrder({ orderId }: CancelOrderParams) {
  await api.patch(`/orders/${orderId}/cancel`)
}
