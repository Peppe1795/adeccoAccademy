import { Iesercizio } from "./models/Iesercizio"

export default function Somma(props: Iesercizio) {
    return (
        <div>
            <h2>valore numero 1: {props.num1}</h2>
            <h2>valore numero 2: {props.num2}</h2>
            <h2>Somma: {props.num1 + props.num2}</h2>
            <img src={props.img} alt="nello" />
        </div>
    )

}