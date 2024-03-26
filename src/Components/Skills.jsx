

const Skills = () => {
    const Skills = ['Autodidacta','Adaptabilidad','Scrum','WorkTeam']
    return (
        <div className="Container_Skills">
            <h4>Skills</h4>
            <div className="Container_Flex">
                {
                    Skills.map((skills,index) => (
                        <div key={index} className="Skills__format">{skills}</div>
                    ))
                }
            </div>

        </div>
    )
}

export default Skills
