const users = [];
const addUser = ({id, username,room})=>{
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()
    if(!username||!room){
        return {
            error: 'Username and Room must be filled'
        }
    }
    const existingUser = users.find((user)=>{
        return (user.room === room) && (user.username=== username)
    })
    if(existingUser){
        return {
            error: 'Username is already is in use!'
        }
    }
    const user = {
        id,
        username,
        room
    }
    users.push(user)
    return {user}
}
const removeUser = (id)=>{
    const index = users.findIndex((user)=>{
        return user.id === id
    })
    if(index!== -1){
        return users.splice(index,1)[0]
    }
}
const one = addUser({
    id:22,
    username:'Tarun',
    room:'Delhi'
})

const two = addUser({
    id:42,
    username:'Tarun',
    room:'New Delhi'
})
const three = addUser({
    id:32,
    username:'Dhruv',
    room:'Delhi'
})

// console.log(one)
// const removedUser = removeUser(22)
// console.log(removedUser)
// console.log(users)

const getUser = (id)=>{
    return users.find((user)=> user.id === id)
}
console.log(getUser(22))

const getUsersInRoom = (room)=>{
    room = room.toLowerCase().trim()
    return users.filter((user)=>user.room === room)
}

console.log(getUsersInRoom('Delhi'))
module.exports = {
    addUser,
    getUser,
    getUsersInRoom,
    removeUser
}

