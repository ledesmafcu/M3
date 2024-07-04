//TURNOS FICTICIOS

const turnos = [
    {
        id:1,
        date:new Date('2024-04-17T15:30:00').toLocaleDateString(),
        time:new Date('2024-04-17T15:30:00').toLocaleTimeString(),
        status: "active",
        user: {
            id: 56,
            name: "Fernando",
            email: "Fer@gmail.com",
            birthdate: "",
            nDni: "12345678"
        }
    },
    {
        id:2,
        date:new Date('2024-04-17T15:30:00').toLocaleDateString(),
        time:new Date('2024-04-17T15:30:00').toLocaleTimeString(),
        status: "active",
        user: {
            id: 56,
            name: "Fernando",
            email: "Fer@gmail.com",
            birthdate: "",
            nDni: "12345678"
        }
    }
]

export default turnos;