import {Server} from 'socket.io';

const io=new Server(9000,{
    cors:{
        origin: 'http://localhost:3000'
    }
})

let users=[];

const addUser=(userData,socketId)=>{
    !users.some(user=>user.sub == userData.sub) && users.push({...userData,socketId});
};

const removeUser = (socketId) => {
    // Remove user based on socketId
    users = users.filter((user) => user.socketId !== socketId);
};

const getUser =(userId)=>{
    return users.find(user =>user.sub === userId);
}

io.on('connection',(socket)=>{
    console.log("user connected");

    socket.on('addUsers',userData =>{
        addUser(userData,socket.id);
        io.emit("getUsers",users);
    })

    socket.on('sendMessage',data =>{
        const user=getUser(data.receiverId);
        if (user) {
            io.to(user.socketId).emit('getMessage', data);
        } else {
            console.log(`User with ID ${data.receiverId} not found.`);
            socket.emit('error', 'User not found or offline');
        }
    })
    socket.on('disconnect', () => {
        console.log('user disconnected');
        removeUser(socket.id);
        io.emit('getUsers', users);
    })
})