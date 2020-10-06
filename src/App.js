import React,{useEffect, useState} from 'react';
import Recipe from './recipe'


const App = () =>{

  const API_ID = '71e1dc6b'
  const API_KEY = '5a72c202a8001d58deffb87ef6420b13'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect( ()=>{
    getRecipes()
  }, [query])  

  const getRecipes = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }

  const updateSearch = (e) =>{
    setSearch(e.target.value)
    
  }

  const getSearch = (e) =>{
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return(
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image} 
        ingredients={recipe.recipe.ingredients}
         />
      ))}
      </div>
    </div>
  )
}

export default App;
