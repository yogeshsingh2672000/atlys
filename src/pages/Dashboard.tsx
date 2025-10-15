import Feed from '@components/Feed'
import Header from '@components/Header'


export default function Dashboard() {


  return (
  <main>
    <Header/>
    <div className='w-full max-w-[720px] mx-auto mt-2'>
      <Feed />
    </div>
  </main>
  )
}


