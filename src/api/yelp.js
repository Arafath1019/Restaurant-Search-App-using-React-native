import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer md86gMaXIp_LoseiHMu9X5c_StqQ7O5_UNgmns6duur_TbcB1_aCA-Yatx279_buu282VARIBAD7ZdHLrDNebLV8x0Uu478t9HaiDZVXInd5ONJhIzpMwHi4jzk9X3Yx'
    }
});