import type { NextPage } from 'next'
import { useEffect } from 'react'
import axios from 'axios'

const Home: NextPage = () => {
 useEffect(() => {
  ;(async () => {
   const res = await axios.get('/api/getTweets')
   console.log(res.data)
  })()
 }, [])
  return <div>Hi DATA</div>
}
export default Home;
