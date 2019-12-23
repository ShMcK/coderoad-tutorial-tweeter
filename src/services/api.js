import * as faker from 'faker'

const api = async url => {
	// sign up for a developer twitter account to get real tweets
	// examples at https://api.twitter.com/1.1/search/tweets.json

	// fake api delay
	await new Promise((resolve, reject) => {
		setTimeout(resolve, 1500)
	})

	// fake api
	switch (url) {
		case 'messages':
			// generate fake data
			const fakeMessages = [1, 2, 3, 4, 5, 6].map(() => ({
				id_str: faker.random.uuid(),
				created_at: faker.date.recent().toISOString(),
				text: faker.lorem.paragraph(),
				retweet_count: faker.random.number(50),
				retweeted: false,
				favorite_count: faker.random.number(50),
				favorited: false,
				user: {
					id_str: faker.random.uuid(),
					name: faker.internet.userName(),
					screen_name: faker.internet.userName(),
					profile_image_url_https: faker.image.avatar(),
				},
			}))

			return fakeMessages
		default:
			throw new Error('Unknown API endpoint')
	}
}

export default api
