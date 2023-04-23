import { supabase } from "@/utils/supabase"
import { useState } from "react"

export const AddExpense = () => {
  const [expense, setExpense] = useState({ amount: 0, category: '' })
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const user = await supabase.auth.getUser()
      const result = await supabase.from('expenses').insert({ ...expense, userId: user.data.user?.id })
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="px-5 py-3 border border-white my-3 text-white">
      <form onSubmit={handleSubmit}>
        <p className="font-mono">Add expense</p>
        <div className="mt-5">
          <label htmlFor="">Monto</label>
          <input className="input-primary" placeholder="1" type="number" onChange={(e) => setExpense({ ...expense, amount: Number(e.target.value) })} />
        </div>
        <div className="mt-5">
          <select id="" name="" className="input-primary" onChange={(e) => setExpense({ ...expense, category: e.target.value })}>
            <option value="trasporte">transporte</option>
            <option value="comida">comida</option>
            <option value="gusto">gusto</option>
          </select>
          <button className="btn-primary mt-5" type="submit">Agregar</button>
        </div>
      </form>
    </div >
  )
}

