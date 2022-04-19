export const allProjects = [
    {
        id:1,
        title: "Project One",
        blurb: "This is a great project",
        category_id:1,
        goal: 300,
        progress: 1,
        primary_image: "https://via.placeholder.com/300.jpg",
        is_open: true,
        status: "open",
        date_created: "2022-04-18T14:22:23.382748Z",
        goal_date: "2022-04-18T14:22:23.382748Z",
        owner: 1,
    },
    
]

export const oneProject = {
    id:1,
    title: "Project One",
    blurb: "This is a great project",
    description: "More info on this great project",
    category_id:1,
    goal: 300,
    progress: 1,
    primary_image: "https://via.placeholder.com/300.jpg",
    secondary_image: "https://via.placeholder.com/300.jpg",
    is_open: true,
    status: "open",
    date_created: "2022-04-18T14:22:23.382748Z",
    goal_date: "2022-04-18T14:22:23.382748Z",
    owner: 1,
    pledges: [
        {
        id: 1,
        amount: 100,
        comment: "A comment for the pledge",
        anonymous: false,
        supporter: 1,
        project_id: 1,
        pledge_type_id: 1,
        },
    ],
};