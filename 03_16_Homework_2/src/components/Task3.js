import React, { useState } from 'react'

function Task3() {

    let text = [
        {
            text: "Focused, hard work is the real key to success. Keep your eyes on the goal, and just keep taking the next step towards completing it."
        },
        {
            text: "Winners embrace hard work. They love the discipline of it, the trade-off they're making to win. Losers, on the other hand, see it as punishment. And that's the difference."
        }
    ];
    let text1Length = text[0].text.length;
    let text2Length = text[1].text.length;

    const [task1, setTask1] = useState(true);
    const [task2, setTask2] = useState(true);
    let inputText1;
    let inputText2;
    let button1Text;
    let button2Text;
    let nextStep1;
    let nextStep2;
    if (task1) {
        inputText1 = text[0].text.substring(0, 35);
        button1Text = "...read more";
        nextStep1 = false;
    } else {
        inputText1 = text[0].text.substring(0, text1Length);
        button1Text = "read less";
        nextStep1 = true;
    }

    if (task2) {
        inputText2 = text[1].text.substring(0, 35);
        button2Text = "...read more";
        nextStep2 = false;
    } else {
        inputText2 = text[1].text.substring(0, text2Length);
        button2Text = "read less";
        nextStep2 = true;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card" style={{ width: "18rem" }} >
                        <p className="card-text">{inputText1}<button class="btn" onClick={() => setTask1(!task1)} >{button1Text}</button></p>
                        <p className="card-text">{inputText2}<button class="btn" onClick={() => setTask2(!task2)} >{button2Text}</button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Task3;
