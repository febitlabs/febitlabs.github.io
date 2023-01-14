import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';

const Tabs = () => {
    const items = [
        {
            label: 'What We Do',
            icon: 'pi pi-fw pi-file-edit',
            items: [
                {
                    label: 'Consulting',
                },
                {
                    label: 'Engineering',
                },
                {
                    label: 'Operations',
                },
                {
                    label: 'Optimization',
                },
                {
                    label: 'Healthcare',
                }
            ]
        },
        {
            label: 'Accelerated',
            icon: 'pi pi-fw pi-stopwatch',
            items: [
                {
                    label: 'AI/ML & DataOps',
                },
                {
                    label: 'DevSecOps, SRE & AIOps',
                },
                {
                    label: 'Digital Transformation',
                },
                {
                    label: 'Mobile Applications',
                },
            ]
        },
        {
            label: 'Engagement Model',
            icon: 'pi pi-fw pi-users',
        },
        {
            label: 'About',
            icon: 'pi pi-fw pi-info-circle',
            items: [
                {
                    label: 'Founder',
                },
                {
                    label: 'Contact',
                }
            ]
        },
        {
            label: 'Carrers',
            icon: 'pi pi-fw pi-th-large',
            items: [
                {
                    label: 'Work Worlwide',
                },
                {
                    label: 'Referral Program',
                },
                {
                    label: 'Job Openings',
                }
            ]
        },
        {
            label: 'Insights',
            icon: 'pi pi-fw pi-chart-bar'
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