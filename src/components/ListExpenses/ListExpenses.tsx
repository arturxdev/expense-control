export const ListExpenses = () => {
  return (
    <main className="px-5 py-3 border border-black flex justify-between my-3">
      <div className="">
        <p>
          <span className="">Monto: </span>
          <span>{data.amount} </span>
        </p>
        <p>
          <span>Fecha: </span>
          <span>{dayjs(data.date).format('YYYY-MM-DD hh:mm')}</span>
        </p>
      </div>
      <div>
        <p> {data.category} </p>
      </div>
    </main>
  )
}

