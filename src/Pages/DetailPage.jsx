import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
function DetailPage() {
  const [jobDetail, setJobDetail] = useState({})
  const { id } = useParams()
  useEffect(() => {
    axios
      .get(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`)
      .then((response) => {
        setJobDetail(response.data)
        console.log(response.data)
      }).catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div className='p-3'>
      <NavLink to="/" className="text-sky-600 text-xl font-bold">Back</NavLink>
      <div className='rounded-lg border border-gray-600 p-3 mt-5'>
        <h3 className='text-gray-600'>{jobDetail.type} / {jobDetail.location}</h3>
        <h1 className='font-bold text-2xl text-blue-900 border-b border-gray-600 pb-4'>{jobDetail.title}</h1>
        <div className='flex gap-5 pt-3'>
          <div className='w-3/4' dangerouslySetInnerHTML={{ __html: jobDetail.description }}/>
          <div className='w-1/4'>
            <div className='shadow-md rounded-lg mb-10'>
              <h3 className='border-b border-gray-400 px-2 pt-5'>{jobDetail.company}</h3>
              <img src={jobDetail.company_logo} className="w-full"/>
              <a className='text-sm py-3 px-2' href={jobDetail.company_url}>{jobDetail.company_url}</a>
            </div>
            <div className='shadow-md rounded-lg bg-yellow-50'>
              <h3 className='border-b font-bold border-gray-400 px-2 py-2'>How To Apply</h3>
              <div className='py-2 px-2' dangerouslySetInnerHTML={{ __html: jobDetail.how_to_apply }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
