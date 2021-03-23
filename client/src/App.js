import axios from "axios";
import './App.css';
import {useState,useEffect} from "react"
import CandidateList from './components/CandidateList/CandidateList.js'
function App() {
  const [candidates,setCandidates]=useState([]);
  useEffect(()=>
  {
    const fetchItems=async()=>
    {
      
      const url =
      'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json';
      const result=await axios(url);
      setCandidates(result.data);
    }
    fetchItems();
  });
  return (
    <div>
      <CandidateList candidates={candidates} />
    </div>
  );
}

export default App;
