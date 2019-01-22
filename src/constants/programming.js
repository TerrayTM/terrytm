import SkillItem from '../components/SkillsArea/SkillItem/SkillItem';
import * as Languages from './languages';

const programming = [
    {
        name: 'Languages',
        type: SkillItem,
        items: [
            {
                props: {
                    icon: Languages.CSharpLogo,
                    name: 'C#',
                    level: 3
                }
            },
            {
                props: {
                    icon: Languages.JavaScriptLogo,
                    name: 'JavaScript',
                    level: 3
                }
            },
            {
                props: {
                    icon: Languages.HTMLLogo,
                    name: 'HTML',
                    level: 3
                }
            },
            {
                props: {
                    icon: Languages.CSSLogo,
                    name: 'CSS',
                    level: 3
                }
            },
            {
                props: {
                    icon: Languages.JavaLogo,
                    name: 'Java',
                    level: 2
                }
            },
            {
                props: {
                    icon: Languages.PHPLogo,
                    name: 'PHP',
                    level: 2
                }
            },
            {
                props: {
                    icon: Languages.MySQLLogo,
                    name: 'MySQL',
                    level: 2
                }
            },
            {
                props: {
                    icon: Languages.CLogo,
                    name: 'C',
                    level: 2
                }
            },
            {
                props: {
                    icon: Languages.CPlusPlusLogo,
                    name: 'C++',
                    level: 1
                }
            },
            {
                props: {
                    icon: Languages.PythonLogo,
                    name: 'Python',
                    level: 1
                }
            }
        ]
    },
    {
        name: 'Frameworks',
        type: SkillItem,
        items: [
            {
                props: {
                    icon: Languages.ReactLogo,
                    name: 'React',
                    level: 3
                }
            },
            {
                props: {
                    icon: Languages.ReduxLogo,
                    name: 'Redux',
                    level: 3
                }
            },
            {
                props: {
                    icon: Languages.ElectronLogo,
                    name: 'Electron',
                    level: 2
                }
            },
            {
                props: {
                    icon: Languages.NodeJSLogo,
                    name: 'Node.js',
                    level: 2
                }
            },
            {
                props: {
                    icon: Languages.BootstrapLogo,
                    name: 'Bootstrap',
                    level: 2
                }
            }
        ]
    },
    {
        name: 'Tools',
        type: SkillItem,
        items: [
            {
                props: {
                    icon: Languages.VSCodeLogo,
                    name: 'Visual Studio Code',
                    level: 3
                }
            },
            {
                props: {
                    icon: Languages.VSLogo,
                    name: 'Visual Studio',
                    level: 3
                }
            },
            {
                props: {
                    icon: Languages.XAMPPLogo,
                    name: 'XAMPP',
                    level: 3
                }
            },
            {
                props: {
                    icon: Languages.PaintNetLogo,
                    name: 'Paint.NET',
                    level: 3
                }
            },
            {
                props: {
                    icon: Languages.GitBashLogo,
                    name: 'Git Bash',
                    level: 2
                }
            }
        ]
    }
];

export default programming;