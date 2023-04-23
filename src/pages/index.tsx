import { AddExpense } from '@/components/AddExpense/AddExpense'
import { Expense } from '@/components/Expense/Expense'
import { supabase } from '@/utils/supabase'
import Link from 'next/link'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'


const links = [{ label: "Expense Control", route: "/" }, { label: "Graficas", route: "/charts" }]

export async function getServerSideProps(context: any) {
  // const { expenses } = await import('@/data/expenses.json')
  try {

    const user = await supabase.auth.getUser()
    const { data, error } = await supabase.from('expenses').select()
    console.log(user)
    return {
      props: {
        expenses: data,
        user: user.data ? user.data : null
      }
    }
  } catch (e) {
    console.log(e)
    return {
      props: {
        expenses: null,
        user: null
      }
    }
  }
}

const Home = ({ expenses }: any) => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div className="" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
      ) : (
        <main className="p-5 w-5/6 m-auto ">
          <div className="font-mono">
            <ul className='flex justify-start'>
              {links.map(({ label, route }) => (
                <li className='mr-2' key={route}>
                  <Link className='btn-primary' href={route}>{label}</Link>
                </li>
              ))}
              <li className='mr-2'>
                <button className='btn-primary' onClick={() => supabase.auth.signOut()}>Salir</button>
              </li>
            </ul>
          </div>
          <div className='mt-10'>
            <AddExpense />
          </div>
          <div className='mt-10'>
            {expenses.map((expense: any) => (
              <Expense key={expense.id} data={expense} />
            ))}
          </div>
        </main>
      )}
    </div>
  )
}

export default Home
