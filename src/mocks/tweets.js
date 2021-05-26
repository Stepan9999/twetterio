import faker from 'faker';

const tweets = new Array(12).fill(null).map( e =>{
    return{
        _id: faker.datatype.uuid(),
        createdAt: faker.date.recent(),
        content: faker.lorem.words(42),
        numbers: faker.datatype.number(),
        user: {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            _nickName: faker.internet.userName(),
            avatarUrl: faker.image.avatar(), 
        }
    }
})

export default tweets;