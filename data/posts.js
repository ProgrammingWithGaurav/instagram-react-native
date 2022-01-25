import { Users } from "./users";
export const Posts = [
    {
        imageUrl: 'https://i.ibb.co/182bP1y/4k.png',
        user: Users[0].user,
        likes: 7870,
        caption: 'Train Ride to Hogwarts.',
        profile_picture: Users[0].image,
        comments: [
            {
                user: 'User1',
                comment: 'Great'
            },
            {
                user: 'User2',
                Comment: 'Good'
            },

        ],
    },
    {
        imageUrl: 'https://i.ibb.co/182bP1y/4k.png',
        user: Users[1].user,
        likes: 7870,
        caption: 'Train Ride to Hogwarts.',
        profile_picture: Users[0].image,
        comments: [
            {
                user: 'User1',
                comment: 'Great'
            },
            {
                user: 'User2',
                Comment: 'Good'
            },

        ],
    },
]