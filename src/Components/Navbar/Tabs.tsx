import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

const Tabs = () => {
    const items = [
        {
            label: 'What We Do',
            icon: 'pi pi-fw pi-file-edit',
            items: [
                {
                    label: 'Consulting',
                    command:() => {
                        window.location.href = "/consulting"
                    }
                },
                {
                    label: 'Engineering',
                    command:() => {
                        window.location.href = "/engineering"
                    }
                },
                {
                    label: 'Operations',
                    command:() => {
                        window.location.href = "/operations"
                    }
                },
                {
                    label: 'Optimization',
                    command:() => {
                        window.location.href = "/optimization"
                    }
                },
                {
                    label: 'Healthcare',
                    command:() => {
                        window.location.href = "/healthcare"
                    }
                }
            ]
        },
        {
            label: 'Accelerated',
            icon: 'pi pi-fw pi-stopwatch',
            items: [
                {
                    label: 'AI/ML & DataOps',
                    command:() => {
                        window.location.href = "/ai-ml-dataops"
                    }
                },
                {
                    label: 'DevSecOps, SRE & AIOps',
                    command:() => {
                        window.location.href = "/devsecops-aiops"
                    }
                },
                {
                    label: 'Digital Transformation',
                    command:() => {
                        window.location.href = "/digital-transformation"
                    }
                },
                {
                    label: 'Mobile Applications',
                    command:() => {
                        window.location.href = "/mobile-applications"
                    }
                },
            ]
        },
        {
            label: 'Engagement Model',
            icon: 'pi pi-fw pi-users',
            command:() => {
                window.location.href = "/engagement-model"
            }
        },
        {
            label: 'About',
            icon: 'pi pi-fw pi-info-circle',
            items: [
                {
                    label: 'Founder',
                    command:() => {
                        window.location.href = "/founder"
                    }
                },
                {
                    label: 'Contact',
                    command:() => {
                        window.location.href = "/contact"
                    }
                }
            ]
        },
        {
            label: 'Carrers',
            icon: 'pi pi-fw pi-th-large',
            items: [
                {
                    label: 'Work Worldwide',
                    command:() => {
                        window.location.href = "/work-worldwide"
                    }
                },
                {
                    label: 'Referral Program',
                    command:() => {
                        window.location.href = "/referral-program"
                    }
                },
                {
                    label: 'Job Openings',
                    command:() => {
                        window.location.href = "/job-openings"
                    }
                }
            ]
        },
        {
            label: 'Insights',
            icon: 'pi pi-fw pi-chart-bar',
            command:() => {
                window.location.href = "/insights"
            }
        }
    ];

    const start = <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" height="40" width="200" className="mr-2"></img>;
    const end = <InputText placeholder="Search" type="text" />;

    return (
        <div>
            <div className="card">
                <Menubar model={items} start={start} end={end} />
            </div>
        </div>
    );
}

export default Tabs