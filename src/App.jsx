import { useState, useEffect } from 'react'
import './App.css'
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
function App() {

  const [countries, setCountries] = useState([]);

    useEffect(() => {
      getCountries();
    }, []);

    async function getCountries() {
      const { data } = await supabase.from("countries").select('*');
      setCountries(data);
    }

  return (
    <>
    <div>{import.meta.env.VITE_SUPABASE_URL}</div>
      <ol>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ol>
    </>
  )
}

export default App
