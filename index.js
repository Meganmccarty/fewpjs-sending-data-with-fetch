function submitData(stringName, stringEmail) {
    const userData = {
        name: stringName,
        email: stringEmail
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    };

    return fetch('http://localhost:3000/users', configurationObject)
    .then(function(response) {
        return response.json()
    })
    .then(function(object) {
        const body = document.querySelector('body');
        const para = document.createElement('p');
        const id = object.id;

        console.log(object);

        para.textContent = id;
        body.appendChild(para);
    })
    .catch(function(error) {
        const body = document.querySelector('body');
        const para = document.createElement('p');
        const errorMessage = error.message;

        console.log("myerror:", error);
        console.log(errorMessage);

        para.textContent = errorMessage;
        body.appendChild(para);
    })
}

console.log(submitData('Megan', 'megan@email.com'));

// const destinationURL = 'http://localhost:3000/dogs';

// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// };

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// }; 

// fetch(destinationURL, configurationObject)
// .then(function(response) {
//     return response.json();
// })
// .then(function(object) {
//     console.log(object);
// });
