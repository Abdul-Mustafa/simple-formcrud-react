import { useState } from 'react'

function Form({setName, onSubmission}) {

    


  return (
      <form action="/submit-form" method="POST"  onSubmit={(e)=>(onSubmission(e))}>
      <fieldset>
        <legend>Personal Information:</legend>
        <label htmlFor="name" >Name:</label>
        <input type="text" id="name" name="name" onChange={(e)=>(setName(e))} /><br /><br />
        <input type="submit" value="Submit" />
      </fieldset>
    </form>
  )
}
export default Form;