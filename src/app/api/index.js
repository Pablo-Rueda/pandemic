import axios from "axios";

const url = "https://covid-api.mmediagroup.fr/v1/cases"

export const fetchData = async () => {
    try {
        const {data} = await axios.get(url);

        return data;
    } catch(error){ }
}

