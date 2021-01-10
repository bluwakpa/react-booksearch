import React, {useState} from 'react';
//AIzaSyByo0m2mgs0-GtTIjdr9Osr978u8okS-do
//https://www.googleapis.com/books/v1/volumes?q=search+terms

function App() {
  const [search, setSearch]=useState("")
  const [printType, setPrintType]=useState("")
  const [bookType, setBookType]=useState("")
  const [result, setResult]=useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    const apiKey=`AIzaSyByo0m2mgs0-GtTIjdr9Osr978u8okS-do`
    const url=`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}`
    fetch(url) 
      .then(res => res.json())
      .then(books => setResult(books.items))
      //state variable, log data, set results, filtering
  }
  return (
    <main>
      <h1>Google Book Search</h1>
        <form onSubmit={handleSubmit}>
          <label>Search:</label>
          <input type="text" required value={search} onChange={(e)=>setSearch(e.target.value)}/>
          <button type="submit">Search</button>
            <br />
          <label>Print Type:</label>
          <select value={printType} onChange={(e)=>setPrintType(e.target.value)}>
            <option>All</option>
          </select>
          <label>Book Type:</label>
          <select value={bookType} onChange={(e)=>setBookType(e.target.value)}>
            <option>No Filter</option>
          </select>
        </form>
        <section>
          <ul>
            {
            result.map(res => (
              <li>{res.volumeInfo.title}</li>
            ))
            } 
          </ul>
        </section>
        </main>
  );
}

export default App;