let user = [];

const renderUser = function(){
        db.collection('user').get().then(data =>{
        data.docs.forEach(element =>{
            const singleUser = element.data();
            user.push(singleUser);  
        });
        user.forEach(element =>{
            $('.grid').append('<h1 style="font-size:10px; text-align:center;">'+element.name+'</h1>');
        })
    });
}

renderUser();