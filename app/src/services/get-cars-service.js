import api from "./api";

const getCarsService = () => api({ url: "/cars?_expand=brand" });

export default getCarsService;
