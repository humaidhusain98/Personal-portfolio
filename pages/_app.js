import '../styles/globals.css'
import {useState} from 'react';

function MyApp({ Component, pageProps }) {

  const [page,setPage] = useState(0);

  return (
  <>
    
    <Component 
      page={page}
      setPage={setPage}
    {...pageProps} />
  </>
  )
}

export default MyApp
