import React from 'react'
import PageHeading from '../../../components/PageHeading';
import NumberedListItem from '../../../components/numberedListItem';

const Instructions = () => {
  return (
    <div>
      <div className='px-24 mt-36'>
        <PageHeading heading={'Scientist B'} />
        <div className="bg-white shadow-md rounded-lg p-6 mt-6 space-y-6">
          {/* Instructions List */}
          <div className="space-y-1 pl-2">
            <NumberedListItem index="1" content="Please ensure that your application form is filled correctly." />
            <NumberedListItem index="2" content="Only completed applications will be considered for review." />
            <NumberedListItem index="3" content="Upload your latest CV and relevant documents as per the position requirements." />
            <NumberedListItem index="4" content="Ensure that all details provided are accurate and up-to-date." />
            <NumberedListItem index="5" content="After completing the form, click 'Submit' to finalize your application." />
          </div>
        </div>
    </div>
    </div>
  )
}

export default Instructions;