interface ActiveHouseItemProps {
    image: string;
    lineNumber: string;
    name: string;
    role: string;
    contact: string;
    year: string;
}

function ActiveHouseItem({ image, lineNumber, name, role, contact, year }: ActiveHouseItemProps) {
    return (
        <>
            <div className="flex flex-col items-center">
                <div className={'bg-blue-700 text-5xl font-bold w-40 my-4'}>{lineNumber}</div>

                <div className="relative inline-block">
                    <div className={'absolute top-2 left-2 bg-black/70 text-white text-sm font-bold px-2 py-1 rounded'}>
                        {year}
                    </div>
                    <img
                        src={image}
                        alt={name}
                        loading="lazy"
                        className="object-cover object-center w-84 h-84 md:w-128 md:h-128"
                    />
                </div>
                <div className="my-2 space-y-2 w-full flex flex-col items-center">
                    <div className={'text-lg font-bold'}>{name}</div>
                </div>
                <div className='text-lg'>
                    <div>{role}</div>
                    <div>{contact}</div>
                </div>

            </div>
        </>
    );
}

export default ActiveHouseItem;