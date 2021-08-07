import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([]);

    // Piece if code whitch based on a condition
    useEffect(() => {
        // this is where the code runs...
        const unsubscribe = database
            .collection('people')
            .onSnapshot((snapshot) =>
                setPeople(snapshot.docs.map((doc) => doc.data()))
            );

        return () => {
            // this is the cleanup...
            unsubscribe();
        }

        // this will run ONCE when the component loads, and never again
    }, []);

    // BAD
    // const people = [];
    // people.push('Peter', 'Tom')

    // GOOD (Push to an array in React)
    // setPeople([...people, 'Peter', 'Tom'])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }} //`` not ''
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;
