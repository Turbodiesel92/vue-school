const user = {
    name: 'Tony Tinkertons',
    age: 42,
    job: 'inventor'
}

test('user matches', () => {
    
    expect(user).toMatchSnapshot()
})
