interface ChapterRosterItemProps {
    semesterYear: string;
    className: string;
    educators: string[];
    classMembers: string[];
}

function ChapterRosterItem({ semesterYear, className, educators, classMembers }: ChapterRosterItemProps) {
    return (
        <>
            <div className={'flex flex-col text-white text-2xl'}>
                <div className={'underline text-2xl md:text-4xl'}>
                    {semesterYear}
                </div>
                <div className={'font-bold text-3xl md:text-6xl'}>
                    {className}
                </div>
                <div className={'flex flex-col mt-8 items-center'}>
                    <div className={'bg-blue-700 w-full md:w-3/5 p-2'}>
                        <div className={'text-xl md:text-2xl font-bold'}>
                            NEW MEMBER EDUCATORS
                        </div>
                        {educators.map((name: string, i: number) => (
                            <div key={i} className={'text-xl md:text-2xl'}>
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={'mt-8 mb-20 text-lg md:text-2xl px-8'}>
                    {classMembers.map((name: string, i: number) => (
                        <div key={i}>
                            {name}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ChapterRosterItem;