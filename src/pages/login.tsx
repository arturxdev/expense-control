import { supabase } from "@/utils/supabase"
import { useState } from "react"

const Login = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      await supabase.auth.signInWithOtp({
        email,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex justify-center h-screen flex-col items-center">
      <form onSubmit={handleSubmit} className="border border-black px-10 py-10 w-1/3 inline-block">
        <div className="">
          <p className="text-xl font-semibold font-mono text-center">Expense Control</p>
          <div className="mt-10">
            <label htmlFor="">Usuario</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} className="input-primary" />
          </div>
          <div className="mt-5">
            <label htmlFor="">Contraseña</label>
            <input type="password" className="input-primary" />
          </div>
          <div className="mt-5 text-center">
            <button className="btn-black" type="submit">Inicio Sesion</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
