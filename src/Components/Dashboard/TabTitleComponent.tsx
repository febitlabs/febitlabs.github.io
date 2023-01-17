const TabTitleComponent = (props: any) => {
    return (
        <div className="grid p-5 surface-200">
        <div className="col-6 flex justify-content-center">
            <div className="align-items-center p-8">
                <div className="text-left">
                    <span className="inline-block bg-blue-600" style={{'height': '2px', 'width': '40px', 'verticalAlign': 'middle'}}></span>
                    <span className="text-xs"> {props.mainTitle} </span>
                </div>
                <div>
                    <p className="text-6xl font-bold">{props.title}</p>
                </div>
            </div>
        </div>
        <div className="col-6">

        {/* TODO: Add images related to title */}
        {/* <img alt="" src="/images/slide1.jpg" width={'90%'}/> */}
        </div>
    </div>
    )
}

export default TabTitleComponent;
