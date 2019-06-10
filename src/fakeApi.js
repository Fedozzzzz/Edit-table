var data=
    [
        {
            id:'12213',
            userDays: [
                {
                    date: "2018-08-06T00:00:00",
                    isAttended: true,
                    isPaid: true
                },
                {
                    date: "2018-08-09T00:00:00",
                    isAttended: true,
                    isPaid: true
                },
                {
                    date: "2018-08-15T00:00:00",
                    isAttended: true,
                    isPaid: true
                },
                {
                    date: "2018-08-17T00:00:00",
                    isAttended: true,
                    isPaid: true
                }
            ],
            userProfile: {
                name: "Alexander",
                surname: "Shishkin",
                patronymic: "Dmitrievich",
                phoneNumber: 83149545254,
                email: "ashishkin@mail.ru"
            },
            accountAmount: 1100,
            dept: 0
        },
        {
            id:'12345',
            userDays: [
                {
                    date: "2018-08-06T00:00:00",
                    isAttended: false,
                    isPaid: false
                },
                {
                    date: "2018-08-09T00:00:00",
                    isAttended: false,
                    isPaid: false
                },
                {
                    date: "2018-08-13T00:00:00",
                    isAttended: false,
                    isPaid: false
                }
            ],
            userProfile: {
                name: "Andrey",
                surname: "Shurikov",
                patronymic: "Vasilievich",
                phoneNumber: 83149565253,
                email: "ashurikov@mail.ru"
            },
            accountAmount: 500,
            dept: 0
        }
    ];


export const getUsers=()=>new Promise((resolve, reject)=> {
    console.log('getUsers-api');
    if (true) {
        resolve(data)
    } else {
        reject(Error('broke'))
    }
});

export const editUser=(row)=>new Promise((resolve, reject)=> {
    console.log('editRows-api');
    if (true) {
        //find(row, 1);
        //row[row.id] = row;
        data = row;
        console.log(data);
        resolve(true)
    } else {
        reject(Error('broke'))
    }
});

export const deleteUser=id=>new Promise((resolve, reject)=>{
    //console.log('getRows');
    if(data[id]){
        delete data[id];
        resolve()
    }
    else{
        reject(Error('broke'))
    }
});






