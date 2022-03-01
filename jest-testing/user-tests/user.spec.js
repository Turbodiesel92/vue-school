import User from './user'

describe('User', () => {
    test('name returns full name', () => {
        const user = new User({ firstname: 'Jane', lastname: 'Doe' })
        console.log(user)
        expect(user.name).toBe('Jane Doe')
    })
})
