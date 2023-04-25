import { AddExpense } from '@/components/AddExpense/AddExpense'
import { Expense } from '@/components/Expense/Expense'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Button } from 'primereact/button';
import { SpeedDial } from 'primereact/speeddial';


const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()
  const [addExpense, setAddExpense] = useState(false)
  const [expenses, setExpenses] = useState([])
  const getExpenses = () => {
    supabase.from('expenses').select().eq('userId', session?.user.id).order('created_at', { ascending: false }).then((data) => {
      console.log(data)
      if (data.error) {
        console.log(data.error)
        return
      }
      setExpenses(data.data as any)
    })
  }
  const notify = () => toast.success('Gasto agregado', {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    theme: "light",
  });

  const createExpense = async (expense: any) => {
    try {
      if (!session) throw new Error("no hay session activa")
      const result = await supabase.from('expenses').insert({ ...expense, userId: session.user.id })
      notify()
      setAddExpense(false)
      getExpenses()
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (session) getExpenses()
  }, [session])

  return (
    < div className="" >
      {!session ? (
        <div className='p-5'>
          <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={['google']} />
        </div>
      ) : (
        <main className="p-5 w-full m-auto ">
          <div className='flex justify-between items-baseline'>
            <p className='font-mono text-black text-lg'>Expense control</p>
            <button className="btn-primary" onClick={() => supabase.auth.signOut()} type="submit">Salir</button>
          </div>
          <div className='mt-5'>
            {addExpense && <AddExpense setAddExpense={setAddExpense} createExpense={createExpense} />}
          </div>
          <div className='mt-5'>
            {expenses.map((expense: any) => (
              <Expense key={expense.id} data={expense} />
            ))}
          </div>
          <SpeedDial onClick={() => setAddExpense(true)} direction="down" style={{ right: 7, bottom: 20, position: "fixed" }} radius={20} />
        </main>
      )
      }
    </div >
  )
}

export default Home
