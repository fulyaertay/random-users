
import '../index.css';
import '../output.css'
import { useState , useEffect} from 'react';
import axios from 'axios';
function PickUsers() {
  const [profileName,setProfileName]=useState("");
  const [profileCell,setProfileCell]=useState("");
  const [profileImage,setProfileImage]=useState("");
  const [profileEmail,setProfileEmail]=useState("");

  const profileData = async () =>{
    try {
      const res = await axios.get("https://randomuser.me/api");
      console.log(res);
      setProfileCell(res.data.results[0].cell)
      setProfileEmail(res.data.results[0].email)
      setProfileImage(res.data.results[0].picture.large);
      setProfileName(`${res.data.results[0].name.first} ${res.data.results[0].name.last}`);
    } catch (error) {
      console.log(error);
    }
  }
  
  //pick an user when doc first loaded
  useEffect(()=>{
    profileData();
  },[])

  return (
    <div className="container bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex w-50 mx-auto m-10 p-10 justify-center ">
      <div className='profileContainer text-center'>
        <img className="m-5 w-max-auto mx-auto rounded-full " layout="cover" src={profileImage}/>
        <h1>{profileName}</h1>
        <p>{profileEmail}</p>
        <p>{profileCell}</p>

        <button className='m-5 inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out' onClick={profileData}>Pick a Random Profile</button>
      </div>
    </div>
  );

}


export default PickUsers;




