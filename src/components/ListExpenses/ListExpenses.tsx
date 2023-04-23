export const ListExpenses = ({ data }: any) => {
  return (
    <main className="px-5 py-3 border border-black flex justify-between my-3">
      <div className="">
        <p>
          <span className="">Monto: </span>
          <span>{data.amount} </span>
        </p>
        <p>
          <span>Fecha: </span>
          <span>{data.date}</span>
        </p>
      </div>
      <div>
        <p> {data.category} </p>
      </div>
    </main>
  )
}

