var isMomHappy = true;



// Promise

var willGetNewPhone = new Promise(function 

(resolve, reject) {

    if (isMomHappy) {

        var phone = {

            brand: 'Samsung',

            color: 'black'

        };

        resolve(phone);

    } else {

        var reason = new Error('mom is not happy');

        reject(reason);

    }

})



willGetNewPhone

.then((fulfilled) => {

    console.log(fulfilled);

})

.catch((error) => {

    console.log(error.message);

})



async function some_example () {

    try {

        var data = await willGetNewPhone;

        console.log(data);

    }

    catch(error) {

        console.log(error.message);

    }

}

some_example();