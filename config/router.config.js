export default [
    // H5
    {
        path: "/",
        component: "../layouts/BasicLayout",
        Routes: ["src/pages/Authorized"],
        authority: ["user", "admin"],
        routes: [
            { path: "/", component: "./home/index", title: "首页" },
            { path: "/404", component: "404" }
        ]
    }
]
