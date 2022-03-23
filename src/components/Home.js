import React from 'react'

/* This example requires Tailwind CSS v2.0+ */
const features = [
    { name: 'Taxation', description: 'Providing ITR and GST related services' },
    { name: 'ROC compliance', description: 'Provide service for company incorporation and other Forms' },
    { name: 'Loan Services', description: 'Providing Home loan related Documents' },
    { name: 'Bookkeeping', description: 'Provide services of maintaince books of accounts' }
    
]

export default function Home() {
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-12 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">What all do we Provide </h2>
                    <p className="mt-4 text-gray-500">
                        We provide all services which are precise,  unquestionably vital and trustworthy. We assure you to provide lowest prices with the expert level knowledge . Fill up the below form for a free consultaning session.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv6q5zSQNeK4pWIoHmFubrnWqJ5Io3j-9BQg&usqp=CAU"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="bg-gray-100 rounded-lg"
                    />
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdW3PW0akn2YRr-wpJwRLkSkVczKT7mMsxlA&usqp=CAU"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="bg-gray-100 rounded-lg"
                    />
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_cYAsdjQpKLKphhqqbo-oyLdP6TdxvSnSrQ&usqp=CAU"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="bg-gray-100 rounded-lg"
                    />
                    <img
                        src="https://images.newindianexpress.com/uploads/user/imagelibrary/2021/3/31/w1200X800/RATE-CUT.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="bg-gray-100 rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}
