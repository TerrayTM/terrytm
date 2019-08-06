import * as actionTypes from './actionTypes';
import request from '../../../helpers/request';

export const loadProject = () => {
    return async dispatch => {
        this.setState({ content: null });
        if (this.assertProps(this.props)) {
            try {
                const category = this.props.match.params.category;
                const post = this.props.match.params.name;
                let response = await fetch(`https://terrytm.com/services/rest_api.php?type=projects&category=${category}&post=${post}`);
                response = await response.json();
                if (!response || response.error) {
                    this.setState({ content: 'ERROR_BAD_FILE' });
                    return;
                }
                const images = [];
                for (let i = 1; i <= response.number; ++i) {
                    images.push(`https://terrytm.com/content/projects-content/${category}/${post}/${i}.png`);
                }
                this.setState({
                    title: response.name,
                    creator: response.creator,
                    date: response.date,
                    content: response.description,
                    current: images[0],
                    link: response.link,
                    range: 0,
                    images,
                    technologies: response.technology.split(' '),
                    tags: response.tag.split('|')
                });
            }
            catch (error) {
                this.setState({ content: 'ERROR_BAD_FILE' });
            }
        } else {
            this.setState({ content: 'ERROR_BAD_FILE' });
        }
    };
};

const loadProject = (blogData, projectsData) => {
    return {
        type: actionTypes.DATA_LOADED,
        blogData,
        projectsData
    };
};

const dataFailed = () => {
    return {
        type: actionTypes.DATA_FAILED,
    };
};