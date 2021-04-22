export interface Person {
    id?: number,
    name: string,
    cpf: string,
    email: string,
    phone: string,
    birthday: Date
}

export const emptyPerson = (): Person => ({
    id: 0,
    name: null,
    cpf: null,
    email: null,
    phone: null,
    birthday: null
})
