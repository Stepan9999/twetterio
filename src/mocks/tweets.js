import faker from 'faker';

const tweets = new Array(12).fill(null).map( e =>{
    return{
        _id: faker.datatype.uuid(),
        createdAt: faker.date.recent(),
        content: faker.lorem.words(42),
        statistic: {
            likes: faker.datatype.number(2442),
            comments: faker.datatype.number(2442),
            replies: faker.datatype.number(2442)
        }, 
        user: {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            _nickName: faker.internet.userName(),
            avatarUrl: faker.image.avatar(), 
        }
    }
})

export default tweets;