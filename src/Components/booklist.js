import React from 'react'
import Book from './bookcomp'


export default function Bookcomp(props) {
   
  return (
    props.bookList.map(
   (book,i)=>{
        return <Book book={book} key={i}/>
  
   }

    )
 
  
    


    

  )
}

