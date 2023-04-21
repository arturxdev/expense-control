const Login = () => {
  return (
    <div className="flex justify-center h-screen flex-col items-center">
      <div className="border border-black px-10 py-10 w-1/3 inline-block">
        <p className="text-xl font-semibold font-mono text-center">Expense Control</p>
        <div className="mt-10">
          <label htmlFor="">Usuario</label>
          <input type="email" className="input-primary" />
        </div>
        <div className="mt-5">
          <label htmlFor="">Contraseña</label>
          <input type="password" className="input-primary" />
        </div>
        <div className="mt-5 text-center">
          <button className="btn-black">Registrar</button>
        </div>
      </div>
    </div>
  )
}

export default Login
