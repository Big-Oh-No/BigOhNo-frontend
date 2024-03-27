
import React from 'react'
import CourseCard from '../common/CourseCard'

function TeacherAssignment() {
  return (
    <>
     <div className="text-5xl font-bold font-inter pt-10 w-full pl-10 pb-10 bg-dark-theme z-20 text-white fixed">
        Assignments
      </div>
      <div className='pt-10 w-screen'>
        {/* If no assignments, then show this lol */}
        {/* <div className='w-full h-full  flex justify-center items-center text-2xl'>No Assignments available</div> */}

        {/* else... */}
        <div className='flex w-full justify-center mt-[7rem]'>
            <div className='flex flex-col w-full px-32'>
                <div className='w-full h-[19rem] flex justify-center items-center'>
                    
                </div>
            </div>
        </div>
      </div>
    </>
   
  )
}

export default TeacherAssignment
