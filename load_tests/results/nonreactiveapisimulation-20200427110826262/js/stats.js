var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "402",
        "ok": "23",
        "ko": "379"
    },
    "minResponseTime": {
        "total": "11475",
        "ok": "11475",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60255",
        "ok": "59816",
        "ko": "60255"
    },
    "meanResponseTime": {
        "total": "59347",
        "ok": "48298",
        "ko": "60017"
    },
    "standardDeviation": {
        "total": "4266",
        "ok": "13733",
        "ko": "46"
    },
    "percentiles1": {
        "total": "60001",
        "ok": "54117",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "60002",
        "ok": "56918",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "60131",
        "ok": "58897",
        "ko": "60134"
    },
    "percentiles4": {
        "total": "60218",
        "ok": "59628",
        "ko": "60219"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 23,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 379,
    "percentage": 94
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.025",
        "ok": "0.287",
        "ko": "4.737"
    }
},
contents: {
"req_getusers-2c222": {
        type: "REQUEST",
        name: "GetUsers",
path: "GetUsers",
pathFormatted: "req_getusers-2c222",
stats: {
    "name": "GetUsers",
    "numberOfRequests": {
        "total": "402",
        "ok": "23",
        "ko": "379"
    },
    "minResponseTime": {
        "total": "11475",
        "ok": "11475",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60255",
        "ok": "59816",
        "ko": "60255"
    },
    "meanResponseTime": {
        "total": "59347",
        "ok": "48298",
        "ko": "60017"
    },
    "standardDeviation": {
        "total": "4266",
        "ok": "13733",
        "ko": "46"
    },
    "percentiles1": {
        "total": "60001",
        "ok": "54117",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "60002",
        "ok": "56918",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "60131",
        "ok": "58897",
        "ko": "60134"
    },
    "percentiles4": {
        "total": "60218",
        "ok": "59628",
        "ko": "60219"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 23,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 379,
    "percentage": 94
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.025",
        "ok": "0.287",
        "ko": "4.737"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
