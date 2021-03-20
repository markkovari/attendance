import React, { useState, useEffect } from 'react'

import './App.css'

const APIURL = "https://attendaceasdfgh.herokuapp.com";

interface Person {
  id: number;
  name: string;
}

function App() {

  const [people, setPeople] = useState<Person[]>([])
  const [newPerson, setNewPerson] = useState("")

  useEffect(() => {
    fetch(APIURL)
      .then(response => response.json())
      .then(responeAsJson => setPeople(responeAsJson))
  }, [])

  function sendPerson() {
    if (newPerson !== "") {
      const toSend = {
        person: newPerson
      }
      fetch(APIURL, {
        method: "POST",
        body: JSON.stringify(toSend),
        headers: {
          'content-type': 'application/json'
        }
      }
      )
        .then((response) => response.json())
        .then(({ id }) => {
          setPeople([...people, { id, name: newPerson }])
        })
    }
  }

  return (
    <div className="App">
      <h1>
        Attendance tracker
      </h1>
      <input onChange={(ev) => {
        setNewPerson(ev.target.value)
      }}></input>
      <br />
      <button
        onClick={() => sendPerson()}
      >Add {newPerson}</button>
      {
        people.map(({ id, name }, index) => (
          <div key={`${id}-${index}`}>
            {name}
          </div>
        ))
      }
    </div >
  )
}

export default App
