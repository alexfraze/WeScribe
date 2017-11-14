
$.ajax({
                type: "Get",
                url: "http://localhost:5000/usage/",
                success: function(result) {
                   callback(result)
                },
                error: function(result) {
                    console.log("error" + result);
                }
    });


// work with erin to figure out API data format.
function callback(result) {
    var data = result;
    console.log(data);
    API_data =[
        {
                name: 'Alex',
                data: [
                        [Date.UTC(2011, 1, 1), 8],
                        [Date.UTC(2011, 2, 1), 9],
                        [Date.UTC(2011, 3, 1), 10],
                        [Date.UTC(2011, 4, 1), 10],
                        [Date.UTC(2011, 5, 1), 8],
                        [Date.UTC(2011, 6, 1), 7],
                        [Date.UTC(2011, 7, 1), 6],
                        [Date.UTC(2011, 8, 1), 7],
                        [Date.UTC(2011, 9, 1), 5],
                        [Date.UTC(2011, 10, 1), 4],
                        [Date.UTC(2011, 11, 1), 4]
                    ]},
        {
        name: "Sally",
        data: [
                        [Date.UTC(2011, 1, 1), 1],
                        [Date.UTC(2011, 2, 1), 3],
                        [Date.UTC(2011, 3, 1), 1],
                        [Date.UTC(2011, 4, 1), 1],
                        [Date.UTC(2011, 5, 1), 1],
                        [Date.UTC(2011, 6, 1), 4],
                        [Date.UTC(2011, 7, 1), 3],
                        [Date.UTC(2011, 8, 1), 6],
                        [Date.UTC(2011, 9, 1), 7],
                        [Date.UTC(2011, 10, 1), 7],
                        [Date.UTC(2011, 11, 1), 8]
                    ]},
        {
        name: "Erin",
        data: [
                        [Date.UTC(2011, 1, 1), 3],
                        [Date.UTC(2011, 2, 1), 2],
                        [Date.UTC(2011, 3, 1), 3],
                        [Date.UTC(2011, 4, 1), 4],
                        [Date.UTC(2011, 5, 1), 5],
                        [Date.UTC(2011, 6, 1), 7],
                        [Date.UTC(2011, 7, 1), 8],
                        [Date.UTC(2011, 8, 1), 6],
                        [Date.UTC(2011, 9, 1), 6],
                        [Date.UTC(2011, 10, 1), 6],
                        [Date.UTC(2011, 11, 1), 7]
                    ]}
            ]


    Highcharts.chart('container', {

        title: {
            text: 'My Group Netflix Usage'
        },

        subtitle: {
            text: 'Year 2017'
        },

        yAxis: {
            title: {
                text: 'Hours of Netflix Usage'
            }
        },
        xAxis: {
                type: 'datetime',
                tickInterval: 30 * 24 * 3600 * 1000,
                min: Date.UTC(2011, 1, 1),
                max: Date.UTC(2011, 12, 1),
                labels: {
                    rotation: 45,
                    step: 1,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Arial,sans-serif'
                    }
                },
                dateTimeLabelFormats: { // don't display the dummy year
                    month: '%b \'%y',
                    year: '%Y'
                }
            },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },

        series: API_data,


        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
}