import dayjs from 'dayjs'

interface Expense {
  id: string,
  amount: number,
  created_at: string,
  category: string
}
interface Prop {
  data: Expense
}

export const Expense = ({ data }: Prop) => {
  return (
    <div className="px-5 py-3 border border-white text-white flex justify-between my-3">
      <div className="">
        <p>
          <span className="">Monto: </span>
          <span>{data.amount} </span>
        </p>
        <p>
          <span>Fecha: </span>
          <span>{dayjs(data.created_at).format('YYYY-MM-DD hh:mm')}</span>
        </p>
      </div>
      <div>
        <p> {data.category} </p>
      </div>
    </div>
  )
}

