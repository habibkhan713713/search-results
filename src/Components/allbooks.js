import React from 'react'
import Bookcomp from './booklist';
import Table from './table';

export default function Allbooks() {
    const bookList=[{book_id:1,book_name:'Database managment system by Sam and richard',author_name:"Richard Mangle",genre:"Horror",copies:10},
    {book_id:2,book_name:'DSA',author_name:"Robert Fleming",genre:"Horror",copies:6}
  ,{book_id:3,book_name:'LA',author_name:"Michael nimora",genre:"Horror",copies:10},
  {book_id:4,book_name:'Communication Skills',author_name:"Professor Albert",genre:"Horror",copies:2}
  ];
  return (
    <div>
       <main className='container mt-5'> 
     <Table/>
      <Bookcomp bookList={bookList}/>
    </main>
    </div>
  )
}
