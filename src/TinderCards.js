import React,{useState} from 'react'
import TinderCard from 'react-tinder-card'
import "./TinderCard.css"


function TinderCards() {
    const [people,setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://portalrapmais.com/wp-content/uploads/2021/12/elon-musk-vendeu-mais-us-1-bilhao-em-acoes-da-tesla-na-terca-feira-scaled.jpg"
        },
        {
            name: "Jeff Bezos",
            url: "https://exame.com/wp-content/uploads/2021/09/GettyImages-1036099078-1.jpg?quality=70&strip=info&resize=680,453"
        },
    ]);
    const swiped = (direction,nameToDelete) =>{
        console.log("removing: " + nameToDelete)
        //setLastDirection(direction)
    }
    const outOfFrame = (name) =>{
        console.log(name+" left the screem")
    }
    return (
        <div className='tinderCards'>
            <div className='tinderCards__cardContainer'>
            {people.map((person) => (
                <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir) => swiped(dir,person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div className='card' style={{backgroundImage : `url(${person.url})` }}>
                    <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
            
        </div>
    )
}

export default TinderCards
