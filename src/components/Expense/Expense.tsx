interface Expense {
  id: string,
  amount: number,
  description?: string,
  created_at: string,
  category: string
}
interface Prop {
  data: Expense
}

export const Expense = ({ data }: Prop) => {
  return (
    <div className="box flex justify-between my-3">
      <div className="flex">
        <div className='mr-2 self-center'>
          <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
        </div>
        <div>
          <p className=''> {data.category} </p>
          <p className='text-sm'> {data.description} </p>
        </div>
      </div>
      <div className='self-center'>
        <p> ${data.amount} </p>
      </div>
    </div>
  )
}

