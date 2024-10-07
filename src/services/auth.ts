import { IUser } from "@/types/IUser"

export const signUp = async (user: IUser) => {
    const response = await fetch('/api/sign-up', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(user)
    })

    console.log(response.status);

    const data = await response.json();

    console.log(data.message);

    if (response.status === 400) {
        alert("Usuario ya existe")
    } else if (!response.ok) {
        alert("No se pudo agregar usuario");
        throw Error("No se pudo agregar usuario")
    }
    else {
        alert("Usuario creado exitosamente")
    }

    return data
}