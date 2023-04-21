import { AddExpense } from '@/components/AddExpense/AddExpense'
import { Expense } from '@/components/Expense/Expense'
import { supabase } from '@/utils/supabase'
import Link from 'next/link'
import { useEffect } from 'react'


const links = [{ label: "Expense Control", route: "/" }, { label: "Graficas", route: "/charts" }]

export async function getServerSideProps(context) {
  const { expenses } = await import('@/data/expenses.json')
  return {
    props: {
      expenses
    }
  }
}

export default function Home({ expenses }) {
  return (
    <main className="p-5 w-5/6 m-auto ">
      <div className="font-mono">
        <div className="flex w-full justify-start items-end">
          <ul className='flex'>
            {links.map(({ label, route }) => (
              <li className='mr-2' key={route}>
                <Link className='brn-black' href={route}>{label}</Link>
              </li>
            ))}
            <li className='mr-2'>
              <button className='brn-black' onClick={() => supabase.auth.signOut()}>Salir</button>
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-10'>
        <AddExpense />
      </div>
      <div className='mt-10'>
        {expenses.map(expense => (
          <Expense key={expense.id} data={expense} />
        ))}
      </div>
    </main>
  )
}

