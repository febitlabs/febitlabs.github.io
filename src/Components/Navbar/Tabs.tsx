import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';

const Tabs = () => {
    const navigate = useNavigate();

    // TODO: Enable the tabs once its content is designed.
    const items = [
        {
            label: 'What We Do',
            icon: 'pi pi-fw pi-file-edit',
            items: [
                {
                    label: 'Consulting',
                    command: () => {
                        navigate('/consulting');
                    },
                },
                {
                    label: 'Engineering',
                    command: () => {
                        navigate('/engineering');
                    }
                },
                {
                    label: 'Operations',
                    command: () => {
                        navigate('/operations');
                    },
                },
                {
                    label: 'Optimization',
                    command: () => {
                        navigate('/optimization');
                    },
                },
                {
                    label: 'Healthcare',
                    command: () => {
                        navigate('/healthcare');
                    },
                },
            ],
        },
        {
            label: 'Accelerated',
            icon: 'pi pi-fw pi-stopwatch',
            items: [
                // {
                //     label: 'AI/ML & DataOps',
                //     command:() => {
                //         navigate("/ai-ml-dataops");
                //     }
                // },
                // {
                //     label: 'DevSecOps, SRE & AIOps',
                //     command:() => {
                //         navigate("/devsecops-aiops");
                //     }
                // },
                {
                    label: 'Digital Transformation',
                    command: () => {
                        navigate("/digital-transformation");
                    }
                },
                {
                    label: 'Mobile Applications',
                    command: () => {
                        navigate("/mobile-applications");
                    }
                },
            ]
        },
        {
            label: 'Engagement Model',
            icon: 'pi pi-fw pi-users',
            command: () => {
                navigate("/engagement-model");
            }
        },
        {
            label: 'About',
            icon: 'pi pi-fw pi-info-circle',
            items: [
                // {
                //     label: 'Founder',
                //     command:() => {
                //         navigate("/founder");
                //     }
                // },
                {
                    label: 'Contact',
                    command: () => {
                        navigate("/contact");
                    }
                }
            ]
        },
        // {
        //     label: 'Carrers',
        //     icon: 'pi pi-fw pi-th-large',
        //     items: [
        //         {
        //             label: 'Work Worldwide',
        //             command:() => {
        //                 navigate("/work-worldwide");
        //             }
        //         },
        //         {
        //             label: 'Referral Program',
        //             command:() => {
        //                 navigate("/referral-program");
        //             }
        //         },
        //         {
        //             label: 'Job Openings',
        //             command:() => {
        //                 navigate("/job-openings");
        //             }
        //         }
        //     ]
        // },
        {
            label: 'Insights',
            icon: 'pi pi-fw pi-chart-bar',
            command: () => {
                navigate('/insights');
            },
        },
    ];

    const start = <img
        alt="logo"
        src="/images/FebitLabs_Logo.jpeg"
        height="40"
        width="200"
        className="mr-2"
        style={{'paddingRight': '5px', 'cursor': 'pointer'}}
        onClick={() => navigate('/')}>
    </img>;

    // TODO: Search has to be implemented later with functionality and added in Menubar.
    // const end = <InputText placeholder="Search" type="text" />;

    return (
        <div>
            <div className="card">
                <Menubar model={items} start={start} />
            </div>
        </div>
    );
}

export default Tabs;
