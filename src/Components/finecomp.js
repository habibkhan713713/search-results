import React from 'react'


export default function Fine(props) {
  return (
   

    <div> <table className='table mb-0'>
    <thead>
     <tr>
       <th height='50' width="220" scope="col">{props.fine.book_id}</th>
       <th height='50' width="280" scope="col">{props.fine.book_name}</th>
       <th width="300" scope="col">{props.fine.fine_amount}</th>
       <th scope="col">{props.fine.days_overdue}</th>
     </tr>
   </thead>
   </table>
   
 </div>
    );
  
        
      
   

}
