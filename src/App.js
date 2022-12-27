import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navabar';
import Finecomp from './Components/fineslist';
import Table from './Components/table';



function App() {
  const fineList=[{book_id:1,book_name:'Database managment system',fine_amount:500,days_overdue:10},
  {book_id:2,book_name:'Computer organization and assembly language',fine_amount:1000,days_overdue:16},
  {book_id:3,book_name:'Data structures and algorithms',fine_amount:200,days_overdue:16}

];
  return (
    <>
    <Navbar/>
    <main className='container mt-5'> 
     <Table/>
      <Finecomp fineList={fineList}/>
    </main>
  
    
  </>
  );
}

export default App;
