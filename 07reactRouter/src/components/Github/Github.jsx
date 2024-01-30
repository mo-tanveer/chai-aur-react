import React, { useEffect ,useState } from "react";
import  { useLoaderData} from "react-router-dom";

function Github(){
    const data = useLoaderData()

    //basic useEffect se api call of github...1...
    // const [data,setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/mo-tanveer')
    //  .then((response)=> response.json())
    //  .then((data)=> {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    return (
        <div className="bg-gray-500 text-center m-4 text-white text-3xl"> Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={200}/>
        </div>
    )
}

export default Github

//optimised way through router for call api for github...2...
export const githubInfoLoader = async ()=>{
const response = await fetch('https://api.github.com/users/mo-tanveer')
return response.json()
}