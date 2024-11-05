import data from './Data.js'

interface AppProps {
  question: string;
  option: string[];
  answer: string;
}

const App: React.FC<AppProps> = () => {
  return (
    <div className="bg-zinc-900 text-zinc-200 flex flex-col px-[500px]">
      <h1 className = "text-5xl flex flex-col justify-center items-center h-20">Quiz Questions</h1>
      <div className='flex flex-col gap-10'>
        {
          data.map((item, index) => (
            <li className='list-decimal flex flex-col font-semibold text-lg' key={index}>{item.question} <ul>
              {
                item.option.map((opt, idx) => (
                  <li className='list-disc font-normal text-sm' key={idx}>{opt}</li>
                ))
}</ul></li>
          ))
        }
      </div>
    </div>
  )
}

export default App