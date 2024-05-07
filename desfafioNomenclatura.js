// Nomenclatura de variáveis

const kindOfGitHubUser = [
    {
        title: 'User',
        followers: 5
    },
    {
        title: 'Friendly',
        followers: 50,
    },
    {
        title: 'Famous',
        followers: 500,
    },
    {
        title: 'Super Star',
        followers: 1000,
    },
]

export default async function getData(req, res) {
    const userName = String(req.query.username)

    if (!userName) {
        return res.status(400).json({
            message: `Please provide an username to search on the github API`
        })
    }

    const gitHubUser = await fetch(`https://api.github.com/users/${userName}`);

    if (gitHubUser.status === 404) {
        return res.status(400).json({
            message: `User with username "${userName}" not found`
        })
    }

    const userProfile = await gitHubUser.json()

    const folowers = kindOfGitHubUser.sort((a, b) => b.followers - a.followers);

    const category = folowers.find(folower => userProfile.followers > folower.followers)

    const result = {
        gitHubUser,
        category: category.title
    }

    return result
}

getData({
    query: {
        username: 'josepholiveira'
    }
}, {})