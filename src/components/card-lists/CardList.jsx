import Card from '../Card'
import './card-list.css'
const CardList = ({monsters}) => {
    return (
    <div className="card-list">
        {
            monsters.map(monster => {
                const {id ,email, name} = monster
                return (  
                <div key={id}>
                    <Card name={name} email={email} id={id} />
                </div>
                )
            })
        }
    </div>
    )
}

export default CardList