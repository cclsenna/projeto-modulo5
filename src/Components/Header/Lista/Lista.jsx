export default function Lista ({listas}) {
    return (
        <>
        {listas.map((lista,index) => (
            
            <li key={index}>
                <p>{lista}</p>
            </li>
        ))}
        </>
    )
}