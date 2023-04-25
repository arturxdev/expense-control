import { useState } from "react"

export const AddExpense = ({ createExpense, setAddExpense }: any) => {
  const [expense, setExpense] = useState({ amount: 0, category: '', description: '' })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      createExpense(expense)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="my-3 text-gray-600">
      <form onSubmit={handleSubmit}>
        <p className="font-mono">Añadir gasto</p>
        <div className="mt-5">
          <label htmlFor="">Monto</label>
          <input className="input-primary" min="1" type="number" required onChange={(e) => setExpense({ ...expense, amount: Number(e.target.value) })} />
        </div>
        <div className="mt-5">
          <label htmlFor="">Description</label>
          <input className="input-primary" placeholder="Descripcion" type="text" onChange={(e) => setExpense({ ...expense, description: e.target.value })} />
        </div>
        <div className="mt-5">
          <select id="" name="" required className="input-primary" onChange={(e) => setExpense({ ...expense, category: e.target.value })}>
            <option value="general">general</option>
            <option value="trasporte">transporte</option>
            <option value="comida">comida</option>
            <option value="gusto">gusto</option>
          </select>
          <button className="btn-primary mt-5" type="submit">Agregar</button>
          <button className="btn-primary mt-5 ml-2" onClick={() => setAddExpense(false)} type="submit">Cancelar</button>
        </div>
      </form>
    </div >
  )
}

