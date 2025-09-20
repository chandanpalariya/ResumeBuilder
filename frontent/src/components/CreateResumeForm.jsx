import React, { useState } from 'react'
import Input from './Input'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../utils/axiosInstance'
import { API_PATH } from '../utils/apiPath'


const CreateResumeForm = () => {
  const [title,setTitle]=useState('')
  const[error,setError]=useState(null)
  const navigate=useNavigate()

  const handleCreateResume=async(e)=>{
        e.preventDefault();
        if(!title){
          setError('please enter resume title')
          return
        }
        setError("")

        try{
          const respose=await axiosInstance.post(API_PATH.RESUME.CREATE,{
            title,
          })
          if(respose.data?._id){
            navigate(`/resume/${respose.data?._id}`)
          }

        }

        catch(error){
          if(error.respose && error.respose.data.message){
            setError(error.respose.data.message)
          }

          
          else{
            setError("something went wrong.please try again later")

          }

        }
          
  }
  
  return (
    <div className='w-full max-w-md p-8 bg-white rounded-2xl border border-gray-100 shadow-lg'>
      <h3 className='text-2xl font-bold text-gray-900 mb-2'>Create New Resume</h3>
      <p className='text-gray-600 mb-8'>
        Give your resume a title to get started.you can customise everything later.
      </p>

      <form onSubmit={handleCreateResume}>
        <Input value={title}    onChange={(e) => setTitle(e.target.value)}
  placeholder='e.g jhon doe-software Engineer'
        type='text'/>
        {error && <p className='text-red-500 text-sm mb-4' >{error}</p>}
        <button type='submit' className='w-full py-3 bg-gradient-to-r from-rose-500 to bg-pink-600 text-white font-black rounded-2xl hover:scale-100 hover:shadow-xl hover:shadow-rose-200 transition-all'>
          Create Resume
        </button>
      </form>
    </div>
  )
}

export default CreateResumeForm
