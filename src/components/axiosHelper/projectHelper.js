import axios from'axios';

const getProjectHelper = {
  getAllTask: function () {
    return axios.get('/projects');
  }
};

export default getProjectHelper;
