var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "662",
        "ok": "662",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2548",
        "ok": "2548",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "31233",
        "ok": "31233",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "16187",
        "ok": "16187",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "7509",
        "ok": "7509",
        "ko": "-"
    },
    "percentiles1": {
        "total": "15777",
        "ok": "15777",
        "ko": "-"
    },
    "percentiles2": {
        "total": "21315",
        "ok": "21315",
        "ko": "-"
    },
    "percentiles3": {
        "total": "29305",
        "ok": "29305",
        "ko": "-"
    },
    "percentiles4": {
        "total": "30598",
        "ok": "30598",
        "ko": "-"
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
    "count": 662,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12.98",
        "ok": "12.98",
        "ko": "-"
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
        "total": "662",
        "ok": "662",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2548",
        "ok": "2548",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "31233",
        "ok": "31233",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "16187",
        "ok": "16187",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "7509",
        "ok": "7509",
        "ko": "-"
    },
    "percentiles1": {
        "total": "15777",
        "ok": "15777",
        "ko": "-"
    },
    "percentiles2": {
        "total": "21315",
        "ok": "21315",
        "ko": "-"
    },
    "percentiles3": {
        "total": "29305",
        "ok": "29305",
        "ko": "-"
    },
    "percentiles4": {
        "total": "30598",
        "ok": "30598",
        "ko": "-"
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
    "count": 662,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12.98",
        "ok": "12.98",
        "ko": "-"
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
