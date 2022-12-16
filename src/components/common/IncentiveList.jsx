import React from 'react';

function IncentiveList({ incentives }) {
    return (
        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-4">
            {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                    <div className="sm:flex-shrink-0">
                        {incentive.imageSrc && <img className="h-16 w-16" src={incentive.imageSrc} alt="" />}
                        {incentive.icon && incentive.icon()}
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                        <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                        <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default IncentiveList;