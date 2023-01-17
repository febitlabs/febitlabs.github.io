const StackComponent = () => {
    return (
        <div className="grid p-5">
            <div className="col-6 flex justify-content-center">
                <div className="align-items-center  p-8">
                    <div>
                        <span className="inline-block bg-blue-600" style={{'height': '2px', 'width': '40px'}}></span>
                        <span> ARCHITECTURE ANATOMY</span>
                    </div>
                    <div>
                        <p className="text-6xl font-bold">Sample Stack</p>
                    </div>
                </div>
            </div>
            <div className="col-6">
            <img src="/images/CloudNativeStack.png" width={'90%'}/>
            </div>
        </div>
    )
}

export default StackComponent
