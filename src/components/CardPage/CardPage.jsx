import { useParams } from "react-router-dom";
import { catalog } from "../../database";

export default function CardPage(){

	const{id} = useParams();
	console.log(id)
	const product = catalog.find(product => product.id == parseInt(id))
	console.log(product)
	return(
		<>
		<h1>{product.name}</h1>
		<p>{product.price}</p>
		</>
	)
}