import "./Navbar.css"

export const Content = () => {
    // Array of content items for the first section
    const contentArray = [
        { H1: ".NET", H2: "DevCraft", description: "This is the first item", color: "green" },
        { H1: "HTML", H2: "NativeScript", description: "This is the second item", color: "blue" },
        { H1: "NATIVE MOBILE", H2: "Kendo UI", description: "This is the third item", color: "red" },
    ];
    
    // Array of content items for the second section
    const contentArray2 = [
        { H1: "CMS", H2: "Progress Sitefinity", description: "This is the fourth item", color: "gray" },
        { H1: "MOBILE", H2: "Telerik Platform", description: "This is the fifth item", color: "gray" },
        { H1: "TESTING", H2: "Test Studio", description: "This is the sixth item", color: "gray" },
    ];

    return (
        <div className="m-5 sm:m-10 lg:m-12">
            {/* First section of content items */}
            <div className="flex flex-wrap justify-center gap-5">
                {contentArray.map(item => (
                    <div 
                        className="bordered-div p-4 sm:p- flex flex-col items-center relative self-center" 
                        key={item.H1}
                    >
                        {/* Display the H1 item as a label with specific styling */}
                        <pre 
                            className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white font-bold text-lg px-2 py-1" 
                            style={{ color: item.color }}
                        >
                            {item.H1}
                        </pre>
                        {/* Display the H2 item as a title */}
                        <p className="font-bold text-xl sm:text-2xl mb-4">{item.H2}</p>
                        {/* Display the description of the item */}
                        <p className="text-sm sm:text-base text-center">{item.description}</p>
                        {/* Button for more details */}
                        <button 
                            className="px-2 py-1 text-xs border rounded text-white mt-7 w-24 h-10" 
                            style={{ background: item.color }}
                        >
                            Learn more
                        </button>
                    </div>
                ))}
            </div>

            {/* Second section of content items */}
            <div className="flex flex-wrap justify-center gap-5 mt-10">
                {contentArray2.map(item => (
                    <div 
                        className="bordered-div p-4 sm:p- flex flex-col items-center relative self-center" 
                        key={item.H1}
                    >
                        {/* Display the H1 item as a label with specific styling */}
                        <pre 
                            className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white font-bold text-lg px-2 py-1" 
                            style={{ color: item.color }}
                        >
                            {item.H1}
                        </pre>
                        {/* Display the H2 item as a title */}
                        <p className="font-bold text-xl sm:text-2xl mb-4">{item.H2}</p>
                        {/* Display the description of the item */}
                        <p className="text-sm sm:text-base text-center">{item.description}</p>
                        {/* Button for more details */}
                        <button 
                            className="px-2 py-1 text-xs border rounded text-white mt-7 w-24 h-10" 
                            style={{ background: item.color }}
                        >
                            Learn more
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Content;
