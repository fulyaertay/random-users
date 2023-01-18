
import '../index.css';
import '../output.css'
import { useState , useEffect,useReducer} from 'react';
import axios from 'axios';
function PickUsers() {

  const [event, updateEvent] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    { profileName: "", profileCell: "", profileImage: "", profileEmail:"" }
  );

  const profileData = async () =>{
    try {
      const res = await axios.get("https://randomuser.me/api");
      console.log(res);
      updateEvent({profileCell:res.data.results[0].cell})
      updateEvent({profileEmail:res.data.results[0].email})
      updateEvent({profileImage:res.data.results[0].picture.large})
      updateEvent({profileName:res.data.results[0].name.first && res.data.results[0].name.last})
    } catch (error) {
      console.log(error);
    }
  }
  
  //pick an user when doc first loaded
  useEffect(()=>{
    profileData();
  },[])

  return (
    <div className="container rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex w-[400px] mx-auto m-10 p-10 justify-center ">
      <div className='profileContainer text-center'>
        <img className="m-5 w-max-auto mx-auto rounded-full " layout="cover" src={event.profileImage}/>
        <h1>{event.profileName}</h1>
        <p>{event.profileEmail}</p>
        <p>{event.profileCell}</p>
        <button className='m-5 inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out' onClick={profileData}>Pick a Random Profile</button>
      </div>
    </div>
  );

}


export default PickUsers;




