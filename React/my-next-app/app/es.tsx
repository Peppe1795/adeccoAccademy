import { Iesercizio } from "./models/Iesercizio"
import Image from "next/image"

export default function Somma(props: Iesercizio) {
    return (
        <div>
            <h2>valore numero 1: {props.num1}</h2>
            <h2>valore numero 2: {props.num2}</h2>
            <h2>Somma: {props.num1 + props.num2}</h2>
            <Image
                src={props.img}
                alt="Ponte di legno al tramonto"
                width={500}
                height={300}
            />
        </div>
    )

}