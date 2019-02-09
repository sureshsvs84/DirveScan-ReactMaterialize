module.exports = {
    baseUrl: "http://192.168.50.191:49160/tecnotreeService",
    api: {
        getRegistrations: "getRegistrations",
        getPendingApprovals: "getPendingApprovals",
        getTroubleTickets: "getTroubleTickets"
    },
    devEnv: {
        baseUrl: "http://192.168.50.191:49160/tecnotreeService",
    },
    prodEnv:{
        baseUrl: "http://192.168.50.191:49160/tecnotreeService",
    }
};