import error from"../img/errorrrr.jpg"
export const ModalPhone = ({ data }) => {
    return <ul>
        {
            data.map(({ id, brand, model, os, sim, price, image = error}) => {
                console.log(image);
                return <li key={id}>
                    <img src={image} alt={ brand} width="300px"/>
                    <h2>{model}</h2>
                    <p>{brand}</p>
                    <p>{os}</p>
                    <p>{sim}</p>
                    <p>{price}</p>
                </li>
            })
}
    </ul>
        
   
}