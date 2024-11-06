import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'

import Menu from './components/Menu'
const App = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <Menu />
        <div className='flex flex-col p-20 w-full h-screen'>
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-semibold text-zinc-600 flex items-center gap-4'>New audience <FontAwesomeIcon className='text-zinc-600 text-lg' icon={faWandMagicSparkles} /></h1>
            <button className='bg-blue-600 text-white w-28 h-8 rounded-full font-semibold outline-none'>Save</button>
          </div>
          <div className='flex gap-2 mt-20'>
            <div className='w-64 outline-none border-2 border-zinc-600 rounded px-2 py-2 flex gap-2'>
              <p>Name: </p>
              <input type="text" placeholder='John Doe  ' className='outline-none w-full' />
            </div>
            <div className='w-48 outline-none border-2 border-zinc-600 rounded px-2 py-2 flex gap-2'>
              <p>Gender </p>
              <select className='outline-none w-full'>
                <option>Male</option>
                <option>Female</option>
                <option>Non-Binary</option>
                <option>Genderqueer</option>
                <option>Genderfluid</option>
                <option>Agender</option>
                <option>Bigender</option>
                <option>Androgynous</option>
                <option>Demiboy</option>
                <option>Demigirl</option>
                <option>Genderflux</option>
                <option>Gender Nonconforming</option>
                <option>Gender Variant</option>
                <option>Two-Spirit</option>
                <option>Hijra</option>
                <option>Third Gender</option>
                <option>Transgender</option>
                <option>Neutrois</option>
                <option>Maverique</option>
                <option>Intergender</option>
                <option>Polygender</option>
                <option>Multigender</option>
                <option>Omnigender</option>
                <option>Graygender</option>
                <option>Aliagender</option>
                <option>Androgyne</option>
                <option>Other</option>
                <option>Prefer not to say</option>

              </select>
            </div>
            <div className='w-40 outline-none border-2 border-zinc-600 rounded px-2 py-2 flex gap-2'>
              <p>Age: </p>
              <input type="number" placeholder='20' className='outline-none w-full' />
            </div>
          </div>
          <div className='mt-5'>
            <p className='text-lg font-semibold text-blue-600 flex items-center gap-4'>Academics</p>
            <div className='flex gap-2 mt-1'>
              <div className='w-80 outline-none border-2 border-zinc-600 rounded px-2 py-2 flex gap-2'>
                <p>University:</p>
                <input type="text" placeholder='Jharkhand Rai University' className='outline-none w-full' />
              </div>
              <div className='w-72 outline-none border-2 border-zinc-600 rounded px-2 py-2 flex gap-2'>
                <p>Stream:</p>
                <select className="w-full outline-none">
                  <option>Engineering</option>
                  <option>Management</option>
                  <option>Science</option>
                  <option>Arts</option>
                  <option>Commerce</option>
                  <option>Computer Application</option>
                  <option>Education</option>
                  <option>Medical</option>
                  <option>Pharmacy</option>
                  <option>Paramedical</option>
                  <option>Law</option>
                  <option>Mass Communication</option>
                  <option>Design</option>
                  <option>Vocational Courses</option>
                  <option>Hotel Management</option>
                  <option>Agriculture</option>
                  <option>Architecture</option>
                </select>
              </div>
              <div className='w-80 outline-none border-2 border-zinc-600 rounded px-2 py-2 flex gap-2'>
                <p>Course:</p>
                <select className="w-full outline-none">
                  <option>BE/B.Tech</option>
                  <option>ME/M.Tech</option>
                  <option>Polytechnic</option>
                  <option>BE/B.Tech Lateral</option>
                  <option>M.Phil/Ph.D in Engineering</option>
                  <option>Diploma in Engineering</option>
                  <option>Training Programs</option>
                </select>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App