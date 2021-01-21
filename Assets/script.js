
var today = new Date();
var myToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds());
console.log(myToday);



var dateObj = 
    [
        {
            time: 8,
            plan: ''
        },   
        {
            time: 9,
            plan: ''
        }, 
        {
            time: 10,
            plan: ''
        }, 
        {
            time: 11,
            plan: ''
        }, 
        {
            time: 12,
            plan: ''
        },
        {
            time: 13,
            plan: ''
        }, 
        {
            time: 14,
            plan: ''
        }, 
        {
            time: 15,
            plan: ''
        }, 
        {
            time: 16,
            plan: ''
        }, 
        {
            time: 17,
            plan: ''
        }
    ]

    render()

var theTime = 10;

var workStart = 8;
var workEnd = 17;

console.log(theTime);

for (var i = workStart; i <= workEnd; i++)
{
    
    console.log(i);

    if (i < theTime)
    {
        $('#' + i ).addClass('past');
    }
    else if (i === theTime) 
    {
        $('#' + i ).addClass('present');
    }
    else if (i > theTime) 
    {
        $('#' + i ).addClass('future');
    }
    else
    {

    }
}

// $('.list-group-item').click(function()
//     {
//        var textField = $(this).find(".time-span");
//        var spanID = textField.attr('id');
        
//        console.log(textField);
//        console.log(spanID);

//     }
// )

$('.btn').click(function()
    {
       var textField = $(this).parent().siblings(".time-span");
       var spanID = textField.attr('id');
       
       textfieldContent = $('#' + spanID).text();

       if (localStorage.getItem("dateObj") === null) 
        {
        
        }

        else
        {
            $.each(dateObj, function( key, value ) {

            if (value.time == spanID) 
                {
                    value.plan = textfieldContent;
                    console.log(value.plan);
                }
            });
        }

        localStorage.setItem('dateObj', JSON.stringify(dateObj));    
        
        render();

    }
)

function render()
{
    
    i = 0;
   
    if (localStorage.getItem("dateObj") === null) {
      
    }

    else
    {
        
        var retrievedObject = localStorage.getItem('dateObj');
        $.each(JSON.parse(retrievedObject), function( key, value ) {
            

            $('#' + value.time).text(value.plan);
            
            dateObj[i].time = value.time;
            dateObj[i].plan = value.plan;

            i++;
        });
    }
   
   

}
