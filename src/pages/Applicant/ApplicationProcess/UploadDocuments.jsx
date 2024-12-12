import React from 'react'

const UploadDocuments = () => {
  return (
    <div className="container mx-auto px-6 pt-16">
        {/* Page Heading */}
        <PageHeading heading="Upload Documents" />

        <div className="bg-white shadow-md rounded-lg p-6 mt-6 space-y-6">
            <div className=''>
                <FormInput label='Full Name' name='FullName' />
                <FormInput label='Date of Birth' type='Date' name='DOB' />
                <FormInput label="Mother's Name" name='MotherName' />
                <FormInput label='Gender' name='FullName' />
                <FormInput label='Nationality' name='Nationality' />
                <FormInput label='Mobile Number' name='MobileNo' />
                <FormInput label='email' name='Email' />
            </div>
            <div className=''>
                <FormInput label='Aadhar Number' name='Aadhar' />
                <FormInput label='PAN' name='PAN' />
                <FormInput label='10th Marks' name='XMarks' />
                <FormInput label='12th/Diploma Marks' name='XIIDipMarks' />
            </div>
        </div>
    </div>
  )
}

export default UploadDocuments