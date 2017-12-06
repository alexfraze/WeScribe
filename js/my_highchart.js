/*$.ajax({
                type: "Get",
                url: "http://localhost:5000/usage/",
                success: function(result) {
                   callback(result)
                },
                error: function(result) {
                    console.log("error" + result);
                }
    });
*/

// work with erin to figure out API data format.
/*function callback(result) {
    var data = result;
    console.log(data);*/

      

    API_data =[
    {
        name: 'Alex',
        data: [0, 12.3, 15.1, 17 , 0]
    },
    {
        name: "Sally",
        data: [7.0, 6.9, 15.5, 14.5, 6.4]
    },
    {
        name: "Erin",
        data: [8.9, 4.2, 4.7, 8.5, 3.0]
    }]



Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Weekly Netflix Usage'
    },
    subtitle: {
        text: 'November 2017' 
    },
    xAxis: {
        categories: ['Nov 1-7', 'Nov 8-14', 'Nov 15-21', 'Nov 22-28', 'Nov 29- Dec 5']
    },
    yAxis: {
        title: {
            text: 'Hours Watched'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
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



