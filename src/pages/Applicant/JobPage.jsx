import React from 'react'
import PageHeading from '../../components/PageHeading'
import NumberedListItem from '../../components/numberedListItem'
import LabelData from '../../components/LabelData'
import Button from '../../components/Button'

const JobPage = () => {
  return (
    <div className='px-24 mt-36'>
        <PageHeading heading={'Scientist B'} />
        <div className="bg-white shadow-md rounded-lg p-6 mt-6 space-y-6">
          {/* Instructions List */}
          <div className="space-y-1 pl-2">
            <LabelData label={'Status'} data={'Open'} />
            <LabelData label={'Pay Level'} data={'Level 10'} />
            <LabelData label={'Publish Date'} data={'11/13/2024'} />
            <LabelData label={'Last Date'} data={'06/12/2024'} />
            <LabelData label={'Documents'} data={'Advertisement and Application Form (624.77 KB)'} isLink={'true'} link={'../../data/jobOpenings.json'} />
          </div>
            <div className='ml-8 mt-8 mb-12'>
            <Button label={'Apply'} onClick={() => navigate('/ApplicationForm')} />
            </div>
        </div>
    </div>
  )
}

export default JobPage