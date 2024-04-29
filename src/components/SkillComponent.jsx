import React from 'react'
import '../style/style.css';

const SkillComponent = () => {
    return (
        <div className="skillClass ">
            <h1>My Skill</h1>
            <ul>
                <li>
                    <h3>html</h3>
                    <span className="sub">
                        <span className="html"></span>
                    </span>
                </li>
                <li>
                    <h3>CSS</h3>
                    <span className="sub">
                        <span className="css"></span>
                    </span>
                </li>
                <li>
                    <h3>Java</h3>
                    <span className="sub">
                        <span className="java"></span>
                    </span>
                </li>
                <li>
                    <h3>Spring</h3>
                    <span className="sub">
                        <span className="spring"></span>
                    </span>
                </li>
                <li>
                    <h3>python</h3>
                    <span className="sub">
                        <span className="python"></span>
                    </span>
                </li>
                <li>
                    <h3>SQL</h3>
                    <span className="sub">
                        <span className="sql"></span>
                    </span>
                </li>
                <li>
                    <h3>javaScript</h3>
                    <span className="sub">
                        <span className="javaScript"></span>
                    </span>
                </li>
                <li>
                    <h3>Angular</h3>
                    <span className="sub">
                        <span className="angular"></span>
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default SkillComponent