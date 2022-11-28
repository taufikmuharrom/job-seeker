import { useState, useEffect } from 'react'
import TextInput from '../Components/TextInput'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
    const [title, setTitle] = useState('Job List')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [jobStatus, setJobStatus] = useState(false)
    const [jobList, setJobList] = useState([])
    const lookingForJobs = () => {
        console.log('lookingForJobs')
    }

    const fetchingData = (params) => {
        axios
            .get(params)
            .then((response) => {
                setJobList(response.data)
                console.log(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        const urlWithParams = new URL("http://dev3.dansmultipro.co.id/api/recruitment/positions.json")
        urlWithParams.searchParams.append("page", 1)
        fetchingData(urlWithParams.href)
    }, [])


    return (
        <div className="p-3">
            <div className='flex gap-5 items-center mb-3'>
                <TextInput
                    label="Job Description"
                    defaultValue={description}
                    handleChange={(event) => {
                        setDescription(event.target.value)
                    }}
                />
                <TextInput
                    label="Location"
                    defaultValue={location}
                    handleChange={(event) => {
                        setLocation(event.target.value)
                    }}
                />
                <div className='my-auto pt-5'>
                    <input type="checkbox" className="" onChange={() => setJobStatus(!jobStatus)} id="jobStatus" checked={jobStatus} value={jobStatus} />
                    <label className='font-bold ml-2' htmlFor="jobStatus">Full Time Only</label>
                </div>
                <button onClick={() => lookingForJobs()} className='text-md py-2 px-6 bg-sky-600 rounded-lg hover:opacity-50 mt-6 text-white font-bold'>Search</button>
            </div>
            <div className='border border-gray-400 rounded-lg px-3 py-4'>
                <h1 className='font-bold text-2xl border-b border-gray-400 pb-5'>{title}</h1>
                {
                    jobList.length === 0 ? (<div className='text-center py-28'>
                        No Data Available
                    </div>) : (<>{
                        jobList.map((job, index) => {
                            return (<NavLink to={`/${job.id}`} key={index}
                                className="flex justify-between border-b cursor-pointer border-gray-400 py-5">
                                <div>
                                    <h3 className='font-bold text-sky-600'>{job.title}</h3>
                                    <p className='text-gray-400'>{job.company} - <span className='font-bold text-green-700'>{job.type}</span></p>
                                </div>
                                <div><p>{job.location}</p>
                                </div>
                            </NavLink>)
                        })
                    }</>)
                }
            </div>

        </div>
    )
}

export default Home
