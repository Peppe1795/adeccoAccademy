import Image from "next/image";
import { props } from "./models/parametri";
export default function Previsioni(props: props){
return( 
<div>
    <h1>{props.previsioni}</h1>
</div>
)
}