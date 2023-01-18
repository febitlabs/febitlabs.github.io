import TabTitleComponent from "../Dashboard/TabTitleComponent"

const EngagementModelComponent = () => {
    const content = [
        {
            title: 'Maturity Scans',
            icon: 'pi pi-search',
            listItem: [
                "Cloud Architecture",
                "Microservices & APIs",
                "DevSecOps & CI / CD",
                "State of Scaled Agility(Scaled VS Spotify)",
                "Cloud Data Platforms & DataOps",
                "Tools Rationalisation"
            ]
        },
        {
            title: 'Capability Building',
            icon: "pi pi-server",
            listItem: [
                "Cloud Native Microservices & APIs",
                "Full Stack ~ Omni Channel Solutions",
                "DevSecOps & AIOps",
                "AI/ML & Data Software Engineering",
                "Test Automation"
            ]
        }
    ]
    return (
        <div>
            <TabTitleComponent mainTitle="" title="Engagement Model" />
            <div className="grid">
                <div className="col-12 flex">
                    {content.map((sub) => (
                        <div className="col-6 p-8">
                            <i className={sub.icon} style={{ 'fontSize': '2em' }}></i>
                            <p className="text-3xl font-bold">{sub.title}</p>
                            {sub.listItem.map((item) => (
                                <div className="text-500" >
                                    <i className="pi pi-ellipsis-h"></i>
                                    <div>{item}</div>
                                </div>
                            ))}
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default EngagementModelComponent
