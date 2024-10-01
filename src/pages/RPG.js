import React, { useState } from "react";
import "./styles/RPG.css";
import intern from "../assets/rpg/intern.jpg";
import employee from "../assets/rpg/employee.jpg";
import manager from "../assets/rpg/manager.jpg";
import freelancer from "../assets/rpg/freelancer.jpg";
import investor from "../assets/rpg/investor.jpg";
import retiree from "../assets/rpg/retiree.jpg";
import founder from "../assets/rpg/founder.jpg";
import axios from "axios";

function RPG() {
  const [character, setCharacter] = useState({
    name: "Michael Corleone",
    job: "intern",
    salary: 250,
    savings: 2500,
    debt: 500,
  });
  const [charImg, setCharImg] = useState(intern);
  const [scenario, setScenario] = useState(
    "A situation is happening...What will you do?"
  );
  const [choice1, setChoice1] = useState("First Choice");
  const [choice2, setChoice2] = useState("Second Choice");
  const [choice3, setChoice3] = useState("Third Choice");
  const [choice4, setChoice4] = useState("Fourth Choice");
  const [count, setCount] = useState(0);
  const changeEverything = (e) => {
    setCharacter({ ...character, job: e.target.value });
    if (e.target.value === "intern") {
      setCharImg(intern);
    } else if (e.target.value === "employee") {
      setCharImg(employee);
    } else if (e.target.value === "manager") {
      setCharImg(manager);
    } else if (e.target.value === "freelancer") {
      setCharImg(freelancer);
    } else if (e.target.value === "investor") {
      setCharImg(investor);
    } else if (e.target.value === "retiree") {
      setCharImg(retiree);
    } else if (e.target.value === "founder") {
      setCharImg(founder);
    }
  };

  const initializeChatbot = async () => {
    let div1 = document.getElementById("StartPlayingContainer");
    let div2 = document.getElementById("RPG-Container2");
    div1.style.display = "none";
    div2.style.display = "block";
    try {
      setCount(count + 1);
      const tempMessage =
        "iambatman" +
        " " +
        character.name +
        " " +
        character.job +
        " " +
        character.salary +
        " " +
        character.savings +
        " " +
        character.debt;
      const response = await axios.post("http://localhost:5000/chat", {
        message: tempMessage,
      });

      const initialResponse = response.data;
      setScenario(initialResponse.scenario);
      setChoice1(initialResponse.choices.choice_1);
      setChoice2(initialResponse.choices.choice_2);
      setChoice3(initialResponse.choices.choice_3);
      setChoice4(initialResponse.choices.choice_4);
      console.log("Initial Response:", initialResponse);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleNew = async (val) => {
    try {
      setCount(count + 1);
      const tempMessage =
        "The player has selected choice " +
        val +
        ". Continue in the same manner for " +
        (15 - count) +
        " more turns, then end the game. We should have a definite winner/loser by the end of it.";
      const response = await axios.post("http://localhost:5000/chat", {
        message: tempMessage,
      });

      const initialResponse = response.data;
      setScenario(initialResponse.scenario);
      setChoice1(initialResponse.choices.choice_1);
      setChoice2(initialResponse.choices.choice_2);
      setChoice3(initialResponse.choices.choice_3);
      setChoice4(initialResponse.choices.choice_4);
      console.log("Initial Response:", initialResponse);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div id="RPGMain">
      <div id="RPG-Container">
        <h1 id="GameTitle">The Fincident</h1>
        <div id="StartPlayingContainer">
          <img src={charImg} alt="Character Icon" id="CharImg" />
          <h1 id="CreateCharacter">Create Your Character</h1>
          <h1 id="CharName">Character Name</h1>
          <input
            type="text"
            placeholder="Enter Name..."
            id="CharNameInput"
            value={character.name}
            onChange={(e) =>
              setCharacter({ ...character, name: e.target.value })
            }
          />
          <h1 id="CharName">Character Job</h1>
          <select
            id="SortBySelect"
            size="1"
            value={character.job}
            onChange={(e) => changeEverything(e)}
          >
            <option value="intern">The Intern</option>
            <option value="employee">The Employee</option>
            <option value="freelancer">The Freelancer</option>
            <option value="manager">The Manager</option>
            <option value="investor">The Investor</option>
            <option value="retiree">The Retiree</option>
            <option value="founder">The Founder</option>
          </select>
          <h1 id="CharName">Character Starting Salary</h1>
          <input
            type="number"
            id="CharPriceInput"
            value={character.salary}
            min={250}
            max={1000}
            step={50}
            onChange={(e) =>
              setCharacter({ ...character, salary: e.target.value })
            }
          />
          <h1 id="CharName">Character Starting Savings</h1>
          <input
            type="number"
            id="CharPriceInput"
            value={character.savings}
            min={1000}
            max={10000}
            step={500}
            onChange={(e) =>
              setCharacter({ ...character, savings: e.target.value })
            }
          />
          <h1 id="CharName">Character Starting Debt</h1>
          <input
            type="number"
            id="CharPriceInput"
            value={character.debt}
            min={500}
            max={5000}
            step={250}
            onChange={(e) =>
              setCharacter({ ...character, debt: e.target.value })
            }
          />
          <br />
          <button id="StartPlaying" onClick={initializeChatbot}>
            Start Playing!
          </button>
        </div>
      </div>
      <div id="RPG-Container2">
        <p id="ScenarioRPG">Scenario</p>
        <p id="TheScenario">{scenario}</p>
        <button type="button" id="Choice1Btn" onClick={() => handleNew(1)}>
          {choice1}
        </button>
        <button type="button" id="Choice2Btn" onClick={() => handleNew(2)}>
          {choice2}
        </button>
        <button type="button" id="Choice3Btn" onClick={() => handleNew(3)}>
          {choice3}
        </button>
        <button type="button" id="Choice4Btn" onClick={() => handleNew(4)}>
          {choice4}
        </button>
        <img src={charImg} alt="Character Icon" id="CharImg2" />
        <p id="NameRPG">{character.name}</p>
      </div>
    </div>
  );
}

export default RPG;
