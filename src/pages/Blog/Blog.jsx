import React from 'react';
import ReactToPdf from 'react-to-pdf';

const Blog = () => {

    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [4, 2]
    };

    return (
        <div className='my-10 mx-5 md:mx-24'>
            <div>
                <div>
                    <p className='mt-3 text-xl'>1. Tell us the differences between uncontrolled and controlled components?</p>
                    <p><span className='font-semibold'>Answer: </span>
                        Uncontrolled components maintain their own state internally, while controlled components are managed by the application's state. Uncontrolled components are simpler to use but are not suitable for form data manipulation or validation, whereas controlled components are used when form data needs to be manipulated or validated before submission.
                    </p>
                </div>
                <div>
                    <p className='mt-3 text-xl'>2. How to validate React props using PropTypes?</p>
                    <p><span className='font-semibold'>Answer: </span>
                        React provides a way to validate the props passed to a component using PropTypes.
                    </p>
                </div>
                <div>
                    <p className='mt-3 text-xl'>3. Tell us the difference between nodejs and express js?</p>
                    <p><span className='font-semibold'>Answer: </span>
                        Node.js is a JavaScript runtime environment used for building server-side applications, while Express.js is a web application framework built on top of Node.js. Node.js provides a platform for executing JavaScript code on the server, and Express.js provides features and tools for building web applications using Node.js.
                    </p>
                </div>
                <div>
                    <p className='mt-3 text-xl'>4. Tell us the difference between nodejs and express js?</p>
                    <p><span className='font-semibold'>Answer: </span>
                        Custom hooks are reusable functions in React used to encapsulate specific behavior or logic that can be shared across multiple components. They are used for code reuse, abstraction of complex logic, and improving code readability.
                    </p>
                </div>
            </div>

            

        </div>
    );
};

export default Blog;