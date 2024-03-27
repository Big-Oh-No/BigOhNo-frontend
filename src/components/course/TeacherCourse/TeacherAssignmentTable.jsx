import React from 'react'

function TeacherAssignmentTable(props) {
  return (
    <div>
      <div className='bg-red-500 p-5 text-white rounded-xl w-max' onClick={() => props.onClick()}>Close</div>
      Grades for the course here
      {props.assignment.title}
    </div>
  )
}

export default TeacherAssignmentTable
