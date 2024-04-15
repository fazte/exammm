import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Asd() {
	const[nameId,setNameId] = useState([])
	

	async function fetchPosts(){
		const result = await fetch('https://jsonplaceholder.typicode.com/posts')
			const nameId = await result.json()
			setNameId(nameId)
	}

	useEffect(()=>{
			fetchPosts()	
	},[])

  return (
    <>
		<ul>
		{nameId.map((id)=>{
			return(
				<li>{id.name} </li>
			)
		})}

		</ul>
		</>
  );
}
export default Asd;