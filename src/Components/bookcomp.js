import React from 'react'


export default function Book(props) {
  return (
   

    <div> <table className='table mb-0'>
    <thead>
     <tr>
       <th height='50' width="220" scope="col">{props.book.book_id}</th>
       <th height='50' width="280" scope="col">{props.book.book_name}</th>
       <th width="300" scope="col">{props.book.author_name}</th>
       <th scope="col" width="170">{props.book.genre}</th>
       <th scope="col">{props.book.copies}</th>
     </tr>
   </thead>
   </table>
   
 </div>
    );
  
        
      
   

}
