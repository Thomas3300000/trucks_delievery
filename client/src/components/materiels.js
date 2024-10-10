import React from 'react';
import dataRemorques from './dataRemorques';

const Materiels = () => {
    return (
        <div>
            <h1>Materiels</h1>
            <div>
                {dataRemorques.map((remorque) => (
                    <div key={remorque.id}>
                        <img src={remorque.image} alt={remorque.name} />
                        <h2>{remorque.name}</h2>
                        <p>{remorque.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Materiels;
