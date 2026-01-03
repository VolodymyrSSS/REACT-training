import { useLoaderData, Form, useActionData } from 'react-router-dom';

export default function UserDetails() {
    const loaderData = useLoaderData();
    console.log(loaderData);

    const actionData = useActionData();
    console.log(actionData);

  return (
    <div>
        <h4>Here the data with UserDetails params</h4>
        <Form
            action='/admin/manage/user/1'
            method='post'
        >
            <input type='text' name='email' className='m-5 bg-light-900'/>
            <button type="submit">Submit</button>
            <br />

            {actionData?.errors && <span className='text-red-400'>{actionData.errors}</span>}

        </Form>
    
    </div>
  )
}
