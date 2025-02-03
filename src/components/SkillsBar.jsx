import SkillBar from "./SkillBar"
import HardSkill from "../photo/HardSkill.gif"

const App = () => {
  const skills = [
    { name: "Html", progress: 85 },
    { name: "JavaScript", progress: 75 },
    { name: "React", progress: 85 },
    { name: "CSS", progress: 65 },
    { name: "Tailwind CSS", progress: 80 },
    { name: "Vite", progress: 70 },
    { name: "Figma", progress: 80 },
    { name: "AI-Generating", progress: 87 },
    { name: "User-Research", progress: 75 },
  ]

  return (
    <div className=" px-4 py-8">
      <div className=" w-[300px] sm:w-[600px] md:w-[660px] lg:w-[1000px] xl:w-[1220px] mx-auto max-w-screen-xl ">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6">
          <img src={HardSkill || "/placeholder.svg"} className="w-10 h-10" alt="Hard Skills icon" />
          <h1 className="text-2xl font-bold text-center sm:text-left">Hard Skills</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill.name} progress={skill.progress} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

