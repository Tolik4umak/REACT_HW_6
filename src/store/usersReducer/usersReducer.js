const defUsers = [
    {
        id: 1,
        name: 'Anatolii',
        age: 29,
        gender: 'm',
        avatar: 'https://i.pinimg.com/236x/28/92/14/289214306d5a57d18c207edb57b49c19.jpg'
    },
    {
        id: 2,
        name: 'Violetta',
        age: 28,
        gender: 'f',
        avatar: 'https://99px.ru/sstorage/1/2019/01/image_12101190255345455401.jpg'
    },
    {
        id: 3,
        name: 'Boris',
        age: 33,
        gender: 'm',
        avatar: 'https://img.freepik.com/premium-vector/anguished-face-emoji-yellow-round-emoticon-with-shock-expression-isolated-on-white-background_53562-14273.jpg'
    },
    {
        id: 4,
        name: 'Ginny',
        age: 47,
        gender: 'f',
        avatar: 'https://dekorprazdnik.ru/d/maska_smayly.jpg'
    }
]

const ADDUSER = 'ADDUSER'

export const addUserAction = (name, age, gender, avatar) => {
    return {
        type: ADDUSER,
        payload: {
            id: Date.now(),
            name, age, gender, avatar
        }
    }
}


export const usersReducer = (state = defUsers, {type, payload}) => {

    if(type === ADDUSER){
        return [...state, payload]
    }

    return state
}