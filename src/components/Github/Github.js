import React from 'react';

function Github() {
    

    return (
        <div className='bg-slate-950 text-center text-slate-100 text-3xl min-h-screen flex flex-col items-center justify-center'>
            <div className='inline-block'>
                <img
                    className="py-2 h-auto max-w-full"
                    src='https://user-images.githubusercontent.com/8391493/205162876-565ca6f5-391f-4167-9752-5aa737dc4b72.gif'
                    alt="Animated GIF"
                />
            </div>

            <div className="mt-4">Social Media Accounts:</div>

            <ul className="mt-4">
                <li className="mb-4 flex items-center justify-center">
                    <a
                        href="https://github.com/harsh81r"
                        className="flex items-center hover:underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="./github (1).svg" // GitHub logo
                            alt="GitHub"
                            className="h-6 w-6 mr-2"
                        />
                        Github
                    </a>
                </li>

                <li className="mb-4 flex items-center justify-center">
                    <a
                        href="https://www.linkedin.com/in/harsh-khare-1a30412a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        className="flex items-center hover:underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" // LinkedIn logo
                            alt="LinkedIn"
                            className="h-6 mr-2 items-center"
                        />
                        Linkedin
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Github;

