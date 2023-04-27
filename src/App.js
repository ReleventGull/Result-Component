import { useState } from "react"




  
const App = () => {
    const [items, setItems] = useState([
        {
        category: "Reaction",
        score: 80,
        icon: "/images/icon-reaction.svg"
        },
        {
          category: "Memory",
          score: 92,
          icon: "images/icon-memory.svg"
        },
        {
          category: "Verbal",
          score: 61,
          icon: "images/icon-verbal.svg"
        },
        {
          category: "Visual",
          score: 72,
          icon: "images/icon-visual.svg"
        }
      ])
    return (
    <div className="pageWrapper">
        <div className="mainBox">
            <div className="leftBox">
                    <div className="topBox">
                        <h1>Your Result</h1>
                    </div>

                    <div className="middleBox">
                        <div className="circle">
                            <div className="circleText">
                                <h1 className="yourscore">76</h1>
                                <span className="outof">of 100</span>
                            </div>
                 
                        </div>
                    </div>
                    
                    <div className="bottomBox">
                        <h2 className="rating">Great</h2>
                        <p className="description">You scored higher than 65% of the people who have taken these tests</p>
                    </div>


            </div>
            <div className="rightBox">
                <div className="rightMiddle">
                    <div className="rightMiddleTop">
                    <h1>Summary</h1>
                    </div>
                    <div className="resultBox">
                        {
                            items.map(it => 
                                <div className={"itemBox " + it.category}>
                                    <div className="titleBox">
                                        <img src={it.icon}/>
                                        <h2>{it.category}</h2>
                                    </div>
                                    <div className="scoreBox">
                                        <h2 className="score">{it.score} <span className="outOfScore">  / 100</span></h2>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="buttonContainer">
                    <button>Continue</button>
                    </div>
                    
                </div>

            </div>
            
        </div>
    </div>
    )
}

export default App