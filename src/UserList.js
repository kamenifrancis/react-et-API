import React , {useState,useEffect} from 'react' 
import axios, { Axios } from 'axios'

function DataFetching() { 
    const [Posts, SetPosts] = useState([]) 
    useEffect( () => {
     axios.get('https://jsonplaceholder.typicode.com/posts')  
     .then( Res => {
        console.log(Res) 
        SetPosts(Res.data) 
     }) 
     .catch(err => { 
        console.log(err) 

     } )
    })
  return (
    <div>
      <ul>
        {
            Posts.map(Post=> <li key={Post.id}>{Post.title}</li>) 
        }
      </ul>
    </div>
  )
}

export default DataFetching

